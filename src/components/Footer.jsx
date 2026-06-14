'use client'

import { useLang, translations } from '@/lib/i18n'
import data from '@/data/portfolio.json'

export default function Footer() {
  const { lang } = useLang()
  const tr = translations[lang].footer

  return (
    <footer className="py-8 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-400 dark:text-gray-500">
          © {new Date().getFullYear()} {data.personal.name}. {tr.rights}
        </div>
        <div className="text-sm text-gray-400 dark:text-gray-500 flex items-center gap-1.5">
          {tr.madeWith}
          <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
          </svg>
          Next.js & Tailwind CSS
        </div>
      </div>
    </footer>
  )
}
