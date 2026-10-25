/* ==========================================================================
   Portofolio Interaktif Rizky Maulana Saputra, S.Kom.
   Fitur: Dual-Language (ID/EN), Filter Tech Stack, Galeri 9 Foto PKM PPPL,
          Modal 8 Unit Kompetensi LSP, Filter 10 Sertifikat PDF, Smart Contact
   ========================================================================== */

// 1. Data Dokumentasi 9 Foto PKM PPPL Kelurahan Manggarai Selatan
const pkmPhotos = [
    {
        src: "assets/img/pkm/pkm-01-presentasi-kelurahan.jpg",
        date: "24 Okt 2025 • Kelurahan Manggarai Selatan",
        title_id: "Memimpin Presentasi & Paparan Sistem di Kantor Kelurahan",
        title_en: "Leading System Presentation at Manggarai Selatan Sub-District Office",
        desc_id: "Sebagai Project Manager, memaparkan langsung alur Sistem Informasi Pelayanan Publik & Pengumuman di hadapan jajaran pejabat dan staf Kelurahan Manggarai Selatan, Tebet, Jakarta Selatan.",
        desc_en: "As Project Manager, presenting the Public Service & Announcement Information System workflow directly to Manggarai Selatan Sub-District officials in Tebet, South Jakarta."
    },
    {
        src: "assets/img/pkm/pkm-02-pembukaan-diskusi-pm.jpg",
        date: "24 Okt 2025 • Ruang Rapat Kelurahan",
        title_id: "Pembukaan Diskusi & Analisis Kebutuhan (System Analysis)",
        title_en: "Opening Stakeholder Consultation & System Analysis Session",
        desc_id: "Menginisiasi sesi diskusi kebutuhan operasional bersama pihak kelurahan dan memimpin tim pengembang Universitas Gunadarma.",
        desc_en: "Initiating operational requirement discussions with sub-district officials while leading the Universitas Gunadarma development team."
    },
    {
        src: "assets/img/pkm/pkm-03-konsultasi-dokumen-analisis.jpg",
        date: "24 Okt 2025 • Manggarai Selatan, Tebet",
        title_id: "Verifikasi Dokumen Spesifikasi & Tanda Tangan Mitra",
        title_en: "System Specification Review & Stakeholder Sign-Off",
        desc_id: "Berdiskusi langsung secara tatap muka dengan pejabat kelurahan untuk meninjau dokumen rancangan sistem dan berita acara pelaksanaan PKM.",
        desc_en: "Direct one-on-one consultation with sub-district officials to review system design documentation and official project implementation records."
    },
    {
        src: "assets/img/pkm/pkm-04-demo-aplikasi-kelurahan.jpg",
        date: "Okt – Des 2025 • Demo Aplikasi Web",
        title_id: "Demonstrasi Antarmuka Website Kelurahan Manggarai Selatan",
        title_en: "Live Demonstration of the Manggarai Selatan Web Application",
        desc_id: "Menampilkan antarmuka website Sistem Informasi Pengumuman Kegiatan dan Pelayanan publik yang telah dibangun bersama tim di depan pihak kelurahan.",
        desc_en: "Showcasing the live web interface of the Public Service and Activity Announcement Information System together with sub-district staff."
    },
    {
        src: "assets/img/pkm/pkm-05-serah-terima-berita-acara.jpg",
        date: "Okt – Des 2025 • Serah Terima Dokumen",
        title_id: "Penyerahan Dokumen Resmi & Berita Acara PKM",
        title_en: "Official Project Handover & Documentation Signing",
        desc_id: "Momen penyerahan surat dan berita acara proyek Pengabdian Kepada Masyarakat (PKM) antara Project Manager dan perwakilan pimpinan Kelurahan Manggarai Selatan.",
        desc_en: "Official handover of Community Service (PKM) project documents between the Project Manager and Manggarai Selatan Sub-District leadership."
    },
    {
        src: "assets/img/pkm/pkm-06-foto-bersama-perangkat-kelurahan.jpg",
        date: "24 Okt 2025 • Kolaborasi Kampus & Pemerintah",
        title_id: "Foto Bersama Jajaran Pejabat Kelurahan Manggarai Selatan",
        title_en: "Group Photo with Manggarai Selatan Sub-District Officials",
        desc_id: "Kolaborasi erat antara tim mahasiswa S1 Informatika Universitas Gunadarma dengan perangkat Kelurahan Manggarai Selatan.",
        desc_en: "Strong collaboration between the Universitas Gunadarma Informatics team and Manggarai Selatan Sub-District officials."
    },
    {
        src: "assets/img/pkm/pkm-07-tim-ppid-manggarai-selatan.jpg",
        date: "Okt – Des 2025 • PPID Manggarai Selatan",
        title_id: "Sinergi Bersama PPID (Pejabat Pengelola Informasi & Dokumentasi)",
        title_en: "Synergy with PPID (Information & Documentation Management Office)",
        desc_id: "Mendukung keterbukaan informasi publik dan digitalisasi pengumuman warga di lingkungan PPID Kelurahan Manggarai Selatan.",
        desc_en: "Supporting public information transparency and digital citizen announcements at PPID Manggarai Selatan."
    },
    {
        src: "assets/img/pkm/pkm-08-tim-pengembang-pppl-gunadarma.jpg",
        date: "Des 2025 • Universitas Gunadarma",
        title_id: "Tim Pengembang Proyek Mata Kuliah PPPL (Pengelolaan Proyek Perangkat Lunak)",
        title_en: "PPPL Course Software Development Team at Universitas Gunadarma",
        desc_id: "Foto tim pengembang bersama tampilan sistem informasi kelurahan yang diproyeksikan saat sesi pemaparan hasil akhir proyek.",
        desc_en: "The development team posing in front of the projected sub-district information system interface during the final project showcase."
    },
    {
        src: "assets/img/pkm/pkm-09-evaluasi-presentasi-kelas-pppl.jpg",
        date: "Des 2025 • Evaluasi Dosen PPPL",
        title_id: "Presentasi & Evaluasi Akademik Mata Kuliah PPPL",
        title_en: "Academic Presentation & Evaluation in PPPL Course",
        desc_id: "Mempresentasikan laporan manajemen proyek, arsitektur sistem, serta hasil implementasi aplikasi di hadapan dosen pengampu mata kuliah Pengelolaan Proyek Perangkat Lunak (PPPL).",
        desc_en: "Presenting project management reports, system architecture, and implementation results before the Software Project Management (PPPL) lecturer."
    }
];

