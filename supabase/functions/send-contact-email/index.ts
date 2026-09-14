import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

interface ContactRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot?: string;
  timestamp?: number;
}

// Rate limiting store (in-memory, resets on function restart)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW = 60000;

// HTML entity encoding for XSS prevention
const escapeHtml = (text: string): string => {
  const htmlEntities: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '/': '&#x2F;',
    '`': '&#x60;',
    '=': '&#x3D;'
  };
  return text.replace(/[&<>"'`=/]/g, (char) => htmlEntities[char] || char);
};

// Strict email validation - using simpler, safer regex
const isValidEmail = (email: string): boolean => {
  if (email.length > 255) return false;
  const parts = email.split("@");
  if (parts.length !== 2) return false;
  const [local, domain] = parts;
  if (!local || !domain || local.length > 64 || domain.length > 255) return false;
  // Simple validation for local and domain parts
  const localRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+$/;
  const domainRegex = /^[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?(\.[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?)*$/;
  return localRegex.test(local) && domainRegex.test(domain);
};

// Check for suspicious patterns
const containsSuspiciousContent = (text: string): boolean => {
  const suspiciousPatterns = [
    /<script/i,
    /javascript:/i,
    /on\w+\s*=/i,
    /data:/i,
    /vbscript:/i,
    /<iframe/i,
    /<object/i,
    /<embed/i,
    /eval\(/i,
    /expression\(/i,
  ];
  return suspiciousPatterns.some(pattern => pattern.test(text));
};

// Rate limiting check
const checkRateLimit = (ip: string): boolean => {
  const now = Date.now();
  const record = rateLimitStore.get(ip);
  
  if (!record || now > record.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + RATE_WINDOW });
    return true;
  }
  
  if (record.count >= RATE_LIMIT) {
    return false;
  }
  
  record.count++;
  return true;
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  // Only allow POST method
  if (req.method !== "POST") {
    console.warn(`[Security] Invalid method attempt: ${req.method}`);
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      { status: 405, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  // Content-Type validation
  const contentType = req.headers.get("content-type");
  if (!contentType || !contentType.includes("application/json")) {
    console.warn(`[Security] Invalid content-type: ${contentType}`);
    return new Response(
      JSON.stringify({ error: "Invalid content type" }),
      { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  // Get client IP for rate limiting
  const clientIP = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || 
                   req.headers.get("cf-connecting-ip") || 
                   "unknown";

  // Rate limiting check
  if (!checkRateLimit(clientIP)) {
    console.warn(`[Security] Rate limit exceeded for IP: ${clientIP}`);
    return new Response(
      JSON.stringify({ error: "Too many requests. Please try again later." }),
      { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json", "Retry-After": "60" } }
    );
  }

  try {
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!resendApiKey) {
      console.error("[Config] RESEND_API_KEY is not configured");
      return new Response(
        JSON.stringify({ error: "Service temporarily unavailable" }),
        { status: 503, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    let body: ContactRequest;
    try {
      body = await req.json();
    } catch {
      console.warn("[Security] Invalid JSON payload");
      return new Response(
        JSON.stringify({ error: "Invalid request format" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { name, email, subject, message, honeypot, timestamp } = body;

    // Honeypot check - if filled, it's a bot
    if (honeypot && honeypot.length > 0) {
      console.warn(`[Security] Honeypot triggered from IP: ${clientIP}`);
      // Return success to not alert the bot
      return new Response(
        JSON.stringify({ success: true }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Timestamp validation - prevent replay attacks (5 minute window)
    if (timestamp) {
      const now = Date.now();
      const timeDiff = Math.abs(now - timestamp);
      if (timeDiff > 300000) { // 5 minutes
        console.warn(`[Security] Stale request detected from IP: ${clientIP}, time diff: ${timeDiff}ms`);
        return new Response(
          JSON.stringify({ error: "Request expired. Please try again." }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
    }

    // Input validation
    if (!name || typeof name !== 'string' || name.trim().length === 0 || name.length > 100) {
      console.warn(`[Validation] Invalid name from IP: ${clientIP}`);
      return new Response(
        JSON.stringify({ error: "Please provide a valid name (1-100 characters)" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (!email || typeof email !== 'string' || !isValidEmail(email.trim())) {
      console.warn(`[Validation] Invalid email from IP: ${clientIP}`);
      return new Response(
        JSON.stringify({ error: "Please provide a valid email address" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (!subject || typeof subject !== 'string' || subject.trim().length === 0 || subject.length > 200) {
      console.warn(`[Validation] Invalid subject from IP: ${clientIP}`);
      return new Response(
        JSON.stringify({ error: "Please provide a valid subject (1-200 characters)" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (!message || typeof message !== 'string' || message.trim().length === 0 || message.length > 5000) {
      console.warn(`[Validation] Invalid message from IP: ${clientIP}`);
      return new Response(
        JSON.stringify({ error: "Please provide a valid message (1-5000 characters)" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Check for suspicious content (XSS attempts)
    if (containsSuspiciousContent(name) || containsSuspiciousContent(subject) || containsSuspiciousContent(message)) {
      console.warn(`[Security] Suspicious content detected from IP: ${clientIP}`);
      return new Response(
        JSON.stringify({ error: "Invalid characters detected in your message" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Sanitize and escape inputs
    const sanitizedName = escapeHtml(name.trim());
    const sanitizedSubject = escapeHtml(subject.trim());
    const sanitizedMessage = escapeHtml(message.trim());
    const sanitizedEmail = email.trim().toLowerCase();

    const resend = new Resend(resendApiKey);
    const emailResponse = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["rozinawalikhan@gmail.com"],
      reply_to: sanitizedEmail,
      subject: `Portfolio Contact: ${sanitizedSubject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #10b981; border-bottom: 2px solid #10b981; padding-bottom: 10px;">New Portfolio Contact</h2>
          <div style="background: #1a1a2e; padding: 20px; border-radius: 8px; color: #e0e0e0;">
            <p><strong style="color: #10b981;">Name:</strong> ${sanitizedName}</p>
            <p><strong style="color: #10b981;">Email:</strong> ${sanitizedEmail}</p>
            <p><strong style="color: #10b981;">Subject:</strong> ${sanitizedSubject}</p>
            <div style="margin-top: 20px;">
              <strong style="color: #10b981;">Message:</strong>
              <p style="background: #0f0f1a; padding: 15px; border-radius: 4px; border-left: 3px solid #10b981;">
                ${sanitizedMessage.replace(/\n/g, '<br>')}
              </p>
            </div>
          </div>
          <p style="color: #888; font-size: 12px; margin-top: 20px;">
            This email was sent from your portfolio contact form.
          </p>
        </div>
      `,
    });

    console.log(`[Success] Email sent successfully from IP: ${clientIP}`);
    return new Response(
      JSON.stringify({ success: true, id: emailResponse.data?.id }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("[Error] Failed to send email:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send message. Please try again later." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
};

serve(handler);
