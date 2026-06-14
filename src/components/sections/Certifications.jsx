'use client'

import { useLang, translations } from '@/lib/i18n'
import data from '@/data/portfolio.json'

const issuerColors = {
  'freeCodeCamp': 'bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-300',
  'HackerRank': 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-300',
  'Progate': 'bg-pink-50 text-pink-700 dark:bg-pink-900/20 dark:text-pink-300',
  'Dicoding': 'bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300',
  'default': 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300',
}

export default function Certifications() {
  const { lang, t } = useLang()
  const tr = translations[lang].certifications

  return (
    <section id="certifications" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>{tr.title}</SectionTitle>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {data.certifications.map((cert, i) => {
            const colorClass = issuerColors[cert.issuer] || issuerColors['default']
            return (
              <div
                key={i}
                className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-700 hover:shadow-md transition-all group"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${colorClass}`}>
                    {cert.issuer}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {cert.title}
                </h3>
                {cert.description && (
                  <p className="text-gray-500 dark:text-gray-400 text-xs mb-2">{t(cert.description)}</p>
                )}
                <div className="text-xs text-gray-400 dark:text-gray-500">{cert.date}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function SectionTitle({ children }) {
  return (
    <div className="text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">{children}</h2>
      <div className="mt-3 mx-auto w-12 h-1 bg-blue-600 rounded-full" />
    </div>
  )
}