// 2. Data 8 Unit Kompetensi Nasional LSP Junior Web Programmer
const lspUnits = [
    { code: "J.620100.004.02", id: "Menggunakan struktur data", en: "Using Data Structures", date: "10 Jun 2026", status: "Kompeten" },
    { code: "J.620100.005.02", id: "Mengimplementasikan User Interface", en: "Implementing User Interface (UI)", date: "10 Jun 2026", status: "Kompeten" },
    { code: "J.620100.011.01", id: "Melakukan Instalasi Software Tools Pemrograman", en: "Installing Software Programming Tools", date: "10 Jun 2026", status: "Kompeten" },
    { code: "J.620100.016.01", id: "Menulis Kode Dengan Prinsip Sesuai Guidelines Dan Best Practices", en: "Writing Code According to Guidelines & Best Practices", date: "10 Jun 2026", status: "Kompeten" },
    { code: "J.620100.017.02", id: "Mengimplementasikan Pemrograman Terstruktur", en: "Implementing Structured Programming", date: "10 Jun 2026", status: "Kompeten" },
    { code: "J.620100.019.02", id: "Menggunakan Library Atau Komponen Pre-Existing", en: "Utilizing Pre-Existing Libraries or Components", date: "10 Jun 2026", status: "Kompeten" },
    { code: "J.620100.023.02", id: "Membuat Dokumen Kode Program", en: "Creating Program Code Documentation", date: "10 Jun 2026", status: "Kompeten" },
    { code: "J.620100.025.02", id: "Melakukan Debugging", en: "Performing Application Debugging", date: "10 Jun 2026", status: "Kompeten" }
];

