'use client'

import { useLang, translations } from '@/lib/i18n'
import data from '@/data/portfolio.json'

export default function About() {
  const { lang, t } = useLang()
  const tr = translations[lang]

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>{tr.about.title}</SectionTitle>

        <div className="grid md:grid-cols-2 gap-12 items-start mt-12">
          <div>
            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
              {t(data.personal.about)}
            </p>

            <div className="mt-8 space-y-3">
              <InfoRow icon={
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              } label={data.personal.location} />
              <InfoRow icon={
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              } label={data.personal.email} href={`mailto:${data.personal.email}`} />
              <InfoRow icon={
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              } label={data.personal.phone} href={`tel:${data.personal.phone}`} />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">
              {tr.education.title}
            </h3>
            <div className="space-y-4">
              {data.education.map((edu, i) => (
                <div
                  key={i}
                  className="relative pl-4 border-l-2 border-blue-200 dark:border-blue-800"
                >
                  {edu.current && (
                    <div className="absolute -left-1.5 top-1.5 w-2.5 h-2.5 rounded-full bg-blue-500" />
                  )}
                  <div className="font-semibold text-gray-800 dark:text-gray-100 text-sm">{edu.institution}</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">{t(edu.degree)}</div>
                  <div className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{edu.period}</div>
                </div>
              ))}
            </div>
          </div>
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

function InfoRow({ icon, label, href }) {
  const content = (
    <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300 text-sm">
      <div className="text-blue-500 flex-shrink-0">{icon}</div>
      <span>{label}</span>
    </div>
  )
  if (href) {
    return (
      <a href={href} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors block">
        {content}
      </a>
    )
  }
  return content
}
