'use client'

import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('id')

  useEffect(() => {
    const browserLang = navigator.language || navigator.userLanguage || 'id'
    const detected = browserLang.startsWith('en') ? 'en' : 'id'
    const stored = localStorage.getItem('portfolio-lang')
    setLang(stored || detected)
  }, [])

  const toggleLang = (newLang) => {
    setLang(newLang)
    localStorage.setItem('portfolio-lang', newLang)
  }

  const t = (obj) => {
    if (typeof obj === 'string') return obj
    if (typeof obj === 'object' && obj !== null) return obj[lang] || obj['en'] || ''
    return ''
  }

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  return useContext(LanguageContext)
}

export const translations = {
  id: {
    nav: {
      about: 'Tentang',
      skills: 'Keahlian',
      experience: 'Pengalaman',
      projects: 'Proyek',
      certifications: 'Sertifikasi',
      contact: 'Kontak',
    },
    hero: {
      greeting: 'Halo, saya',
      cta: 'Lihat Proyek Saya',
      contact: 'Hubungi Saya',
      whatsapp: 'Chat WhatsApp',
      available: 'Tersedia untuk proyek baru',
      downloadCv: 'Unduh CV',
    },
    about: {
      title: 'Tentang Saya',
    },
    skills: {
      title: 'Keahlian',
      frontend: 'Frontend',
      backend: 'Backend',
      database: 'Database',
      cloud: 'Cloud & Tools',
    },
    experience: {
      title: 'Pengalaman',
      present: 'Sekarang',
    },
    education: {
      title: 'Pendidikan',
    },
    projects: {
      title: 'Proyek',
      all: 'Semua',
      web: 'Web',
      mobile: 'Mobile',
      viewCode: 'Kode',
      viewDemo: 'Demo',
      viewPlaystore: 'Play Store',
    },
    certifications: {
      title: 'Sertifikasi',
    },
    contact: {
      title: 'Kontak',
      subtitle: 'Tertarik bekerja sama? Mari berdiskusi!',
      email: 'Kirim Email',
      location: 'Lokasi',
      phone: 'Telepon',
    },
    footer: {
      rights: 'Semua hak cipta dilindungi.',
      madeWith: 'Dibuat dengan',
    },
  },
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      certifications: 'Certifications',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi, I'm",
      cta: 'View My Projects',
      contact: 'Get In Touch',
      whatsapp: 'Chat on WhatsApp',
      available: 'Available for new projects',
      downloadCv: 'Download CV',
    },
    about: {
      title: 'About Me',
    },
    skills: {
      title: 'Skills',
      frontend: 'Frontend',
      backend: 'Backend',
      database: 'Database',
      cloud: 'Cloud & Tools',
    },
    experience: {
      title: 'Experience',
      present: 'Present',
    },
    education: {
      title: 'Education',
    },
    projects: {
      title: 'Projects',
      all: 'All',
      web: 'Web',
      mobile: 'Mobile',
      viewCode: 'Code',
      viewDemo: 'Demo',
      viewPlaystore: 'Play Store',
    },
    certifications: {
      title: 'Certifications',
    },
    contact: {
      title: 'Contact',
      subtitle: 'Interested in working together? Let\'s talk!',
      email: 'Send Email',
      location: 'Location',
      phone: 'Phone',
    },
    footer: {
      rights: 'All rights reserved.',
      madeWith: 'Made with',
    },
  },
}
