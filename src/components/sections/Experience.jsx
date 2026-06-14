'use client'

import { useLang, translations } from '@/lib/i18n'
import data from '@/data/portfolio.json'

export default function Experience() {
  const { lang, t } = useLang()
  const tr = translations[lang]

  return (
    <section id="experience" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>{tr.experience.title}</SectionTitle>

        <div className="mt-12 relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700 md:-translate-x-px" />

          {data.experience.map((exp, i) => (
            <div
              key={i}
              className={`relative flex flex-col md:flex-row gap-6 mb-10 ${
                i % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full border-2 border-blue-500 bg-white dark:bg-gray-900 md:-translate-x-1.5 mt-5 z-10">
                {exp.current && (
                  <span className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-75" />
                )}
              </div>

              <div className={`flex-1 ml-12 md:ml-0 ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-700 hover:shadow-md transition-all">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white text-base">
                        {t(exp.role)}
                      </h3>
                      <div className="text-blue-600 dark:text-blue-400 font-medium text-sm">{exp.company}</div>
                      <div className="text-gray-400 dark:text-gray-500 text-xs mt-0.5">{exp.location}</div>
                    </div>
                    <span className={`text-xs px-2.5 py-1 rounded-full font-medium whitespace-nowrap ${
                      exp.current
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                        : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300'
                    }`}>
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-1.5">
                    {t(exp.description).map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-gray-600 dark:text-gray-300 text-sm">
                        <span className="mt-2 w-1 h-1 flex-shrink-0 rounded-full bg-blue-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="hidden md:block flex-1" />
            </div>
          ))}
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
