# WeaveAI - Applied AI Systems

A production-ready website for WeaveAI, built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Forms:** React Hook Form + Zod
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Project Structure

```
weaveai.dev/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Main homepage
│   └── globals.css         # Global styles and CSS variables
├── components/
│   ├── ui/                 # shadcn/ui base components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   └── textarea.tsx
│   ├── sections/           # Page sections
│   │   ├── hero.tsx
│   │   ├── problems.tsx
│   │   ├── approach.tsx
│   │   ├── offerings.tsx
│   │   ├── how-it-works.tsx
│   │   ├── pricing.tsx
│   │   └── contact.tsx
│   ├── navigation.tsx      # Main navigation
│   └── footer.tsx          # Footer component
├── lib/
│   └── utils.ts            # Utility functions (cn helper)
└── public/                 # Static assets
```

## Local Development

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd weaveai.dev
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Environment Variables

This project currently doesn't require environment variables for basic operation. However, if you plan to integrate with external services (email, analytics, etc.), create a `.env.local` file:

```bash
# Example environment variables
NEXT_PUBLIC_SITE_URL=https://weaveai.dev

# Add your environment variables here
# RESEND_API_KEY=your_api_key_here
# NEXT_PUBLIC_GA_TRACKING_ID=your_tracking_id
```

## Deployment to Vercel

### Quick Deploy

The easiest way to deploy is using Vercel:

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)

2. Import your repository to Vercel:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your Git repository
   - Vercel will auto-detect Next.js settings

3. Configure your project:
   - **Framework Preset:** Next.js
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next`
   - **Install Command:** `npm install`

4. Add environment variables (if needed) in Vercel dashboard

5. Click "Deploy"

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

### Custom Domain

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add `weaveai.dev` as a custom domain
4. Update your DNS records as instructed by Vercel

## SEO Configuration

SEO metadata is configured in `app/layout.tsx`. Update the following:

- Title and description
- OpenGraph tags
- Twitter card
- Keywords
- Metadata base URL

## Customization

### Colors

Update the color scheme in `app/globals.css`:

```css
:root {
  --primary: /* your color */;
  --secondary: /* your color */;
  /* ... */
}
```

### Typography

The project uses Inter font by default. To change:

1. Update the import in `app/layout.tsx`
2. Modify the font variable

### Content

All content is located in the component files under `components/sections/`. Update the data arrays and text directly in these files.

## Performance Optimizations

- Images: Use Next.js `<Image>` component for automatic optimization
- Fonts: Self-hosted via `next/font/google`
- Animations: Framer Motion with viewport detection to prevent unnecessary renders
- Code splitting: Automatic via Next.js App Router
- CSS: Tailwind CSS with automatic purging

## Accessibility

- Semantic HTML throughout
- ARIA labels where appropriate
- Keyboard navigation support
- Focus states on interactive elements
- Form validation with clear error messages

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is proprietary and confidential.

## Support

For questions or issues, contact the development team.

---

Built with engineering credibility. No hype. Just systems.
