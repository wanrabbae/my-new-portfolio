'use client'

import { useLang, translations } from '@/lib/i18n'
import data from '@/data/portfolio.json'

const techColors = {
  'React.js': 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-700',
  'Next.js': 'bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-gray-200 border-gray-200 dark:border-gray-600',
  'Vue.js': 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 border-emerald-200 dark:border-emerald-700',
  'Flutter': 'bg-cyan-50 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300 border-cyan-200 dark:border-cyan-700',
  'Node.js': 'bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300 border-green-200 dark:border-green-700',
  'Laravel': 'bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-300 border-red-200 dark:border-red-700',
  'PHP': 'bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 border-purple-200 dark:border-purple-700',
  'MySQL': 'bg-orange-50 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300 border-orange-200 dark:border-orange-700',
  'Python': 'bg-yellow-50 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300 border-yellow-200 dark:border-yellow-700',
  'default': 'bg-slate-50 text-slate-700 dark:bg-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-600',
}

function getColor(skill) {
  return techColors[skill] || techColors['default']
}

export default function Skills() {
  const { lang } = useLang()
  const tr = translations[lang].skills

  const groups = [
    { label: tr.frontend, skills: data.skills.frontend },
    { label: tr.backend, skills: data.skills.backend },
    { label: tr.database, skills: data.skills.database },
    { label: tr.cloud, skills: data.skills.cloud },
  ]

  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>{tr.title}</SectionTitle>

        <div className="grid sm:grid-cols-2 gap-6 mt-12">
          {groups.map((group) => (
            <div
              key={group.label}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-800 transition-colors"
            >
              <h3 className="text-sm font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`text-xs font-medium px-2.5 py-1 rounded-lg border ${getColor(skill)}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
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
