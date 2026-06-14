# Akhmad Alwan Rabbani – Portfolio Website

Portfolio pribadi yang dibangun menggunakan **Next.js 14** dan **Tailwind CSS**.

## 🚀 Cara Menjalankan

```bash
# Install dependencies
npm install

# Jalankan development server
npm run dev

# Build untuk production
npm run build

# Jalankan production server
npm start
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## 📁 Struktur Project

```
src/
├── app/
│   ├── layout.jsx       # Root layout + metadata
│   ├── page.jsx         # Halaman utama
│   └── globals.css      # Global styles
├── components/
│   ├── Navbar.jsx        # Navigasi + language switcher
│   ├── Footer.jsx        # Footer
│   └── sections/
│       ├── Hero.jsx          # Section hero
│       ├── About.jsx         # Tentang saya
│       ├── Skills.jsx        # Keahlian
│       ├── Experience.jsx    # Pengalaman kerja
│       ├── Projects.jsx      # Proyek dengan filter
│       ├── Certifications.jsx # Sertifikasi
│       └── Contact.jsx       # Kontak
├── data/
│   └── portfolio.json   # ← SEMUA DATA DI SINI
└── lib/
    └── i18n.js          # Language context + translations
```

## ✏️ Cara Update Konten

Semua data bisa diubah langsung dari file **`src/data/portfolio.json`**:

### Update Info Pribadi
```json
"personal": {
  "name": "Nama Kamu",
  "photo": "/images/photo.jpg",  ← Ganti foto di public/images/
  "email": "email@kamu.com",
  ...
}
```

### Tambah Proyek Baru
```json
{
  "id": "nama-proyek",
  "title": "Nama Proyek",
  "category": "web",  // atau "mobile"
  "description": {
    "id": "Deskripsi dalam bahasa Indonesia",
    "en": "Description in English"
  },
  "tech": ["React.js", "Node.js"],
  "github": "https://github.com/...",
  "demo": "https://...",
  "featured": true
}
```

### Tambah Pengalaman Kerja
Tambahkan object baru di array `experience` dengan format yang sama.

## 🖼️ Menambah Foto

1. Letakkan foto di folder `public/images/`
2. Nama file: `photo.jpg` (atau sesuaikan di JSON)
3. Ukuran disarankan: **400x400px** (square)

## 🌐 Bahasa

Website mendukung Bahasa Indonesia dan English:
- Default: Mengikuti bahasa browser pengguna
- User dapat switch manual via toggle ID/EN di navbar
- Preferensi disimpan di localStorage

## 🚀 Deploy ke Vercel

```bash
npm install -g vercel
vercel
```

Atau push ke GitHub dan connect ke [vercel.com](https://vercel.com).