// 3. Data 10 Sertifikat Resmi Universitas Gunadarma
const certificatesData = [
    {
        no: "113666",
        cat: "web",
        badge_id: "Pelatihan Pengembangan Web",
        badge_en: "Web Development Training",
        title_id: "Dasar Pembuatan Aplikasi Web",
        title_en: "Basic Web Application Development",
        date_id: "25 Mei – 06 Juni 2026",
        date_en: "May 25 – June 6, 2026",
        topics_id: "Pengenalan Tools, Pembuatan Sistem, Implementasi Database, Implementasi User Interface, Implementasi Bahasa Pemrograman",
        topics_en: "Tools Introduction, System Development, Database Implementation, UI Implementation, Programming Implementation",
        file: "assets/certificates/02_Dasar_Pembuatan_Aplikasi_Web_2026.pdf"
    },
    {
        no: "517129",
        cat: "web",
        badge_id: "Pelatihan Analisis & Desain Web",
        badge_en: "Web Design & Analysis Training",
        title_id: "Dasar Perancangan Aplikasi Web",
        title_en: "Basic Web Application Design",
        date_id: "22 – 27 September 2025",
        date_en: "September 22 – 27, 2025",
        topics_id: "Pengenalan Aplikasi Web, Analisis Sistem, Perancangan Database, Perancangan User Interface, Penggunaan PHP & XAMPP",
        topics_en: "Web App Introduction, System Analysis, Database Design, User Interface Design, Using PHP & XAMPP",
        file: "assets/certificates/03_Dasar_Perancangan_Aplikasi_Web_2025.pdf"
    },
    {
        no: "706599",
        cat: "web",
        badge_id: "Pelatihan Backend & Bahasa Go",
        badge_en: "Backend & Golang Training",
        title_id: "Pemrograman Go untuk Tingkat Menengah",
        title_en: "Go-Lang for Intermediate",
        date_id: "18 Agustus 2025",
        date_en: "August 18, 2025",
        topics_id: "TDD & Unit Test, Function & Method, SQL pada Go, HTTP Request pada Go, Polymer Data Binding & Layout, Deployment",
        topics_en: "Unit Test & TDD, Function & Method, SQL in Go, HTTP Request in Go, Polymer Data Binding & Styling, Deployment",
        file: "assets/certificates/04_Pemrograman_Go_Tingkat_Menengah_2025.pdf"
    },
    {
        no: "177475",
        cat: "web",
        badge_id: "Pelatihan Pemrograman Go",
        badge_en: "Golang Programming Training",
        title_id: "Pemrograman Go untuk Tingkat Pemula",
        title_en: "Go-Lang for Beginner",
        date_id: "19 Agustus 2024",
        date_en: "August 19, 2024",
        topics_id: "Konsep Dasar Go, Variabel & Tipe Data, Perulangan & Kondisi, Struct/Pointer/Slice/Map, Go Web Server, JSON & Polymer",
        topics_en: "Fundamental Go Concepts, Variables & Data Types, Loops & Conditions, Struct/Pointer/Slice/Map, Go Web Server & JSON",
        file: "assets/certificates/06_Pemrograman_Go_Tingkat_Pemula_2024.pdf"
    },
    {
        no: "580674",
        cat: "web",
        badge_id: "Pelatihan Fundamental Web",
        badge_en: "Web Fundamental Training",
        title_id: "Dasar Pemrograman Berbasis Web",
        title_en: "Fundamental Web Programming",
        date_id: "21 Agustus 2023",
        date_en: "August 21, 2023",
        topics_id: "Pengantar Pemrograman Web & Go, Struktur Kontrol Go, J2EE/Servlet/JSP, .NET Framework & C#, ASP.NET & Application State",
        topics_en: "Web & Go Introduction, Go Control Structures, J2EE/Servlet/JSP, .NET Framework & C#, ASP.NET & Application State",
        file: "assets/certificates/09_Dasar_Pemrograman_Berbasis_Web_2023.pdf"
    },
    {
        no: "516068",
        cat: "db",
        badge_id: "Pelatihan Database Enterprise",
        badge_en: "Enterprise Database Training",
        title_id: "Oracle untuk Tingkat Menengah",
        title_en: "Oracle for Intermediate",
        date_id: "24 Februari 2025",
        date_en: "February 24, 2025",
        topics_id: "Mengelola Tabel, Penanganan Constraint, Membuat View, Multi-Table Query, Sub Query, Explicit Cursors, Handling Exception",
        topics_en: "Create & Manage Tables, Constraints, Views, Multi-Table Queries, Subqueries, Explicit Cursors, Exception Handling",
        file: "assets/certificates/05_Oracle_Tingkat_Menengah_2025.pdf"
    },
    {
        no: "674123",
        cat: "db",
        badge_id: "Pelatihan Database & PL/SQL",
        badge_en: "Database & PL/SQL Training",
        title_id: "Oracle untuk Tingkat Pemula",
        title_en: "Oracle for Beginner",
        date_id: "19 Februari 2024",
        date_en: "February 19, 2024",
        topics_id: "Instalasi Oracle 11g, Pembuatan Database & User, Single-Row Functions, Pengenalan PL/SQL, Variabel & Interaksi Server",
        topics_en: "Oracle 11g Installation, Database & User Creation, Single-Row Functions, PL/SQL Intro, Variables & Server Interaction",
        file: "assets/certificates/08_Oracle_Tingkat_Pemula_2024.pdf"
    },
    {
        no: "210162",
        cat: "db",
        badge_id: "Pelatihan RDBMS Multi-Platform",
        badge_en: "Multi-Platform RDBMS Training",
        title_id: "Dasar Sistem Manajemen Basis Data",
        title_en: "Fundamental DBMS",
        date_id: "20 Februari 2023",
        date_en: "February 20, 2023",
        topics_id: "Konsep Database Relasional, DDL/DML & Select pada MySQL, DDL/DML pada SQL Server, serta DDL/DML pada Oracle",
        topics_en: "Relational Database Concepts, DDL/DML & Select in MySQL, DDL/DML in SQL Server, and DDL/DML in Oracle",
        file: "assets/certificates/10_Dasar_Sistem_Manajemen_Basis_Data_2023.pdf"
    },
    {
        no: "178997",
        cat: "net",
        badge_id: "Workshop Jaringan & IT Support",
        badge_en: "Networking & IT Support Workshop",
        title_id: "Instalasi LAN Nirkabel (Wireless LAN)",
        title_en: "Introduction to Wireless LAN Installation",
        date_id: "16 Mei 2024",
        date_en: "May 16, 2024",
        topics_id: "Pengenalan LAN, Pengenalan Teknologi Nirkabel (Wireless), Pengenalan Protokol TCP/IP, Konfigurasi & Instalasi LAN Nirkabel",
        topics_en: "Introduction to LAN, Wireless Technology Fundamentals, TCP/IP Protocol Basics, Wireless LAN Configuration & Installation",
        file: "assets/certificates/07_Workshop_Instalasi_LAN_Nirkabel_2024.pdf"
    },
    {
        no: "964722/AT/FPSI/2026",
        cat: "net",
        badge_id: "Evaluasi Potensi Akademik",
        badge_en: "Cognitive & Aptitude Assessment",
        title_id: "Sertifikat Aptitude Test Universitas Gunadarma",
        title_en: "Universitas Gunadarma Aptitude Test Certificate",
        date_id: "09 Juli 2026",
        date_en: "July 9, 2026",
        topics_id: "Evaluasi Kemampuan Berpikir Abstrak, Penalaran Logika, dan Kemampuan Mengaplikasikan Aturan Logis untuk Kesimpulan",
        topics_en: "Assessment of Abstract Thinking, Logical Reasoning, and Analytical Conclusion Formulation",
        file: "assets/certificates/01_Sertifikat_Aptitude_Test_2026.pdf"
    }
];

