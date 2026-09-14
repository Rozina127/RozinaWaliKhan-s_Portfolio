# 🛡️ Rozina Wali Khan - Cybersecurity Portfolio

A modern, secure, and visually stunning portfolio website built with React, TypeScript, and Tailwind CSS. Features a cybersecurity-themed design with animated elements and a fully functional contact form.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![React](https://img.shields.io/badge/React-18.3-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue) ![Tailwind](https://img.shields.io/badge/Tailwind-3.4-cyan)

## 🚀 Features

### Core Sections
- **Hero Section** - Animated introduction with typing effect and social links
- **About** - Professional summary and expertise areas
- **Education** - Academic background (FAST NUCES, Islamabad)
- **Projects** - Showcase of 15+ projects including FYP (Scam Shield)
- **Skills** - Technical skills with progress indicators
- **Experience** - Work history and volunteer activities
- **Certifications** - 16+ professional certifications
- **Contact Form** - Secure email functionality via Resend API

### Design Features
- 🎨 Cybersecurity-themed dark UI with neon accents
- ✨ Smooth animations using Framer Motion
- 📱 Fully responsive design (mobile-first)
- 🌙 Dark mode optimized

## 🔒 Security Features

This portfolio implements enterprise-grade security measures:

### Frontend Security
| Feature | Description |
|---------|-------------|
| XSS Protection | Pattern detection for script injection attempts |
| Honeypot Field | Hidden bot trap to catch automated submissions |
| Client-side Rate Limiting | Max 3 submissions per minute |
| Double-Submit Prevention | 2-second cooldown between submissions |
| Input Validation | Zod schema validation with strict rules |

### Backend Security (Edge Function)
| Feature | Description |
|---------|-------------|
| Server-side Rate Limiting | 5 requests/minute per IP |
| Replay Attack Prevention | 5-minute timestamp window validation |
| HTML Entity Escaping | Complete XSS sanitization |
| Content-Type Validation | Strict JSON-only acceptance |
| Method Restriction | POST-only endpoint |
| Security Logging | Detailed logging for threat detection |

## 🛠️ Tech Stack

```
Frontend:
├── React 18.3
├── TypeScript
├── Tailwind CSS
├── Framer Motion
├── Shadcn/UI Components
├── Zod (Validation)
└── Lucide Icons

Backend:
├── Supabase Edge Functions (Deno)
├── Resend API (Email)
└── Lovable Cloud
```

## 📁 Project Structure

```
src/
├── components/
│   ├── portfolio/
│   │   ├── Hero.tsx          # Landing section
│   │   ├── About.tsx         # About section
│   │   ├── Education.tsx     # Education details
│   │   ├── Projects.tsx      # Project showcase
│   │   ├── Skills.tsx        # Technical skills
│   │   ├── Experience.tsx    # Work experience
│   │   ├── Certifications.tsx # Certifications
│   │   ├── Contact.tsx       # Contact form
│   │   ├── Navbar.tsx        # Navigation
│   │   └── Footer.tsx        # Footer
│   └── ui/                   # Shadcn components
├── pages/
│   └── Index.tsx             # Main page
├── hooks/                    # Custom React hooks
├── lib/                      # Utility functions
└── integrations/
    └── supabase/             # Supabase client

supabase/
└── functions/
    └── send-contact-email/
        └── index.ts          # Email edge function
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/Rozina127/Rozina-s_portfolio.git

# Navigate to project
cd Rozina-s_portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Environment Variables

Create a `.env` file with:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_anon_key
VITE_SUPABASE_PROJECT_ID=your_project_id
```

### Edge Function Secrets

Configure in Lovable Cloud:
- `RESEND_API_KEY` - Your Resend API key for email functionality

## 📧 Contact Form Flow

```
User Submission
      │
      ▼
┌─────────────────┐
│  Contact.tsx    │ ── Client-side validation
│  (Frontend)     │ ── Rate limiting check
│                 │ ── Honeypot verification
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Edge Function  │ ── Server validation
│  (Backend)      │ ── XSS sanitization
│                 │ ── Rate limiting
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   Resend API    │ ── Email delivery
└────────┬────────┘
         │
         ▼
   rozinawalikhan@gmail.com
```

## 👩‍💻 About the Developer

**Rozina Wali Khan**
- 🎓 BS Cybersecurity @ FAST NUCES, Islamabad (2022-26)
- 🔐 Focus: Threat Detection, Ethical Hacking, Digital Forensics
- 🏆 FYP: Scam Shield - Real-Time Phishing Detection (99.97% accuracy)

### Connect
- 📧 Email: rozinawalikhan@gmail.com
- 📱 Phone: +92 323 5080980
- 💼 [LinkedIn](https://www.linkedin.com/in/rozina-wali-613737261/)
- 🐙 [GitHub](https://github.com/Rozina127)
- 💻 [Fiverr](https://www.fiverr.com/rozina_wali/)
- 🔧 [Upwork](https://www.upwork.com/freelancers/~01b25a9c4d54118238)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Built with ❤️ using <a href="https://lovable.dev">Lovable</a>
</p>
