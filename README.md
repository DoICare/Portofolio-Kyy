# Website Portofolio Resmi — Rizky Maulana Saputra, S.Kom.

Paket kode lengkap website portofolio profesional dengan konsep **Obsidian Slate & Emerald-Indigo Bento UI**. Dirancang khusus untuk **Rizky Maulana Saputra, S.Kom.** (Lulusan S1 Informatika Universitas Gunadarma, IPK 3.68/4.00 & BNSP/LSP Certified Junior Web Programmer).

---

## Mengapa Tidak Menggunakan Database (Static / Serverless Architecture)?
Website portofolio ini **TIDAK memerlukan konfigurasi database (seperti MySQL/PostgreSQL)** karena menggunakan arsitektur **Static Frontend / Serverless** (sama seperti standar portofolio modern di Vercel dan GitHub Pages):
1. **100% Gratis Selamanya di Vercel / GitHub Pages:** Anda tidak perlu menyewa VPS atau membayar hosting database bulanan.
2. **Kecepatan Instan & Anti-Down:** Halaman dimuat sangat cepat tanpa jeda *query database* dan tidak akan pernah mengalami error *Database Connection Timed Out* saat dicek oleh HRD.
3. **Aman dari Serangan SQL Injection:** Seluruh data proyek, 9 foto dokumentasi PKM PPPL, CV ATS (ID & EN), serta 10 file PDF sertifikat asli disimpan secara terstruktur di dalam kode dan folder aset statis.
4. **Fitur Kontak Tetap Berfungsi Penuh:** Formulir kontak sudah terintegrasi langsung dengan **WhatsApp Instan** dan **Email Client (`mailto:`)** tanpa memerlukan penyimpanan database.

---

## Struktur Folder di Dalam Paket Ini
```text
portfolio_rizky_maulana_saputra/
├── index.html                  # Halaman utama website portofolio (Dual-Language ID & EN)
├── vercel.json                 # Konfigurasi siap deploy ke Vercel
├── README.md                   # Panduan penggunaan & deployment
└── assets/
    ├── css/
    │   └── style.css           # Styling Bento Grid, Glassmorphism, & Marquee Animation
    ├── js/
    │   └── main.js             # Logika Switch Bahasa (ID/EN), Galeri Lightbox 9 Foto PKM, Filter Skill & Sertifikat
    ├── img/
    │   ├── profile-formal.jpg  # Foto profil formal Rizky Maulana Saputra (3:4)
    │   ├── lsp-sertifikasi.png # Bukti 8 Unit Kompetensi LSP Junior Web Programmer
    │   └── pkm/                # 9 Foto Dokumentasi PKM Mata Kuliah PPPL di Kelurahan Manggarai Selatan
    ├── cv/
    │   ├── CV_ATS_Rizky_Maulana_Saputra_ID.pdf   # CV ATS Bahasa Indonesia (Siap Download)
    │   ├── CV_ATS_Rizky_Maulana_Saputra_EN.pdf   # CV ATS Bahasa Inggris (Siap Download)
    │   ├── CV_ATS_Rizky_Maulana_Saputra_ID.docx  # File Word Bahasa Indonesia
    │   └── CV_ATS_Rizky_Maulana_Saputra_EN.docx  # File Word Bahasa Inggris
    └── certificates/           # 10 File PDF Sertifikat Resmi Universitas Gunadarma
```

---

## Langkah-Langkah yang Harus Anda Lakukan Sekarang

### Tahap 1: Coba Buka di Laptop Anda (Lokal)
1. **Ekstrak (Unzip)** file `Portofolio_Web_Rizky_Maulana_Saputra.zip` ke sebuah folder di laptop Anda.
2. Klik dua kali file **`index.html`** untuk langsung membukanya di browser (Chrome / Edge), atau buka foldernya menggunakan **Visual Studio Code** dan jalankan ekstensi **Live Server**.
3. Coba seluruh fiturnya: tombol ganti bahasa **`ID / EN`** di pojok kanan atas, tombol **`Download CV ATS`**, klik ke-9 foto dokumentasi PKM Kelurahan Manggarai Selatan untuk melihat fitur *fullscreen lightbox*, serta klik **`Lihat PDF Asli`** pada daftar 10 sertifikat Anda.

### Tahap 2: Upload (Deploy) Gratis ke Vercel Agar Punya Link Online
1. Masuk ke akun GitHub Anda (`https://github.com/DoICare`) lalu buat repository baru (misalnya beri nama **`portfolio-rizky`**).
2. Upload seluruh isi folder hasil ekstrak tadi ke repository GitHub tersebut.
3. Buka **[vercel.com](https://vercel.com)** dan login menggunakan akun GitHub Anda.
4. Klik tombol **"Add New..." -> "Project"**, lalu pilih repository **`portfolio-rizky`** dan klik **"Deploy"**.
5. Dalam waktu sekitar 30 detik, website portofolio Anda akan langsung aktif dan mendapatkan link gratis (misalnya `https://rizkymaulana.vercel.app` atau bisa dihubungkan ke domain `.my.id` milik Anda).