// 4. Data Keahlian Teknis (Tech Stack) - Tanpa Trae IDE
const techSkills = [
    { name: "PHP", category: "backend", level: "Advanced", desc_id: "Backend Utama & OOP", desc_en: "Core Backend & OOP", icon: "🐘" },
    { name: "Laravel", category: "backend", level: "Advanced", desc_id: "Full Stack MVC Framework", desc_en: "Full Stack MVC Framework", icon: "🔥" },
    { name: "JavaScript (ES6+)", category: "frontend", level: "Advanced", desc_id: "DOM, Fetch API & Interaktivitas", desc_en: "DOM, Fetch API & Interactivity", icon: "⚡" },
    { name: "React.js", category: "frontend", level: "Intermediate", desc_id: "Component-Based UI", desc_en: "Component-Based UI", icon: "⚛️" },
    { name: "Next.js", category: "frontend", level: "Intermediate", desc_id: "Modern React Framework", desc_en: "Modern React Framework", icon: "▲" },
    { name: "Go (Golang)", category: "backend", level: "Intermediate", desc_id: "REST HTTP, SQL & TDD", desc_en: "REST HTTP, SQL & TDD", icon: "🐹" },
    { name: "HTML5 & CSS3", category: "frontend", level: "Advanced", desc_id: "Semantic Web & Responsive UI", desc_en: "Semantic Web & Responsive UI", icon: "🎨" },
    { name: "Tailwind CSS", category: "frontend", level: "Advanced", desc_id: "Utility-First Styling", desc_en: "Utility-First Styling", icon: "🌊" },
    { name: "Bootstrap 5", category: "frontend", level: "Advanced", desc_id: "Responsive UI Grid", desc_en: "Responsive UI Grid", icon: "🅱️" },
    { name: "MySQL", category: "database", level: "Advanced", desc_id: "Relational DB, Query & Indexing", desc_en: "Relational DB, Query & Indexing", icon: "🐬" },
    { name: "Oracle (PL/SQL)", category: "database", level: "Intermediate", desc_id: "Views, Cursors & Exception", desc_en: "Views, Cursors & Exception", icon: "🗄️" },
    { name: "SQL Server", category: "database", level: "Intermediate", desc_id: "DDL, DML & Relational Schema", desc_en: "DDL, DML & Relational Schema", icon: "📊" },
    { name: "phpMyAdmin & XAMPP", category: "database", level: "Advanced", desc_id: "Local Server & DB Management", desc_en: "Local Server & DB Management", icon: "🛠️" },
    { name: "System Analysis & UML", category: "analysis", level: "Advanced", desc_id: "Requirement Gathering, ERD & SDLC", desc_en: "Requirement Gathering, ERD & SDLC", icon: "📐" },
    { name: "Project Management", category: "analysis", level: "Advanced", desc_id: "Team Leadership & Client Pitching", desc_en: "Team Leadership & Client Pitching", icon: "📋" },
    { name: "Wireless LAN & TCP/IP", category: "analysis", level: "Intermediate", desc_id: "Jaringan Komputer & IT Support", desc_en: "Computer Networking & IT Support", icon: "📡" },
    { name: "Git & GitHub", category: "tools", level: "Advanced", desc_id: "Version Control & Collaboration", desc_en: "Version Control & Collaboration", icon: "🐙" },
    { name: "Postman", category: "tools", level: "Advanced", desc_id: "REST API Testing & Debugging", desc_en: "REST API Testing & Debugging", icon: "🚀" },
    { name: "Visual Studio Code", category: "tools", level: "Advanced", desc_id: "Code Editor & Debugging Workflow", desc_en: "Code Editor & Debugging Workflow", icon: "💻" },
    { name: "Figma & Canva", category: "tools", level: "Intermediate", desc_id: "UI/UX Wireframing & Visual Asset", desc_en: "UI/UX Wireframing & Visual Asset", icon: "✨" },
    { name: "Google AI Studio", category: "tools", level: "Advanced", desc_id: "Prompt Engineering & AI Workflow", desc_en: "Prompt Engineering & AI Workflow", icon: "🤖" }
];

