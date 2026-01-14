# Portfolio Website

A modern, responsive portfolio website built with TanStack Start, React, and Tailwind CSS. Features a clean design system, SEO optimization, and a contact form with server-side email handling.

## Tech Stack

- **Framework:** TanStack Start (React with SSR)
- **UI Library:** React 19
- **Styling:** Tailwind CSS 4
- **Components:** shadcn/ui (New York style)
- **Icons:** Lucide React
- **Build Tool:** Vite
- **Language:** TypeScript
- **Linting/Formatting:** Biome

## Project Structure

```
src/
├── components/
│   ├── portfolio/          # Portfolio-specific components
│   │   ├── Header.tsx      # Navigation header
│   │   ├── HeroSection.tsx # Hero/intro section
│   │   ├── AboutSection.tsx # About me section
│   │   ├── SkillsSection.tsx # Skills display
│   │   ├── ExperienceSection.tsx # Work experience
│   │   ├── ProjectsSection.tsx # Projects showcase
│   │   ├── EducationSection.tsx # Education history
│   │   ├── ContactSection.tsx # Contact form
│   │   └── index.ts        # Component exports
│   └── ui/                 # shadcn/ui components
│       ├── button.tsx
│       ├── input.tsx
│       ├── textarea.tsx
│       └── ...
├── data/
│   └── portfolioData.ts    # ⭐ ALL PORTFOLIO DATA (update here)
├── routes/
│   ├── __root.tsx          # Root layout, SEO, structured data
│   └── index.tsx           # Main portfolio page
├── server/
│   └── contact.ts          # Contact form API handler
└── styles.css              # Global styles, Tailwind imports
```

## Where to Update Data

**All portfolio content is centralized in:** `src/data/portfolioData.ts`

Update the following exports:
- `personalInfo` - Name, title, bio, contact details, resume URL
- `socialLinks` - Social media profiles
- `skills` - Skills organized by category
- `experience` - Work experience entries
- `projects` - Project portfolio items
- `education` - Educational background
- `achievements` - Notable achievements
- `languages` - Languages spoken
- `interests` - Personal interests
- `navLinks` - Navigation menu items

## Design System

### Color Palette
- **Primary:** Red theme (`red-700`, `red-800`) with subtle gradients
- **Background:** Gray-50 base with red-50/15 accents
- **Text:** Gray-900 for headings, Gray-600 for body text
- **Borders:** Red-100/30 for subtle section dividers

### Typography
- **Headings:** Playfair Display (serif) - bold, elegant
- **Body:** Inter (sans-serif) - clean, readable
- **Font Loading:** Asynchronously via script in `__root.tsx` for performance

### Components
- **shadcn/ui Style:** New York variant
- **Base Color:** Zinc
- **CSS Variables:** Enabled for theming
- **Component Location:** `src/components/ui/`

### Styling Patterns
- Rounded corners: `rounded-[2rem]` for cards
- Gradient backgrounds: `bg-gradient-to-br from-white via-red-50/15 to-white`
- Hover effects: Smooth transitions with `hover:shadow-xl` and `hover:-translate-y-1`
- Responsive spacing: `p-4 sm:p-6 md:p-12`

## Key Features

### SEO Optimization
- Comprehensive meta tags (Open Graph, Twitter Cards)
- Structured data (JSON-LD) for Person, ProfessionalService, WebSite, and Projects
- Canonical URLs and robots directives
- Preconnect/DNS prefetch for external resources

### Contact Form
- Server-side email handling via `src/server/contact.ts`
- Uses Nodemailer for email delivery
- Form validation with TanStack Form
- Located in `ContactSection.tsx`

### Responsive Design
- Mobile-first approach
- Breakpoints: `sm:`, `md:`, `lg:`
- Horizontal scrolling project cards on mobile
- Adaptive spacing and typography

## Development

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```
Server runs on `http://localhost:3000`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Code Quality
```bash
npm run format    # Format code
npm run lint      # Lint code
npm run check     # Format + lint
```

## Adding New shadcn/ui Components

Use the latest shadcn CLI:
```bash
pnpm dlx shadcn@latest add [component-name]
```

Example:
```bash
pnpm dlx shadcn@latest add button
```

## Environment Variables

For contact form functionality, configure email settings in your deployment environment (e.g., Vercel, Netlify).

## Deployment

The project is configured for deployment on platforms like Vercel. Ensure:
- Environment variables are set for email functionality
- Build command: `npm run build`
- Output directory: `dist/`

## Customization

1. **Update Content:** Edit `src/data/portfolioData.ts`
2. **Modify SEO:** Update meta tags in `src/routes/__root.tsx`
3. **Change Colors:** Update Tailwind classes or CSS variables in `src/styles.css`
4. **Add Sections:** Create new components in `src/components/portfolio/` and import in `src/routes/index.tsx`
5. **Update Fonts:** Modify Google Fonts link in `__root.tsx` and font-family in `styles.css`
