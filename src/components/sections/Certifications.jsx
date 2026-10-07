'use client'

import { useState } from 'react'
import Image from 'next/image'
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
              <CertificationCard key={cert.title || i} cert={cert} colorClass={colorClass} t={t} />
            )
          })}
        </div>
      </div>
    </section>
  )
}

function CertificationCard({ cert, colorClass, t }) {
  const [imageError, setImageError] = useState(false)

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 overflow-hidden hover:border-blue-200 dark:hover:border-blue-700 hover:shadow-md transition-all group">
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-blue-100 via-indigo-50 to-cyan-100 dark:from-blue-950 dark:via-gray-900 dark:to-cyan-950">
        {cert.image && !imageError ? (
          <Image
            src={cert.image}
            alt={`Sertifikat ${cert.title}`}
            width={800}
            height={500}
            unoptimized
            loading="lazy"
            className="h-full w-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center p-5" aria-hidden="true">
            <div className="relative flex h-full w-full max-w-xs flex-col items-center justify-center rounded-lg border border-amber-300/80 bg-white/90 px-4 text-center shadow-lg dark:border-amber-500/50 dark:bg-gray-800/90">
              <div className="absolute inset-1.5 rounded-md border border-amber-200 dark:border-amber-600/40" />
              <svg className="relative mb-2 h-8 w-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15l-2 5-1.5-2L6 19l1.5-5M12 15l2 5 1.5-2L18 19l-1.5-5M12 3l2.2 1.1 2.4-.2 1.1 2.2 2.1 1.2-.3 2.4 1.1 2.1-1.6 1.8-.2 2.4-2.3.7-1.6 1.8-2.2-1-2.2 1-1.6-1.8-2.3-.7-.2-2.4-1.6-1.8 1.1-2.1-.3-2.4 2.1-1.2 1.1-2.2 2.4.2L12 3z" />
              </svg>
              <span className="relative text-[10px] font-bold uppercase tracking-[0.2em] text-amber-700 dark:text-amber-300">{cert.issuer}</span>
              <span className="relative mt-1 line-clamp-3 text-sm font-semibold text-gray-800 dark:text-gray-100">{cert.title}</span>
              <span className="relative mt-2 text-[10px] uppercase tracking-widest text-gray-500 dark:text-gray-400">Certificate</span>
            </div>
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
    </div>
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