let currentLang = "id";
let activeSkillCat = "all";
let activeCertCat = "all";
let currentLightboxIdx = 0;

// Render Tech Stack
function renderSkills() {
    const grid = document.getElementById("skills-grid");
    if (!grid) return;
    const filtered = activeSkillCat === "all" 
        ? techSkills 
        : techSkills.filter(s => s.category === activeSkillCat);
    
    grid.innerHTML = filtered.map(skill => `
        <div class="bento-card p-4 flex items-start gap-3.5 group">
            <div class="w-11 h-11 rounded-xl bg-slate-800/90 border border-slate-700/70 flex items-center justify-center text-xl shrink-0 group-hover:scale-110 group-hover:border-indigo-500/50 transition-all">
                ${skill.icon}
            </div>
            <div class="min-w-0 flex-1">
                <div class="flex items-center justify-between gap-2">
                    <h4 class="font-bold text-white text-sm truncate">${skill.name}</h4>
                    <span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                        ${skill.level}
                    </span>
                </div>
                <p class="text-xs text-slate-400 mt-1 truncate">
                    ${currentLang === "id" ? skill.desc_id : skill.desc_en}
                </p>
            </div>
        </div>
    `).join("");
}

// Render 9 PKM Documentation Photos Grid
function renderPkmGallery() {
    const container = document.getElementById("pkm-gallery-grid");
    if (!container) return;
    container.innerHTML = pkmPhotos.map((item, idx) => `
        <div onclick="openLightbox(${idx})" class="gallery-thumb rounded-xl border border-slate-800 bg-slate-900/60 aspect-[4/3] group">
            <img src="${item.src}" alt="${currentLang === 'id' ? item.title_id : item.title_en}" loading="lazy" class="w-full h-full object-cover">
            <div class="gallery-overlay absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent p-3.5 flex flex-col justify-end">
                <span class="text-[10px] font-semibold text-emerald-400 uppercase tracking-wider">${item.date}</span>
                <h5 class="text-xs font-bold text-white leading-snug mt-0.5 line-clamp-2">
                    ${currentLang === "id" ? item.title_id : item.title_en}
                </h5>
                <span class="text-[11px] text-indigo-300 mt-1 inline-flex items-center gap-1 font-medium">
                    <i data-lucide="maximize-2" class="w-3 h-3"></i>
                    ${currentLang === "id" ? "Klik untuk perbesar" : "Click to enlarge"}
                </span>
            </div>
        </div>
    `).join("");
    if (window.lucide) lucide.createIcons();
}

