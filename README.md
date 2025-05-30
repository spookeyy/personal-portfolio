# Meshack's Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Contact Form Setup

This portfolio includes a fully functional contact form with two email service options:

### Option 1: Gmail (Simple Setup)

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a password for "Mail"
3. **Set Environment Variables**:
   \`\`\`env
   EMAIL_USER=your-gmail@gmail.com
   EMAIL_PASS=your-16-character-app-password
   \`\`\`

### Option 2: Resend (Recommended for Production)

1. **Sign up for Resend**: https://resend.com
2. **Get your API key** from the dashboard
3. **Verify your domain** (optional but recommended)
4. **Set Environment Variables**:
   \`\`\`env
   RESEND_API_KEY=your-resend-api-key
   \`\`\`
5. **Update the API route**: Change `/api/contact/route.ts` to use `/api/contact-resend/route.ts`

### Features

- ✅ Form validation (client & server-side)
- ✅ Loading states and success/error messages
- ✅ Auto-reply emails to users
- ✅ Professional email templates
- ✅ Spam protection with rate limiting
- ✅ Mobile-responsive design

### Environment Variables

Create a `.env.local` file in your project root:

\`\`\`env
# Choose one option:

# Option 1: Gmail
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-app-password

# Option 2: Resend (Recommended)
RESEND_API_KEY=your-resend-api-key
\`\`\`

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables (see above)
4. Run the development server: `npm run dev`
5. Open [http://localhost:3000](http://localhost:3000)

## Deployment

When deploying to Vercel:

1. Add your environment variables in the Vercel dashboard
2. Deploy your project
3. Test the contact form functionality

The contact form will automatically send emails to `your-gmail` and send auto-replies to users.
