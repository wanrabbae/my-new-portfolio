import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/lib/i18n'
import { ThemeProvider } from '@/lib/theme'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Akhmad Alwan Rabbani – Full Stack Developer',
  description: 'Portfolio of Akhmad Alwan Rabbani, a Full Stack Developer with 4+ years of experience building web and mobile applications.',
  keywords: ['Full Stack Developer', 'React', 'Node.js', 'Flutter', 'Laravel', 'Indonesia'],
  authors: [{ name: 'Akhmad Alwan Rabbani' }],
  openGraph: {
    title: 'Akhmad Alwan Rabbani – Full Stack Developer',
    description: 'Building scalable web & mobile applications with 4+ years of experience.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="scroll-smooth">
      {/* Inline script prevents white flash before React hydrates */}
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('theme');
                  var t = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                  if (t === 'dark') document.documentElement.classList.add('dark');
                  else document.documentElement.classList.remove('dark');
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