// Lightbox Functions
window.openLightbox = function(index) {
    currentLightboxIdx = index;
    updateLightboxContent();
    const modal = document.getElementById("lightbox-modal");
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    document.body.style.overflow = "hidden";
};

window.closeLightbox = function() {
    const modal = document.getElementById("lightbox-modal");
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    document.body.style.overflow = "auto";
};

window.changeLightboxSlide = function(step) {
    currentLightboxIdx = (currentLightboxIdx + step + pkmPhotos.length) % pkmPhotos.length;
    updateLightboxContent();
};

function updateLightboxContent() {
    const item = pkmPhotos[currentLightboxIdx];
    document.getElementById("lightbox-img").src = item.src;
    document.getElementById("lightbox-date").textContent = `${item.date}  •  (${currentLightboxIdx + 1} / ${pkmPhotos.length})`;
    document.getElementById("lightbox-title").textContent = currentLang === "id" ? item.title_id : item.title_en;
    document.getElementById("lightbox-desc").textContent = currentLang === "id" ? item.desc_id : item.desc_en;
}

// Render LSP 8 Units Table
function renderLspUnits() {
    const tbody = document.getElementById("lsp-units-tbody");
    if (!tbody) return;
    tbody.innerHTML = lspUnits.map((u, i) => `
        <tr class="border-b border-slate-800/80 hover:bg-slate-800/40 transition-colors">
            <td class="py-2.5 px-3 text-xs text-slate-400 font-mono">${i + 1}</td>
            <td class="py-2.5 px-3 text-xs font-mono text-indigo-300 font-semibold">${u.code}</td>
            <td class="py-2.5 px-3 text-xs text-slate-200">${currentLang === "id" ? u.id : u.en}</td>
            <td class="py-2.5 px-3 text-xs text-slate-400 hidden sm:table-cell">${u.date}</td>
            <td class="py-2.5 px-3 text-right">
                <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    ✓ ${currentLang === "id" ? "Kompeten" : "Competent"}
                </span>
            </td>
        </tr>
    `).join("");
}

