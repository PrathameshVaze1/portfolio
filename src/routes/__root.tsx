import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import AiDevtools from '../lib/ai-devtools'
import { personalInfo, socialLinks, projects } from '../data/portfolioData'

import appCss from '../styles.css?url'

// Get the base URL - update this with your actual domain
// Use a constant for SSR compatibility
const DEFAULT_BASE_URL = 'https://prathamesh-vaze.vercel.app'

function getBaseUrl(): string {
  if (typeof window !== 'undefined') {
    return window.location.origin
  }
  return DEFAULT_BASE_URL
}

const baseUrl = getBaseUrl()
const siteUrl = baseUrl
const siteName = 'Prathamesh Vaze - Laravel Developer'
const siteDescription = 'Professional Laravel Backend Developer specializing in API development, server migration, and full-stack applications. 3+ years of experience building scalable web solutions. Available for freelance Laravel projects.'
const siteKeywords = 'Laravel Developer, Freelance Laravel Developer, PHP Developer, Laravel Backend Developer, API Development, Server Migration, Website Migration, Laravel Expert, Backend Developer India, Laravel Consultant, Prathamesh Vaze'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: `${personalInfo.name} - ${personalInfo.title} | Freelance Laravel Developer`,
      },
      {
        name: 'description',
        content: siteDescription,
      },
      {
        name: 'keywords',
        content: siteKeywords,
      },
      {
        name: 'author',
        content: personalInfo.name,
      },
      {
        name: 'robots',
        content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
      },
      {
        name: 'googlebot',
        content: 'index, follow',
      },
      {
        name: 'language',
        content: 'English',
      },
      {
        name: 'revisit-after',
        content: '7 days',
      },
      {
        name: 'theme-color',
        content: '#ffffff',
      },
      // Open Graph / Facebook
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: siteUrl,
      },
      {
        property: 'og:title',
        content: `${personalInfo.name} - ${personalInfo.title} | Freelance Laravel Developer`,
      },
      {
        property: 'og:description',
        content: siteDescription,
      },
      {
        property: 'og:image',
        content: 'https://pub-b90e26930c594e45a2ab4ae2d9976c3b.r2.dev/img/prathamesh.jpg',
      },
      {
        property: 'og:image:width',
        content: '1200',
      },
      {
        property: 'og:image:height',
        content: '630',
      },
      {
        property: 'og:image:alt',
        content: `${personalInfo.name} - Laravel Backend Developer`,
      },
      {
        property: 'og:site_name',
        content: siteName,
      },
      {
        property: 'og:locale',
        content: 'en_US',
      },
      // Twitter Card
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:url',
        content: siteUrl,
      },
      {
        name: 'twitter:title',
        content: `${personalInfo.name} - ${personalInfo.title} | Freelance Laravel Developer`,
      },
      {
        name: 'twitter:description',
        content: siteDescription,
      },
      {
        name: 'twitter:image',
        content: 'https://pub-b90e26930c594e45a2ab4ae2d9976c3b.r2.dev/img/prathamesh.jpg',
      },
      {
        name: 'twitter:image:alt',
        content: `${personalInfo.name} - Laravel Backend Developer`,
      },
      {
        name: 'twitter:creator',
        content: '@PrathameshVaze',
      },
      // Additional SEO
      {
        name: 'application-name',
        content: siteName,
      },
      {
        name: 'apple-mobile-web-app-title',
        content: personalInfo.name,
      },
      {
        name: 'apple-mobile-web-app-capable',
        content: 'yes',
      },
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'default',
      },
    ],
    links: [
      // Preconnect to Google Fonts for faster font loading
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      // Preconnect to R2 CDN for image loading
      {
        rel: 'preconnect',
        href: 'https://pub-b90e26930c594e45a2ab4ae2d9976c3b.r2.dev',
        crossOrigin: 'anonymous',
      },
      // DNS prefetch for external resources
      {
        rel: 'dns-prefetch',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'dns-prefetch',
        href: 'https://fonts.gstatic.com',
      },
      {
        rel: 'dns-prefetch',
        href: 'https://pub-b90e26930c594e45a2ab4ae2d9976c3b.r2.dev',
      },
      // Load main CSS (needs to be synchronous for proper rendering)
      {
        rel: 'stylesheet',
        href: appCss,
      },
      {
        rel: 'canonical',
        href: siteUrl,
      },
      {
        rel: 'icon',
        href: '/favicon.png',
      },
      {
        rel: 'apple-touch-icon',
        href: '/logo192.png',
      },
      {
        rel: 'manifest',
        href: '/manifest.json',
      },
    ],
  }),

  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  // Structured Data (JSON-LD)
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: personalInfo.name,
    jobTitle: personalInfo.title,
    description: siteDescription,
    email: personalInfo.email,
    telephone: personalInfo.phone,
    address: {
      '@type': 'PostalAddress',
      addressCountry: personalInfo.location,
    },
    image: 'https://pub-b90e26930c594e45a2ab4ae2d9976c3b.r2.dev/img/prathamesh.jpg',
    url: baseUrl,
    sameAs: socialLinks.map(link => link.url),
    knowsAbout: ['Laravel', 'PHP', 'API Development', 'Backend Development', 'Server Migration', 'Website Migration', 'MySQL', 'ReactJS'],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'S. R. M. College Kudal',
    },
  }

  const professionalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: `${personalInfo.name} - Laravel Development Services`,
    description: 'Professional Laravel backend development, API development, server migration, and website migration services. Expert in building scalable web applications.',
    provider: {
      '@type': 'Person',
      name: personalInfo.name,
      email: personalInfo.email,
      telephone: personalInfo.phone,
    },
    areaServed: 'Worldwide',
    serviceType: [
      'Laravel Development',
      'API Development',
      'Backend Development',
      'Server Migration',
      'Website Migration',
      'Code Refactoring',
      'Performance Optimization',
    ],
    url: baseUrl,
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    description: siteDescription,
    url: baseUrl,
    author: {
      '@type': 'Person',
      name: personalInfo.name,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }

  // Projects structured data
  const projectsSchema = projects
    .filter(project => project.title && project.description)
    .map(project => {
      const schema: Record<string, unknown> = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: project.title,
        description: project.description,
        applicationCategory: 'WebApplication',
        operatingSystem: 'Web',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
        creator: {
          '@type': 'Person',
          name: personalInfo.name,
        },
        url: project.liveUrl || `${baseUrl}/#projects`,
        programmingLanguage: project.techStack,
      }
      
      // Only add codeRepository if it's a valid URL
      if (project.githubUrl && project.githubUrl !== '#') {
        schema.codeRepository = project.githubUrl
      }
      
      return schema
    })

  return (
    <html lang="en">
      <head>
        <HeadContent />
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {/* Projects Structured Data */}
        {projectsSchema.map((projectSchema, index) => {
          try {
            return (
              <script
                key={index}
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
              />
            )
          } catch (error) {
            console.error('Error generating project schema:', error)
            return null
          }
        })}
      </head>
      <body>
        {/* Load Google Fonts asynchronously to avoid blocking render */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap';
                link.media = 'print';
                link.onload = function() { this.media = 'all'; };
                document.head.appendChild(link);
              })();
            `,
          }}
        />
        {/* <Header /> */}
        {children}
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
            AiDevtools,
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