// Render 10 Official Certificates Grid
function renderCertificates() {
    const container = document.getElementById("certificates-grid");
    if (!container) return;
    const filtered = activeCertCat === "all"
        ? certificatesData
        : certificatesData.filter(c => c.cat === activeCertCat);

    container.innerHTML = filtered.map(cert => `
        <div class="bento-card p-5 flex flex-col justify-between">
            <div>
                <div class="flex items-center justify-between gap-2 mb-3">
                    <span class="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                        ${currentLang === "id" ? cert.badge_id : cert.badge_en}
                    </span>
                    <span class="text-[11px] font-mono text-slate-400">No. ${cert.no}</span>
                </div>
                <h4 class="text-base font-bold text-white leading-snug">
                    ${currentLang === "id" ? cert.title_id : cert.title_en}
                </h4>
                <p class="text-xs text-emerald-400 font-medium mt-1">
                    Universitas Gunadarma • ${currentLang === "id" ? cert.date_id : cert.date_en}
                </p>
                <p class="text-xs text-slate-400 mt-3 leading-relaxed">
                    <strong class="text-slate-300">${currentLang === "id" ? "Materi:" : "Subjects:"}</strong>
                    ${currentLang === "id" ? cert.topics_id : cert.topics_en}
                </p>
            </div>
            <div class="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <span class="text-[11px] text-slate-400 inline-flex items-center gap-1">
                    <i data-lucide="shield-check" class="w-3.5 h-3.5 text-emerald-400"></i>
                    ${currentLang === "id" ? "Tersertifikasi Elektronik" : "Digitally Signed"}
                </span>
                <a href="${cert.file}" target="_blank" class="text-xs font-semibold text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1.5 transition-colors">
                    <span>${currentLang === "id" ? "Lihat PDF Asli" : "View Official PDF"}</span>
                    <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
                </a>
            </div>
        </div>
    `).join("");
    if (window.lucide) lucide.createIcons();
}

// Language Switcher Logic (ID <-> EN)
window.setLanguage = function(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;

    // Update toggle buttons
    const btnId = document.getElementById("lang-btn-id");
    const btnEn = document.getElementById("lang-btn-en");
    if (lang === "id") {
        btnId.className = "px-2.5 py-1 rounded-full text-xs font-bold bg-indigo-600 text-white transition-all";
        btnEn.className = "px-2.5 py-1 rounded-full text-xs font-semibold text-slate-400 hover:text-white transition-all";
    } else {
        btnEn.className = "px-2.5 py-1 rounded-full text-xs font-bold bg-indigo-600 text-white transition-all";
        btnId.className = "px-2.5 py-1 rounded-full text-xs font-semibold text-slate-400 hover:text-white transition-all";
    }

    // Update all elements with data-id and data-en attributes
    document.querySelectorAll("[data-id]").forEach(el => {
        const text = lang === "id" ? el.getAttribute("data-id") : el.getAttribute("data-en");
        if (text !== null) {
            el.innerHTML = text;
        }
    });

    // Update placeholders
    document.querySelectorAll("[data-placeholder-id]").forEach(el => {
        el.placeholder = lang === "id" ? el.getAttribute("data-placeholder-id") : el.getAttribute("data-placeholder-en");
    });

    renderSkills();
    renderPkmGallery();
    renderLspUnits();
    renderCertificates();
};

// Filter Handlers
window.filterSkills = function(cat, btnElement) {
    activeSkillCat = cat;
    document.querySelectorAll(".skill-filter-btn").forEach(b => b.classList.remove("active"));
    btnElement.classList.add("active");
    renderSkills();
};

window.filterCerts = function(cat, btnElement) {
    activeCertCat = cat;
    document.querySelectorAll(".cert-filter-btn").forEach(b => b.classList.remove("active"));
    btnElement.classList.add("active");
    renderCertificates();
};

// Toggle CV Dropdown
window.toggleCvMenu = function(e) {
    e.stopPropagation();
    const menu = document.getElementById("cv-dropdown-menu");
    menu.classList.toggle("hidden");
};

document.addEventListener("click", () => {
    const menu = document.getElementById("cv-dropdown-menu");
    if (menu && !menu.classList.contains("hidden")) {
        menu.classList.add("hidden");
    }
});

// Copy Email Helper
window.copyEmailAddress = function() {
    navigator.clipboard.writeText("rizkyms123@gmail.com");
    const toast = document.getElementById("copy-toast");
    toast.classList.remove("hidden");
    setTimeout(() => {
        toast.classList.add("hidden");
    }, 2600);
};

// Smart Contact Form Handler (No Database Required - Opens Pre-filled Email or WhatsApp)
window.handleContactSubmit = function(e) {
    e.preventDefault();
    const name = document.getElementById("contact-name").value.trim();
    const company = document.getElementById("contact-company").value.trim();
    const role = document.getElementById("contact-role").value;
    const message = document.getElementById("contact-message").value.trim();
    const channel = document.querySelector('input[name="send_channel"]:checked').value;

    const subject = `[Portofolio Web] Tawaran / Diskusi ${role} - ${name} (${company || 'Personal'})`;
    const bodyText = `Halo Rizky Maulana Saputra,

Saya ${name}${company ? ' dari ' + company : ''}.
ketertarikan posisi/keperluan: ${role}

Pesan:
${message}

Terima kasih.`;

    if (channel === "whatsapp") {
        const waUrl = `https://wa.me/6285697992400?text=${encodeURIComponent(bodyText)}`;
        window.open(waUrl, "_blank");
    } else {
        const mailtoUrl = `mailto:rizkyms123@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
        window.location.href = mailtoUrl;
    }
};

// Initialize on DOM Content Loaded
document.addEventListener("DOMContentLoaded", () => {
    renderSkills();
    renderPkmGallery();
    renderLspUnits();
    renderCertificates();
    if (window.lucide) lucide.createIcons();

    // Keyboard navigation for Lightbox
    document.addEventListener("keydown", (e) => {
        const modal = document.getElementById("lightbox-modal");
        if (modal && !modal.classList.contains("hidden")) {
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowRight") changeLightboxSlide(1);
            if (e.key === "ArrowLeft") changeLightboxSlide(-1);
        }
    });
});
