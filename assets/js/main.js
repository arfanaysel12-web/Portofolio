/* ============================================================
   ARFAN AYSEL — PORTFOLIO MAIN SCRIPT
   ============================================================ */
(function () {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouchDevice = window.matchMedia('(hover: none), (pointer: coarse)').matches;

  /* ---------- 1. Loading Screen ---------- */
  const loader = document.getElementById('loader');
  window.addEventListener('load', function () {
    if (!loader) return;
    window.setTimeout(function () {
      loader.classList.add('hidden');
      document.body.style.overflow = '';
    }, prefersReducedMotion ? 0 : 550);
  });

  /* ---------- 2. Footer Year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- 2b. Internationalization (EN / ID) ---------- */
  const CONTACT_EMAIL = 'arfanaysel12@gmail.com';

  /* ==== WEB3FORMS ====
     Dapatkan Access Key gratis: buka https://web3forms.com,
     masukkan email arfanaysel12@gmail.com, lalu salin Access Key-nya ke bawah ini. */
  const WEB3FORMS_ACCESS_KEY = '4f94c79a-43ee-4886-9d54-d156a02d32b4';

  const translations = {
    en: {
      'loader.text': 'Loading Portfolio…',
      'a11y.skip': 'Skip to content',
      'a11y.langToggle': 'Switch language',
      'a11y.toggleTheme': 'Toggle dark and light mode',
      'a11y.openMenu': 'Open menu',
      'a11y.scrollDown': 'Scroll down',
      'a11y.backTop': 'Back to top',
      'a11y.closeModal': 'Close project detail',
      'a11y.projectDetail': 'Project detail',
      'nav.home': 'Home', 'nav.about': 'About', 'nav.whatido': 'What I Do',
      'nav.skills': 'Skills', 'nav.learning': 'Learning', 'nav.projects': 'Projects',
      'nav.experience': 'Experience', 'nav.education': 'Education', 'nav.journey': 'Journey',
      'nav.achievements': 'Achievements', 'nav.certificates': 'Certificates', 'nav.contact': 'Contact',
      'hero.greet': "Hello, I'm",
      'hero.roleMain': 'IT Analyst & Mobile/Web Developer Enthusiast',
      'hero.roles': ['Web Developer', 'Flutter Developer', 'UI/UX Enthusiast', 'IT Analyst'],
      'hero.desc': 'A student of Software Engineering at SMKS Jakarta Pusat 1 (RPL, 2024–2027) focused on web development, mobile development and system analysis, with hands-on experience as an IT Analyst Intern in technical support and data analysis.',
      'hero.btnProjects': 'View Projects',
<<<<<<< HEAD
      'hero.btnCv': 'Download CV',
=======
      'hero.btnCv': 'Download Portfolio',
>>>>>>> 1e1375f (Update portofolio terbaru)
      'hero.cvPng': 'Download as Image',
      'hero.cvPdf': 'Download as PDF',
      'hero.btnContact': 'Contact Me',
      'hero.badgeCode': 'Clean Code',
      'hero.badgeDesign': 'UI/UX Design',
      'about.tag': 'About Me',
      'about.title': 'Get To Know ', 'about.titleAccent': 'Me',
      'about.sub': "A glimpse into who I am, what I build and where I'm heading.",
      'about.introTitle': 'A Short Introduction',
      'about.introP1': 'I am a student at SMKS Jakarta Pusat 1 majoring in Software Engineering (RPL), focused on web development, mobile development and system analysis. I have hands-on knowledge of HTML, CSS, PHP, MySQL, Dart, Flutter, Git, GitHub and UI/UX Design.',
      'about.introP2': 'I also have experience as an IT Analyst Intern in technical support, system analysis, data management and team coordination. That experience taught me to understand the technical side of a system, not only the side that writes the code.',
      'about.introP3': 'Outside of campus, I spend most of my time learning through documentation, online courses and personal projects — building small things, breaking them, and rebuilding them until they work.',
      'about.snapTitle': 'Profile Snapshot',
      'about.snap1Title': 'SMKS Jakarta Pusat 1',
      'about.snap1Period': 'Software Engineering (RPL) · 2024 — 2027',
      'about.snap1Note': 'Programming fundamentals, databases and web application development.',
      'about.snap2Title': 'IT Analyst Intern',
      'about.snap2Period': 'PT Wisesa Consulting Indonesia · Jun 2025 – Jan 2026',
      'about.snap2Note': 'Technical support, system &amp; data analysis, data management, team coordination.',
      'about.snap3Title': 'Jakarta, Indonesia',
      'about.snap3Period': 'Open for collaboration &amp; freelance projects',
      'about.snap3Note': 'arfanaysel12@gmail.com',
      'about.stat1': 'Projects', 'about.stat2': 'Technologies',
      'about.stat3': 'Internship', 'about.stat4': 'RPL Student',
      'whatido.tag': 'What I Do',
      'whatido.title': 'What I ', 'whatido.titleAccent': 'Build',
      'whatido.sub': 'The four areas I focus on as an IT Analyst &amp; developer.',
      'whatido.service1Title': 'Web Development',
      'whatido.service1Desc': 'Building responsive websites and web applications with HTML, CSS, JavaScript, Bootstrap, PHP and MySQL.',
      'whatido.service2Title': 'Mobile Development',
      'whatido.service2Desc': 'Building cross-platform applications using Dart and Flutter, then publishing them to the web.',
      'whatido.service3Title': 'UI/UX Design',
      'whatido.service3Desc': 'Creating clean, modern and user-friendly interfaces with Figma and Canva, starting from the layout plan.',
      'whatido.service4Title': 'System &amp; Data Analysis',
      'whatido.service4Desc': 'Analysing system needs, user data and technical problems so the solution actually fits the need.',
      'skills.tag': 'Tech Stack',
      'skills.title': 'Technologies I ', 'skills.titleAccent': 'Use',
      'skills.sub': 'The tools and technologies I use to bring ideas to life.',
      'skills.frontend': 'Frontend', 'skills.backend': 'Backend',
      'skills.mobile': 'Mobile', 'skills.tools': 'Tools',
      'learning.tag': 'Currently Learning',
      'learning.title': "What I'm ", 'learning.titleAccent': 'Learning Now',
      'learning.sub': 'Topics I am actively studying to strengthen my development skills.',
      'learning.item1': 'Flutter',
      'learning.item1Desc': 'Dart, widgets, state management and Flutter Web deployment.',
      'learning.item2': 'Advanced JavaScript',
      'learning.item2Desc': 'DOM manipulation, asynchronous logic and interactive web behaviour.',
      'learning.item3': 'REST API',
      'learning.item3Desc': 'Consuming APIs, handling requests, responses and error states.',
      'learning.item4': 'UI/UX Design',
      'learning.item4Desc': 'Layout, colour, typography and designing for readability first.',
      'learning.item5': 'Database',
      'learning.item5Desc': 'Relational design, SQL queries and normalising application data.',
      'learning.item6': 'Full Stack Development',
      'learning.item6Desc': 'Connecting frontend, backend and database into one working application.',
      'projects.tag': 'Featured Work',
      'projects.title': 'My Featured ', 'projects.titleAccent': 'Projects',
      'projects.sub': "Projects I have built for learning and practice — open any card to see the full detail.",
      'projects.subFeatured': 'Main Projects',
      'projects.subMore': 'Other Projects',
      'projects.titleSupermarket': 'Supermarket Web Application',
      'projects.descSupermarket': 'Web application for online grocery shopping with a product catalogue, shopping cart, receipt and checkout flow.',
      'projects.titleQuizverse': 'QuizVerse — Interactive Quiz',
      'projects.descQuizverse': 'Interactive quiz application built with Flutter and published as a Flutter Web app, with live scoring and a game-like flow.',
      'projects.titlePortfolio': 'Personal Portfolio',
      'projects.descPortfolio': 'This website — a single-page portfolio built with HTML, CSS and JavaScript, with dark/light mode, scroll reveal and bilingual content.',
      'projects.titleKasir': 'KasirCerdas',
      'projects.descKasir': 'Point of sale application to practise transaction processing in PHP and database design. Also being rebuilt in Flutter.',
      'projects.titleAbsensi': 'Digital Attendance',
      'projects.descAbsensi': 'Attendance application for Android, iOS and web, built with Flutter and Dart, with a backend folder for storing attendance data.',
      'projects.titleAutoparts': 'Automotive Sparepart Website',
      'projects.descAutoparts': 'Website for an automotive sparepart store, with category browsing and product management built on Bootstrap, PHP and MySQL.',
      'projects.titleSchool': 'School Management Website',
      'projects.descSchool': 'School administration website to manage student, teacher and class data with a simple dashboard.',
      'projects.inDev': 'In Development',
      'projects.code': 'Code', 'projects.live': 'Live Demo', 'projects.detail': 'Detail',
      'modal.overview': 'Overview',
      'modal.features': 'Features',
      'modal.tech': 'Technologies',
      'modal.process': 'Development Process',
      'modal.challenges': 'Challenges',
      'modal.learned': 'What I Learned',
      'experience.tag': 'Work Experience',
      'experience.title': 'Professional ', 'experience.titleAccent': 'Experience',
      'experience.sub': 'Real working experience gained during my internship.',
      'experience.role': 'IT Analyst Intern',
      'experience.company': 'PT Wisesa Consulting Indonesia',
      'experience.period': 'Jun 2025 – Jan 2026',
      'experience.resp1': 'Technical Support / Troubleshooting',
      'experience.resp2': 'System &amp; Data Analysis',
      'experience.resp3': 'Data Management',
      'experience.resp4': 'Team Coordination',
      'experience.resp5': 'Technical issue documentation',
      'education.tag': 'Education',
      'education.title': 'My ', 'education.titleAccent': 'Education',
      'education.sub': 'Where I am studying and what I am learning there.',
      'education.period': '2024 — 2027',
      'education.school': 'SMKS Jakarta Pusat 1',
      'education.major': 'Software Engineering (RPL)',
      'education.note': 'Studying programming fundamentals, database design, web application development and mobile application basics.',
      'journey.tag': 'Learning Journey',
      'journey.title': 'Year by ', 'journey.titleAccent': 'Year',
      'journey.sub': 'How my skills grew from 2024 — including what I am still working towards.',
      'journey.y1Title': 'RPL Student',
      'journey.y1Desc': 'Starting Software Engineering: HTML, CSS and basic programming fundamentals.',
      'journey.y2Title': 'Backend &amp; Version Control',
      'journey.y2Desc': 'Learning PHP, MySQL, Git and GitHub, while working as an IT Analyst Intern.',
      'journey.y3Title': 'Mobile &amp; Web Application',
      'journey.y3Desc': 'Learning Flutter and Dart, building web applications and practising UI/UX design.',
      'journey.y4Title': 'Target: Full Stack / Mobile',
      'journey.y4Desc': 'My goal after graduation: becoming a full stack developer and mobile developer. Still a target, not an achievement yet.',
      'achievements.tag': 'Beyond The Code',
      'achievements.title': 'Achievements &amp; ', 'achievements.titleAccent': 'Activities',
      'achievements.sub': 'Things I achieve and take part in outside of programming.',
      'achievements.awardLabel': 'Achievement',
      'achievements.awardTitle': '2nd Place — Karate Kata',
      'achievements.awardDesc': 'Placed 2nd in a karate kata competition.',
      'achievements.activityLabel': 'Activity',
      'achievements.activity1Title': 'Active Rohis Member',
      'achievements.activity1Desc': "Active member of the school's Rohis (Islamic studies) extracurricular group.",
      'achievements.activity2Title': 'Pramuka Member',
      'achievements.activity2Desc': "Member of the school scout (Pramuka) extracurricular group.",
      'certificates.tag': 'Certifications',
      'certificates.title': 'My ', 'certificates.titleAccent': 'Certificates',
      'certificates.sub': 'Certificates I actually hold — nothing listed here is unverified.',
      'certificates.title1': 'IT Analyst Internship',
      'certificates.issued1': 'Jun 2025 – Jan 2026',
      'certificates.seal': 'Internship',
      'certificates.note1': 'Awarded after completing the IT Analyst internship in technical support and analysis.',
      'certificates.title2': 'Sertifikat PKL',
      'certificates.issued2': 'Jun 2025',
      'certificates.note2': 'Sertifikat hasil pelaksanaan kerja praktik lapangan di PT Wisesa Consulting Indonesia.',
      'certificates.title3': 'Surat Rekomendasi Kerja',
      'certificates.issued3': 'Jan 2026',
      'certificates.note3': 'Surat rekomendasi dari pemimpin langsung setelah magang.',
      'contact.tag': 'Contact',
      'contact.title': "Let's Work ", 'contact.titleAccent': 'Together',
      'contact.sub': "Have a project in mind? I'd love to hear from you.",
      'contact.nameLabel': 'Name', 'contact.nameValue': 'Arfan Aysel',
      'contact.emailLabel': 'Email', 'contact.phoneLabel': 'Phone',
      'contact.locationLabel': 'Location', 'contact.locationValue': 'Jakarta, Indonesia',
      'contact.formName': 'Name', 'contact.formEmail': 'Email',
      'contact.formSubject': 'Subject', 'contact.formMessage': 'Message',
      'contact.placeholderName': 'Your name',
      'contact.placeholderEmail': 'your@email.com',
      'contact.placeholderSubject': "What's this about?",
      'contact.placeholderMessage': 'Tell me about your project…',
      'contact.send': 'Send Message', 'contact.sending': 'Sending…', 'contact.sent': 'Message Sent!',
      'contact.statusInvalid': 'Please fill in all fields correctly.',
      'contact.statusSuccess': 'Thank you! Your message was sent successfully.',
      'contact.statusError': 'Something went wrong. Please try again.',
      'footer.desc': 'IT Analyst &amp; Mobile/Web Developer Enthusiast crafting premium, fast and memorable digital experiences.',
      'footer.quickLinks': 'Quick Links', 'footer.connect': "Let's Connect",
      'footer.copy': 'Built with passion.'
    },
    id: {
      'loader.text': 'Memuat Portofolio…',
      'a11y.skip': 'Lewati ke konten',
      'a11y.langToggle': 'Ganti bahasa',
      'a11y.toggleTheme': 'Ubah mode gelap dan terang',
      'a11y.openMenu': 'Buka menu',
      'a11y.scrollDown': 'Gulir ke bawah',
      'a11y.backTop': 'Kembali ke atas',
      'a11y.closeModal': 'Tutup detail proyek',
      'a11y.projectDetail': 'Detail proyek',
      'nav.home': 'Beranda', 'nav.about': 'Tentang', 'nav.whatido': 'Layanan',
      'nav.skills': 'Keahlian', 'nav.learning': 'Belajar', 'nav.projects': 'Proyek',
      'nav.experience': 'Pengalaman', 'nav.education': 'Pendidikan', 'nav.journey': 'Perjalanan',
      'nav.achievements': 'Prestasi', 'nav.certificates': 'Sertifikat', 'nav.contact': 'Kontak',
      'hero.greet': 'Halo, saya',
<<<<<<< HEAD
      'hero.roles': ['Frontend Developer', 'UI/UX Designer', 'Pelajar Rekayasa Perangkat Lunak'],
      'hero.desc': 'Frontend Developer & UI/UX Designer yang bersemangat membuat pengalaman web yang bersih, modern, dan ramah pengguna. Saat ini menempuh jurusan Rekayasa Perangkat Lunak dan mengubah ide menjadi produk yang indah serta fungsional.',
      'hero.btnProjects': 'Lihat Proyek',
      'hero.btnCv': 'Unduh CV',
=======
      'hero.roleMain': 'IT Analyst & Mobile/Web Developer Enthusiast',
      'hero.roles': ['Web Developer', 'Flutter Developer', 'UI/UX Enthusiast', 'IT Analyst'],
      'hero.desc': 'Siswa Rekayasa Perangkat Lunak di SMKS Jakarta Pusat 1 (RPL, 2024–2027) yang berfokus pada pengembangan web, mobile development, dan analisis sistem, dengan pengalaman praktis sebagai IT Analyst Intern dalam technical support dan analisis data.',
      'hero.btnProjects': 'Lihat Proyek',
      'hero.btnCv': 'Unduh Portfolio',
>>>>>>> 1e1375f (Update portofolio terbaru)
      'hero.cvPng': 'Unduh sebagai Foto',
      'hero.cvPdf': 'Unduh sebagai PDF',
      'hero.btnContact': 'Hubungi Saya',
      'hero.badgeCode': 'Kode Bersih',
      'hero.badgeDesign': 'Desain UI/UX',
      'about.tag': 'Tentang Saya',
      'about.title': 'Mengenal ', 'about.titleAccent': 'Saya',
      'about.sub': 'Sekilas tentang siapa saya, apa yang saya bangun, dan ke mana arah saya.',
      'about.introTitle': 'Perkenalan Singkat',
      'about.introP1': 'Saya adalah siswa SMKS Jakarta Pusat 1 jurusan Rekayasa Perangkat Lunak (RPL) yang berfokus pada pengembangan web, mobile development, dan analisis sistem. Memiliki pemahaman praktis dalam HTML, CSS, PHP, MySQL, Dart, Flutter, Git, GitHub, serta UI/UX Design.',
      'about.introP2': 'Saya juga memiliki pengalaman sebagai IT Analyst Intern dalam technical support, analisis sistem, pengelolaan data, dan koordinasi tim. Pengalaman tersebut saya gunakan untuk memahami sisi teknis dari sebuah sistem, bukan hanya dari sisi kodenya.',
      'about.introP3': 'Di luar kampus, waktu saya banyak dipakai untuk belajar lewat dokumentasi, kursus online, dan proyek pribadi — membangun hal kecil, lalu memperbaikinya sampai berhasil.',
      'about.snapTitle': 'Ringkasan Profil',
      'about.snap1Title': 'SMKS Jakarta Pusat 1',
      'about.snap1Period': 'Rekayasa Perangkat Lunak (RPL) · 2024 — 2027',
      'about.snap1Note': 'Dasar pemrograman, basis data, dan pengembangan aplikasi web.',
      'about.snap2Title': 'IT Analyst Intern',
      'about.snap2Period': 'PT Wisesa Consulting Indonesia · Jun 2025 – Jan 2026',
      'about.snap2Note': 'Technical support, analisis sistem &amp; data, pengelolaan data, koordinasi tim.',
      'about.snap3Title': 'Jakarta, Indonesia',
      'about.snap3Period': 'Terbuka untuk kolaborasi &amp; proyek freelance',
      'about.snap3Note': 'arfanaysel12@gmail.com',
      'about.stat1': 'Proyek', 'about.stat2': 'Teknologi',
      'about.stat3': 'Magang', 'about.stat4': 'Siswa RPL',
      'whatido.tag': 'Apa yang Saya Bangun',
      'whatido.title': 'Yang Saya ', 'whatido.titleAccent': 'Kerjakan',
      'whatido.sub': 'Empat bidang yang saya fokuskan sebagai IT Analyst &amp; developer.',
      'whatido.service1Title': 'Pengembangan Web',
      'whatido.service1Desc': 'Membangun website dan web application yang responsif dengan HTML, CSS, JavaScript, Bootstrap, PHP, dan MySQL.',
      'whatido.service2Title': 'Pengembangan Mobile',
      'whatido.service2Desc': 'Membangun aplikasi lintas platform menggunakan Dart dan Flutter, lalu menerbitkannya ke web.',
      'whatido.service3Title': 'Desain UI/UX',
      'whatido.service3Desc': 'Merancang antarmuka yang clean, modern, dan user-friendly dengan Figma dan Canva, mulai dari rencana layout.',
      'whatido.service4Title': 'Analisis Sistem &amp; Data',
      'whatido.service4Desc': 'Menganalisis kebutuhan sistem, data pengguna, dan masalah teknis agar solusinya benar-benar sesuai kebutuhan.',
      'skills.tag': 'Tech Stack',
      'skills.title': 'Teknologi yang ', 'skills.titleAccent': 'Saya Gunakan',
      'skills.sub': 'Alat dan teknologi yang saya gunakan untuk mewujudkan ide.',
      'skills.frontend': 'Frontend', 'skills.backend': 'Backend',
      'skills.mobile': 'Mobile', 'skills.tools': 'Alat',
      'learning.tag': 'Sedang Dipelajari',
      'learning.title': 'Yang Sedang Saya ', 'learning.titleAccent': 'Pelajari',
      'learning.sub': 'Topik yang sedang saya dalami untuk terus meningkatkan kemampuan pengembangan saya.',
      'learning.item1': 'Flutter',
      'learning.item1Desc': 'Dart, widget, state management, dan deployment Flutter Web.',
      'learning.item2': 'Advanced JavaScript',
      'learning.item2Desc': 'Manipulasi DOM, logika asynchronous, dan interaksi pada web.',
      'learning.item3': 'REST API',
      'learning.item3Desc': 'Menggunakan API, menangani request, response, dan kondisi error.',
      'learning.item4': 'UI/UX Design',
      'learning.item4Desc': 'Layout, warna, tipografi, dan desain yang mengutamakan keterbacaan.',
      'learning.item5': 'Database',
      'learning.item5Desc': 'Desain relasional, query SQL, dan normalisasi data aplikasi.',
      'learning.item6': 'Full Stack Development',
      'learning.item6Desc': 'Menyabungkan frontend, backend, dan database menjadi satu aplikasi yang berjalan.',
      'projects.tag': 'Karya Unggulan',
      'projects.title': 'Proyek ', 'projects.titleAccent': 'Unggulan',
      'projects.sub': 'Proyek yang saya bangun untuk belajar dan berlatih — buka kartu mana pun untuk melihat detail lengkapnya.',
      'projects.subFeatured': 'Proyek Utama',
      'projects.subMore': 'Proyek Lainnya',
      'projects.titleSupermarket': 'Aplikasi Web Supermarket',
      'projects.descSupermarket': 'Aplikasi web belanja groceries online dengan katalog produk, keranjang belanja, struk, dan alur checkout.',
      'projects.titleQuizverse': 'QuizVerse — Kuis Interaktif',
      'projects.descQuizverse': 'Aplikasi kuis interaktif dengan Dart dan Flutter yang diterbitkan sebagai Flutter Web, lengkap dengan skor langsung dan alur seperti permainan.',
      'projects.titlePortfolio': 'Personal Portfolio',
      'projects.descPortfolio': 'Website ini — portofolio satu halaman dengan HTML, CSS, dan JavaScript, dilengkapi dark/light mode, scroll reveal, dan konten dua bahasa.',
      'projects.titleKasir': 'KasirCerdas',
      'projects.descKasir': 'Aplikasi kasir (point of sale) untuk berlatih memproses transaksi dengan PHP dan merancang database, dengan versi Flutter yang dikembangkan sebagai latihan kedua.',
      'projects.titleAbsensi': 'Digital Attendance',
      'projects.descAbsensi': 'Aplikasi absensi untuk Android, iOS, dan web yang dibangun dengan Flutter dan Dart, dilengkapi folder backend untuk menyimpan data absensi.',
      'projects.titleAutoparts': 'Website Suku Cadang Otomotif',
      'projects.descAutoparts': 'Website toko suku cadang otomotif dengan penelusuran kategori dan pengelolaan produk menggunakan Bootstrap, PHP, dan MySQL.',
      'projects.titleSchool': 'Website Manajemen Sekolah',
      'projects.descSchool': 'Website administrasi sekolah untuk mengelola data siswa, guru, dan kelas dengan dashboard sederhana.',
      'projects.inDev': 'Dalam Pengembangan',
      'projects.code': 'Kode', 'projects.live': 'Demo Langsung', 'projects.detail': 'Detail',
      'modal.overview': 'Ikhtisar',
      'modal.features': 'Fitur',
      'modal.tech': 'Teknologi',
      'modal.process': 'Proses Pengembangan',
      'modal.challenges': 'Tantangan',
      'modal.learned': 'Yang Saya Pelajari',
      'experience.tag': 'Pengalaman Kerja',
      'experience.title': 'Pengalaman ', 'experience.titleAccent': 'Kerja',
      'experience.sub': 'Pengalaman kerja nyata yang saya dapatkan saat magang.',
      'experience.role': 'IT Analyst Intern',
      'experience.company': 'PT Wisesa Consulting Indonesia',
      'experience.period': 'Jun 2025 – Jan 2026',
      'experience.resp1': 'Technical Support / Troubleshooting',
      'experience.resp2': 'Analisis Sistem &amp; Data',
      'experience.resp3': 'Pengelolaan Data',
      'experience.resp4': 'Koordinasi Tim',
      'experience.resp5': 'Dokumentasi kendala teknis',
      'education.tag': 'Pendidikan',
      'education.title': 'Riwayat ', 'education.titleAccent': 'Pendidikan',
      'education.sub': 'Tempat saya belajar dan apa yang saya pelajari di sana.',
      'education.period': '2024 — 2027',
      'education.school': 'SMKS Jakarta Pusat 1',
      'education.major': 'Rekayasa Perangkat Lunak (RPL)',
      'education.note': 'Mempelajari dasar pemrograman, desain basis data, pengembangan aplikasi web, dan dasar aplikasi mobile.',
      'journey.tag': 'Perjalanan Belajar',
      'journey.title': 'Tahun demi ', 'journey.titleAccent': 'Tahun',
      'journey.sub': 'Perkembangan kemampuan saya sejak 2024 — termasuk target yang masih saya kejar.',
      'journey.y1Title': 'Siswa RPL',
      'journey.y1Desc': 'Memulai Rekayasa Perangkat Lunak: HTML, CSS, dan dasar pemrograman.',
      'journey.y2Title': 'Backend &amp; Version Control',
      'journey.y2Desc': 'Belajar PHP, MySQL, Git, dan GitHub, sambil bekerja sebagai IT Analyst Intern.',
      'journey.y3Title': 'Mobile &amp; Web Application',
      'journey.y3Desc': 'Belajar Flutter dan Dart, membangun aplikasi web, serta berlatih desain UI/UX.',
      'journey.y4Title': 'Target: Full Stack / Mobile',
      'journey.y4Desc': 'Target saya setelah lulus: menjadi Full Stack Developer dan Mobile Developer. Masih target, bukan pencapaian.',
      'achievements.tag': 'Di Luar Kode',
      'achievements.title': 'Prestasi &amp; ', 'achievements.titleAccent': 'Kegiatan',
      'achievements.sub': 'Hal yang saya raih dan saya ikuti di luar pemrograman.',
      'achievements.awardLabel': 'Prestasi',
      'achievements.awardTitle': 'Juara 2 Lomba Karate — Kata',
      'achievements.awardDesc': 'Meraih juara 2 dalam lomba karate kategori kata.',
      'achievements.activityLabel': 'Kegiatan',
      'achievements.activity1Title': 'Anggota aktif Rohis',
      'achievements.activity1Desc': 'Anggota aktif ekstrakurikuler Rohis (kajian keislaman) di sekolah.',
      'achievements.activity2Title': 'Anggota Pramuka',
      'achievements.activity2Desc': 'Anggota ekstrakurikuler Pramuka di sekolah.',
      'certificates.tag': 'Sertifikasi',
      'certificates.title': 'Sertifikat ', 'certificates.titleAccent': 'Saya',
      'certificates.sub': 'Sertifikat yang benar-benar saya miliki — tidak ada yang belum terverifikasi.',
      'certificates.title1': 'Magang IT Analyst',
      'certificates.issued1': 'Jun 2025 – Jan 2026',
      'certificates.seal': 'Magang',
      'certificates.note1': 'Diberikan setelah menyelesaikan magang IT Analyst dalam technical support dan analisis.',
      'certificates.title2': 'Sertifikat PKL',
      'certificates.issued2': 'Jun 2025',
      'certificates.note2': 'Sertifikat hasil pelaksanaan kerja praktik lapangan di PT Wisesa Consulting Indonesia.',
      'certificates.title3': 'Surat Rekomendasi Kerja',
      'certificates.issued3': 'Jan 2026',
      'certificates.note3': 'Surat rekomendasi dari pemimpin langsung setelah magang.',
      'contact.tag': 'Kontak',
      'contact.title': 'Mari Bekerja ', 'contact.titleAccent': 'Sama',
      'contact.sub': 'Ada proyek dalam pikiran? Saya akan senang mendengar dari Anda.',
      'contact.nameLabel': 'Nama', 'contact.nameValue': 'Arfan Aysel',
      'contact.emailLabel': 'Email', 'contact.phoneLabel': 'Telepon',
      'contact.locationLabel': 'Lokasi', 'contact.locationValue': 'Jakarta, Indonesia',
      'contact.formName': 'Nama', 'contact.formEmail': 'Email',
      'contact.formSubject': 'Subjek', 'contact.formMessage': 'Pesan',
      'contact.placeholderName': 'Nama Anda',
      'contact.placeholderEmail': 'email@anda.com',
      'contact.placeholderSubject': 'Tentang apa ini?',
      'contact.placeholderMessage': 'Ceritakan tentang proyek Anda…',
      'contact.send': 'Kirim Pesan', 'contact.sending': 'Mengirim…', 'contact.sent': 'Pesan Terkirim!',
      'contact.statusInvalid': 'Mohon isi semua kolom dengan benar.',
      'contact.statusSuccess': 'Terima kasih! Pesan Anda berhasil terkirim.',
      'contact.statusError': 'Terjadi kesalahan. Silakan coba lagi.',
      'footer.desc': 'IT Analyst & Mobile/Web Developer Enthusiast yang membuat pengalaman digital premium, cepat, dan berkesan.',
      'footer.quickLinks': 'Tautan Cepat', 'footer.connect': 'Mari Terhubung',
      'footer.copy': 'Dibuat dengan penuh semangat.'
    }
  };

  /* ---------- 2c. Project Details ---------- */
  const GITHUB_PROFILE = 'https://github.com/arfanaysel12-web';

  const projectDetails = {
    supermarket: {
      image: 'assets/img/project-supermarket.svg',
      alt: { en: 'Supermarket web application preview', id: 'Pratinjau aplikasi web supermarket' },
      status: 'live',
      name: { en: 'Supermarket Web Application', id: 'Aplikasi Web Supermarket' },
      overview: {
        en: 'A web application for online grocery shopping that I built as a school project to practise developing a complete web application — from the interface all the way to the data. The live version is published on GitHub Pages.',
        id: 'Aplikasi web untuk belanja groceries online yang saya buat sebagai tugas sekolah untuk mempraktikkan pembangunan aplikasi web secara utuh — dari antarmuka sampai ke datanya. Versi live dipublikasikan di GitHub Pages.'
      },
      features: {
        en: [
          'Login, register and change password for user accounts',
          'Supermarket selection: Indomaret, Super Indo, Alfamart, Alfamidi, Hypermart and Hari Hari',
          'Product catalogue and shopping cart',
          'Shopping receipt (struk belanja) that can be printed or saved as PDF',
          'Checkout flow with QRIS payment',
          'Special promo banner that can be dismissed'
        ],
        id: [
          'Login, daftar, dan ubah password untuk akun pengguna',
          'Pemilihan supermarket: Indomaret, Super Indo, Alfamart, Alfamidi, Hypermart, dan Hari Hari',
          'Katalog produk dan keranjang belanja',
          'Struk belanja yang bisa dicetak atau disimpan sebagai PDF',
          'Alur checkout dengan pembayaran QRIS',
          'Banner promo khusus yang bisa ditutup'
        ]
      },
      tech: ['HTML', 'CSS', 'PHP', 'MySQL'],
      process: {
        en: 'I mapped the flow first — login, choose a supermarket, browse products, add to cart, checkout — and then built it screen by screen, connecting each form to the database and re-testing the whole flow in the browser after every step.',
        id: 'Saya memetakan alurnya lebih dulu — login, pilih supermarket, telusuri produk, tambah ke keranjang, checkout — lalu membangunnya layar demi layar, menghubungkan setiap form ke database, dan menguji ulang seluruh alurnya di browser setiap selesai satu tahap.'
      },
      challenges: {
        en: 'Keeping the login state, the cart data and the receipt consistent across pages, and making the layout still usable on a small screen.',
        id: 'Menjaga kondisi login, data keranjang, dan struk tetap konsisten antar halaman, serta membuat tampilannya tetap enak dipakai di layar kecil.'
      },
      learned: {
        en: 'How data flows from an HTML form into PHP and into MySQL, and how to organise a project so it stays easy to debug.',
        id: 'Bagaimana alur data dari form HTML masuk ke PHP lalu disimpan di MySQL, dan cara menata proyek agar mudah di-debug.'
      },
      github: GITHUB_PROFILE + '/Supermarket',
      demo: 'https://arfanaysel12-web.github.io/Supermarket/'
    },
    quizverse: {
      image: 'assets/img/project-quizverse.svg',
      alt: { en: 'QuizVerse interactive quiz preview', id: 'Pratinjau aplikasi kuis QuizVerse' },
      status: 'live',
      name: { en: 'QuizVerse — Interactive Quiz', id: 'QuizVerse — Kuis Interaktif' },
      overview: {
        en: 'QuizVerse is an interactive quiz app I built with Dart and Flutter, then compiled to Flutter Web so anyone can play it in a browser without installing anything.',
        id: 'QuizVerse adalah aplikasi kuis interaktif yang saya bangun dengan Dart dan Flutter, lalu dikompilasi menjadi Flutter Web sehingga bisa dimainkan langsung dari browser tanpa instalasi.'
      },
      features: {
        en: [
          'Questions presented one at a time',
          'Live scoring while playing',
          'Timed questions',
          'Game-like, animated quiz experience',
          'Published as a Flutter Web build on GitHub Pages'
        ],
        id: [
          'Soal ditampilkan satu per satu',
          'Skor dihitung langsung saat bermain',
          'Soal dengan batas waktu',
          'Pengalaman kuis yang terasa seperti permainan',
          'Diterbitkan sebagai Flutter Web di GitHub Pages'
        ]
      },
      tech: ['Dart', 'Flutter'],
      process: {
        en: 'I designed the question flow and the screens first, then wrote the quiz logic in Dart, and finally built the project for the web so the demo runs in a browser.',
        id: 'Saya merancang alur soal dan tampilannya terlebih dahulu, menulis logika kuis dalam Dart, lalu membangun proyek untuk web agar demo bisa jalan di browser.'
      },
      challenges: {
        en: 'Structuring the quiz state so the timer, answer checking and score stay in sync, and keeping the Flutter web build loading smoothly.',
        id: 'Menyusun state kuis agar timer, pengecekan jawaban, dan skor tetap sinkron, serta menjaga build Flutter Web tetap ringan saat dimuat.'
      },
      learned: {
        en: 'The basics of state management in Flutter, and how a single Dart codebase can target both mobile and web.',
        id: 'Dasar-dasar state management di Flutter, dan bagaimana satu basis kode Dart bisa dipakai untuk mobile sekaligus web.'
      },
      github: GITHUB_PROFILE + '/kuis_interaktif',
      demo: 'https://arfanaysel12-web.github.io/kuis_interaktif/'
    },
    portfolio: {
      image: 'assets/img/project-portfolio.svg',
      alt: { en: 'Personal portfolio website preview', id: 'Pratinjau website personal portfolio' },
      status: 'live',
      name: { en: 'Personal Portfolio', id: 'Personal Portfolio' },
      overview: {
        en: 'My personal portfolio — the website you are reading right now. A single-page portfolio built with plain HTML, CSS and JavaScript without any framework, published on GitHub Pages.',
        id: 'Portofolio pribadi saya — website yang sedang Anda baca sekarang. Dibangun satu halaman dengan HTML, CSS, dan JavaScript tanpa framework, lalu diterbitkan di GitHub Pages.'
      },
      features: {
        en: [
          'Single-page layout with smooth scrolling between sections',
          'Dark and light mode with the preference saved in the browser',
          'Typing text animation, animated counters and scroll reveal',
          'Bilingual content (English / Indonesian) with a language toggle',
          'Project cards that open a full project detail view',
          'Working contact form',
          'Responsive layout for desktop, laptop, tablet and mobile'
        ],
        id: [
          'Tata letak satu halaman dengan smooth scrolling antar section',
          'Mode gelap dan terang dengan preferensi tersimpan di browser',
          'Animasi typing text, angka animasi, dan scroll reveal',
          'Konten dua bahasa (Inggris / Indonesia) dengan tombol ganti bahasa',
          'Kartu proyek yang dapat dibuka menjadi tampilan detail lengkap',
          'Form kontak yang berfungsi',
          'Tata letak responsif untuk desktop, laptop, tablet, dan mobile'
        ]
      },
      tech: ['HTML', 'CSS', 'JavaScript'],
      process: {
        en: 'I built it section by section — hero, about, skills, projects, experience, contact — then added the interactive parts (theme toggle, typing effect, scroll reveal, project detail view) and finally tidied the CSS and tested it on several screen sizes.',
        id: 'Saya membangunnya section demi section — hero, about, skills, projects, experience, contact — lalu menambahkan bagian interaktifnya (tema, efek typing, scroll reveal, detail proyek), dan terakhir merapikan CSS serta mengujinya di beberapa ukuran layar.'
      },
      challenges: {
        en: 'Keeping the animations smooth on mobile devices, and organising the CSS so new sections could be added without breaking the existing ones.',
        id: 'Menjaga animasi tetap halus di perangkat mobile, serta menata CSS agar section baru bisa ditambahkan tanpa merusak section yang sudah ada.'
      },
      learned: {
        en: 'A lot about responsive layout, DOM manipulation, localStorage, and structuring a real project so it stays easy to maintain.',
        id: 'Banyak hal tentang layout responsif, manipulasi DOM, localStorage, dan cara menata proyek nyata agar tetap mudah dirawat.'
      },
      github: GITHUB_PROFILE + '/Portofolio',
      demo: 'https://arfanaysel12-web.github.io/Portofolio/'
    },
    kasir: {
      image: 'assets/img/project-kasir.svg',
      alt: { en: 'KasirCerdas point of sale preview', id: 'Pratinjau aplikasi kasir KasirCerdas' },
      status: 'dev',
      name: { en: 'KasirCerdas', id: 'KasirCerdas' },
      overview: {
        en: 'KasirCerdas is a point of sale (cashier) application I am building to learn how a transaction actually works in practice — from entering items to storing them in a database. This project is still in development.',
        id: 'KasirCerdas adalah aplikasi kasir (point of sale) yang saya bangun untuk memahami bagaimana sebuah transaksi bekerja secara praktis — dari 입력 barang hingga menyimpannya ke database. Proyek ini masih dalam pengembangan.'
      },
      features: {
        en: [
          'Modular PHP folder structure: api, config, includes and pages',
          'MySQL database schema stored as database.sql',
          'Product and transaction data processing in PHP',
          'A Flutter version of the application is also being developed'
        ],
        id: [
          'Struktur folder PHP yang modular: api, config, includes, dan pages',
          'Skema basis data MySQL yang tersimpan pada database.sql',
          'Pemrosesan data produk dan transaksi dengan PHP',
          'Versi aplikasi dengan Flutter juga sedang dikembangkan'
        ]
      },
      tech: ['PHP', 'MySQL'],
      process: {
        en: 'I designed the database tables first, then split the code into api, config, includes and pages folders so each part of the application stays separated and easy to maintain.',
        id: 'Saya merancang tabel basis data terlebih dahulu, lalu memecah kodenya ke folder api, config, includes, dan pages agar setiap bagian aplikasi tetap terpisah dan mudah dirawat.'
      },
      challenges: {
        en: 'Keeping product, cart and transaction data consistent, and structuring the code so it does not turn into one long file.',
        id: 'Menjaga konsistensi data produk, keranjang, dan transaksi, serta menata kode agar tidak menjadi satu file yang panjang.'
      },
      learned: {
        en: 'How to design a relational database for a real transaction flow, and how to split PHP code into reusable parts.',
        id: 'Cara merancang basis data relasional untuk alur transaksi nyata, dan cara memecah kode PHP menjadi bagian yang bisa dipakai ulang.'
      },
      github: GITHUB_PROFILE + '/Kasir-Pintar',
      demo: null
    },
    absensi: {
      image: 'assets/img/project-absensi.svg',
      alt: { en: 'Digital attendance application preview', id: 'Pratinjau aplikasi absensi digital' },
      status: 'dev',
      name: { en: 'Digital Attendance', id: 'Digital Attendance' },
      overview: {
        en: 'A digital attendance application (Absensi) built with Flutter and Dart, targeting Android, iOS and web from a single codebase, with a backend folder prepared to store the attendance data. Still in development.',
        id: 'Aplikasi absensi digital (Absensi) yang dibangun dengan Flutter dan Dart, menyasar Android, iOS, dan web dari satu basis kode, dengan folder backend yang disiapkan untuk menyimpan data absensi. Masih dalam pengembangan.'
      },
      features: {
        en: [
          'Single Flutter codebase that targets Android, iOS and web',
          'Backend folder prepared to store attendance data',
          'Mobile-friendly interface built with standard Flutter widgets'
        ],
        id: [
          'Satu basis kode Flutter untuk Android, iOS, dan web',
          'Folder backend yang disiapkan untuk menyimpan data absensi',
          'Antarmuka ramah mobile yang dibangun dengan widget Flutter standar'
        ]
      },
      tech: ['Dart', 'Flutter'],
      process: {
        en: 'I set up the Flutter project, planned how the app will talk to its backend, and am building the screens one by one.',
        id: 'Saya menyiapkan proyek Flutter, merencanakan cara aplikasi berkomunikasi dengan backend-nya, lalu membangun layarnya satu per satu.'
      },
      challenges: {
        en: 'Connecting the app to its backend and structuring the data so attendance records are stored correctly.',
        id: 'Menghubungkan aplikasi dengan backend-nya dan menata data agar catatan absensi tersimpan dengan benar.'
      },
      learned: {
        en: 'How a Flutter project is structured, and how to prepare an application to talk to a backend.',
        id: 'Bagaimana struktur sebuah proyek Flutter, dan cara menyiapkan aplikasi agar terhubung dengan backend.'
      },
      github: GITHUB_PROFILE + '/Absensi',
      demo: null
    },
    autoparts: {
      image: 'assets/img/project-autoparts.svg',
      alt: { en: 'Automotive sparepart website preview', id: 'Pratinjau website suku cadang otomotif' },
      status: 'dev',
      name: { en: 'Automotive Sparepart Website', id: 'Website Suku Cadang Otomotif' },
      overview: {
        en: 'A website for an automotive sparepart store, used as a practice project for building a product catalogue with category browsing on Bootstrap, PHP and MySQL. Still in development.',
        id: 'Website toko suku cadang otomotif yang dipakai sebagai proyek latihan untuk membangun katalog produk dengan penelusuran kategori menggunakan Bootstrap, PHP, dan MySQL. Masih dalam pengembangan.'
      },
      features: {
        en: [
          'Product catalogue for spareparts',
          'Category browsing to find parts faster',
          'Product data managed with PHP and MySQL',
          'Bootstrap grid for a consistent responsive layout'
        ],
        id: [
          'Katalog produk suku cadang',
          'Penelusuran kategori agar suku cadang lebih mudah dicari',
          'Data produk dikelola dengan PHP dan MySQL',
          'Grid Bootstrap untuk tata letak responsif yang konsisten'
        ]
      },
      tech: ['Bootstrap', 'PHP', 'MySQL'],
      process: {
        en: 'I started from the product list and the categories, built the listing and detail pages, then connected both to MySQL.',
        id: 'Saya mulai dari daftar produk dan kategorinya, membangun halaman daftar dan halaman detail, lalu menghubungkan keduanya ke MySQL.'
      },
      challenges: {
        en: 'Displaying a long product list in a way that stays readable and still loads fast on mobile.',
        id: 'Menampilkan daftar produk yang panjang agar tetap terbaca dan tetap cepat dimuat di perangkat mobile.'
      },
      learned: {
        en: 'Using the Bootstrap grid to build a responsive layout quickly, and organising product data in a database.',
        id: 'Menggunakan grid Bootstrap untuk membangun layout responsif dengan cepat, serta menata data produk di dalam database.'
      },
      github: null,
      demo: null
    },
    school: {
      image: 'assets/img/project-school.svg',
      alt: { en: 'School management website preview', id: 'Pratinjau website manajemen sekolah' },
      status: 'dev',
      name: { en: 'School Management Website', id: 'Website Manajemen Sekolah' },
      overview: {
        en: 'A school administration website to manage student, teacher and class data. A practice project for learning CRUD operations in PHP with a MySQL database. Still in development.',
        id: 'Website administrasi sekolah untuk mengelola data siswa, guru, dan kelas. Proyek latihan untuk mempelajari operasi CRUD di PHP dengan database MySQL. Masih dalam pengembangan.'
      },
      features: {
        en: [
          'CRUD operations for student, teacher and class data',
          'Simple dashboard to review the stored data',
          'PHP as the backend and MySQL as the database',
          'Separate management page for each data type'
        ],
        id: [
          'Operasi CRUD untuk data siswa, guru, dan kelas',
          'Dashboard sederhana untuk meninjau data yang tersimpan',
          'PHP sebagai backend dan MySQL sebagai database',
          'Halaman manajemen terpisah untuk setiap jenis data'
        ]
      },
      tech: ['HTML', 'CSS', 'PHP', 'MySQL'],
      process: {
        en: 'I listed the data that needed to be managed, created the database tables, then built one management page at a time: create, read, update, delete.',
        id: 'Saya Susun data yang perlu dikelola, membuat tabel database, lalu membangun halaman manajemen satu per satu: create, read, update, delete.'
      },
      challenges: {
        en: 'Keeping related data (class, teacher, student) consistent and validating input before saving anything to the database.',
        id: 'Menjaga konsistensi data yang saling terkait (kelas, guru, siswa) dan memvalidasi input sebelum disimpan ke database.'
      },
      learned: {
        en: 'How CRUD works in practice, and how to design a database that reflects real school data.',
        id: 'Cara kerja CRUD secara praktis, dan cara merancang database yang mencerminkan data sekolah sebenarnya.'
      },
      github: null,
      demo: null
    }
  };

  let currentLang = localStorage.getItem('arfan-lang') || (navigator.language && navigator.language.toLowerCase().startsWith('id') ? 'id' : 'en');
  if (!translations[currentLang]) currentLang = 'en';
  let currentRoles = translations[currentLang]['hero.roles'];

  const langToggle = document.getElementById('langToggle');

  function applyLanguage(lang) {
    const dict = translations[lang];
    if (!dict) return;
    currentLang = lang;
    currentRoles = dict['hero.roles'];
    document.documentElement.setAttribute('lang', lang === 'id' ? 'id' : 'en');

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-aria');
      if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
    });

    if (langToggle) {
      const target = lang === 'en' ? 'ID' : 'EN';
      langToggle.textContent = target;
    }

    if (typedEl) typedEl.textContent = currentRoles[0];
    localStorage.setItem('arfan-lang', lang);
    if (activeProject) fillProjectModal(activeProject);
  }

  if (langToggle) {
    langToggle.addEventListener('click', function () {
      applyLanguage(currentLang === 'en' ? 'id' : 'en');
    });
  }

  /* ---------- 3. Scroll Progress Bar ---------- */
  const progressBar = document.getElementById('scrollProgress');
  function updateProgress() {
    if (!progressBar) return;
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const pct = scrollable > 0 ? window.scrollY / scrollable : 0;
    progressBar.style.transform = 'scaleX(' + pct + ')';
  }

  /* ---------- 4. Navbar scroll state ---------- */
  const navbar = document.getElementById('navbar');
  function updateNavbar() {
    if (!navbar) return;
    if (window.scrollY > 30) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  }

  /* ---------- 5. Back to top ---------- */
  const backToTop = document.getElementById('backToTop');
  function updateBackToTop() {
    if (!backToTop) return;
    if (window.scrollY > 500) backToTop.classList.add('show');
    else backToTop.classList.remove('show');
  }

  function onScroll() {
    updateProgress();
    updateNavbar();
    updateBackToTop();
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- 6. Mobile menu ---------- */
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  function setMenu(open) {
    if (!navMenu || !menuToggle) return;
    navMenu.classList.toggle('open', open);
    menuToggle.classList.toggle('open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  }

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function () {
      setMenu(!navMenu.classList.contains('open'));
    });

    navMenu.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () { setMenu(false); });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setMenu(false);
    });
  }

  /* ---------- 7. Theme toggle ---------- */
  const themeToggle = document.getElementById('themeToggle');
  const root = document.documentElement;
  const storedTheme = localStorage.getItem('arfan-theme');

  if (storedTheme) root.setAttribute('data-theme', storedTheme);

  function applyTheme() {
    const isDark = root.getAttribute('data-theme') === 'dark';
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) metaTheme.setAttribute('content', isDark ? '#0B0B0B' : '#FFFFFF');
  }
  applyTheme();

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('arfan-theme', next);
      applyTheme();
    });
  }

  /* ---------- 8. Custom cursor ---------- */
  const dot = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');

  if (dot && ring && !isTouchDevice && !prefersReducedMotion) {
    document.body.classList.add('has-cursor');
    let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

    document.addEventListener('mousemove', function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = 'translate(' + mouseX + 'px, ' + mouseY + 'px) translate(-50%, -50%)';
    });

    (function animateRing() {
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;
      ring.style.transform = 'translate(' + ringX + 'px, ' + ringY + 'px) translate(-50%, -50%)';
      requestAnimationFrame(animateRing);
    })();

    const hoverTargets = 'a, button, .btn, .social-link, .chip, .tech-chip';
    document.addEventListener('mouseover', function (e) {
      if (e.target.closest(hoverTargets)) ring.classList.add('is-hovering');
    });
    document.addEventListener('mouseout', function (e) {
      if (e.target.closest(hoverTargets)) ring.classList.remove('is-hovering');
    });
  }

  /* ---------- 9. Typing effect ---------- */
  const typedEl = document.getElementById('typedText');

  if (typedEl && !prefersReducedMotion) {
    let roleIndex = 0, charIndex = 0, deleting = false;

    function type() {
      const word = currentRoles[roleIndex] || 'Web Developer';
      const speed = deleting ? 42 : 85;

      if (!deleting) {
        charIndex++;
        typedEl.textContent = word.slice(0, charIndex);
        if (charIndex === word.length) {
          deleting = true;
          window.setTimeout(type, 1800);
          return;
        }
      } else {
        charIndex--;
        typedEl.textContent = word.slice(0, charIndex);
        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % currentRoles.length;
        }
      }
      window.setTimeout(type, speed);
    }
    window.setTimeout(type, 900);
  } else if (typedEl) {
    typedEl.textContent = currentRoles[0];
  }

  /* ---------- 10. Scroll reveal ---------- */
  const revealEls = document.querySelectorAll('.reveal');

  function setStagger(group) {
    group.forEach(function (el, i) {
      el.style.setProperty('--reveal-delay', (i % 3) * 0.12 + 's');
    });
  }

  if ('IntersectionObserver' in window && !prefersReducedMotion) {
    const revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(function (el) { revealObserver.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('visible'); });
  }

  /* ---------- 11. Animated counters ---------- */
  const counters = document.querySelectorAll('.stat-number[data-count]');

  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-count'), 10);
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 1400;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  if ('IntersectionObserver' in window && !prefersReducedMotion) {
    const counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(function (el) { counterObserver.observe(el); });
  } else {
    counters.forEach(function (el) {
      el.textContent = el.getAttribute('data-count') + (el.getAttribute('data-suffix') || '');
    });
  }

  /* ---------- 12. Hero parallax ---------- */
  const parallaxEls = document.querySelectorAll('.parallax');

  if (!isTouchDevice && !prefersReducedMotion && parallaxEls.length) {
    const hero = document.getElementById('home');
    if (hero) {
      hero.addEventListener('mousemove', function (e) {
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;
        parallaxEls.forEach(function (el) {
          const strength = parseFloat(el.getAttribute('data-parallax')) || 0.05;
          el.style.transform = 'translate(' + (x * strength * 100) + 'px, ' + (y * strength * 100) + 'px)';
        });
      });
      hero.addEventListener('mouseleave', function () {
        parallaxEls.forEach(function (el) {
          el.style.transform = 'translate(0, 0)';
        });
      });
    }
  }

  /* ---------- 13. Active nav link on scroll ---------- */
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (link) {
          const match = link.getAttribute('href') === '#' + entry.target.id;
          link.classList.toggle('active', match);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    sections.forEach(function (section) { sectionObserver.observe(section); });
  }

  /* ---------- 14. Project detail modal ---------- */
  const modal = document.getElementById('projectModal');
  let activeProject = null;
  let lastFocusedEl = null;

  const modalImage = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalStatus = document.getElementById('modalStatus');
  const modalOverview = document.getElementById('modalOverview');
  const modalFeatures = document.getElementById('modalFeatures');
  const modalTech = document.getElementById('modalTech');
  const modalProcess = document.getElementById('modalProcess');
  const modalChallenges = document.getElementById('modalChallenges');
  const modalLearned = document.getElementById('modalLearned');
  const modalGithub = document.getElementById('modalGithub');
  const modalDemo = document.getElementById('modalDemo');

  function pick(obj) {
    return obj ? (currentLang === 'id' ? obj.id : obj.en) : '';
  }

  function fillProjectModal(id) {
    const project = projectDetails[id];
    if (!project || !modal) return;

    const lang = currentLang === 'id' ? 'id' : 'en';

    if (modalImage) {
      modalImage.src = project.image;
      modalImage.alt = pick(project.alt) || pick(project.name);
    }
    if (modalTitle) modalTitle.textContent = pick(project.name);
    if (modalStatus) {
      const isDev = project.status === 'dev';
      modalStatus.hidden = !isDev;
      if (isDev) {
        modalStatus.textContent = translations[lang]['projects.inDev'];
        modalStatus.setAttribute('data-i18n', 'projects.inDev');
      } else {
        modalStatus.removeAttribute('data-i18n');
      }
    }
    if (modalOverview) modalOverview.textContent = pick(project.overview);
    if (modalFeatures) {
      modalFeatures.innerHTML = '';
      (project.features[lang] || []).forEach(function (item) {
        const li = document.createElement('li');
        li.textContent = item;
        modalFeatures.appendChild(li);
      });
    }
    if (modalTech) {
      modalTech.innerHTML = '';
      project.tech.forEach(function (tech) {
        const span = document.createElement('span');
        span.className = 'tech-chip';
        span.textContent = tech;
        modalTech.appendChild(span);
      });
    }
    if (modalProcess) modalProcess.textContent = pick(project.process);
    if (modalChallenges) modalChallenges.textContent = pick(project.challenges);
    if (modalLearned) modalLearned.textContent = pick(project.learned);

    if (modalGithub) {
      if (project.github) {
        modalGithub.href = project.github;
        modalGithub.hidden = false;
      } else {
        modalGithub.hidden = true;
        modalGithub.removeAttribute('href');
      }
    }
    if (modalDemo) {
      if (project.demo) {
        modalDemo.href = project.demo;
        modalDemo.hidden = false;
      } else {
        modalDemo.hidden = true;
        modalDemo.removeAttribute('href');
      }
    }
  }

  function openProjectModal(id, trigger) {
    if (!modal || !projectDetails[id]) return;
    activeProject = id;
    lastFocusedEl = trigger || null;
    fillProjectModal(id);
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    const closeBtn = modal.querySelector('.modal-close');
    if (closeBtn) closeBtn.focus();
  }

  function closeProjectModal() {
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    activeProject = null;
    if (lastFocusedEl && typeof lastFocusedEl.focus === 'function') lastFocusedEl.focus();
    lastFocusedEl = null;
  }

  document.querySelectorAll('[data-project-open]').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      openProjectModal(btn.getAttribute('data-project-open'), btn);
    });
  });

  if (modal) {
    modal.querySelectorAll('[data-modal-close]').forEach(function (el) {
      el.addEventListener('click', closeProjectModal);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('open')) closeProjectModal();
    });
  }

  /* ---------- 15. Contact form ---------- */
  const form = document.getElementById('contactForm');
  const statusEl = form ? form.querySelector('.form-status') : null;

  function setFieldState(input, valid) {
    input.classList.toggle('invalid', !valid);
  }

  function validateField(input) {
    const value = input.value.trim();
    let valid = value.length > 0;
    if (valid && input.type === 'email') {
      valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }
    setFieldState(input, valid);
    return valid;
  }

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      let allValid = true;
      form.querySelectorAll('input, textarea').forEach(function (input) {
        if (!validateField(input)) allValid = false;
      });
      if (!allValid) {
        if (statusEl) {
          statusEl.textContent = translations[currentLang]['contact.statusInvalid'];
          statusEl.classList.add('error');
        }
        return;
      }

      const dict = translations[currentLang];
      const sendBtn = form.querySelector('.send-btn');

      const botcheck = form.querySelector('[name="botcheck"]');
      if (botcheck && botcheck.checked) return;

      const payload = new FormData();
      payload.append('access_key', WEB3FORMS_ACCESS_KEY);
      payload.append('name', form.querySelector('#formName').value.trim());
      payload.append('email', form.querySelector('#formEmail').value.trim());
      payload.append('subject', form.querySelector('#formSubject').value.trim());
      payload.append('message', form.querySelector('#formMessage').value.trim());
      payload.append('replyto', form.querySelector('#formEmail').value.trim());
      payload.append('from_name', 'Portfolio Arfan Aysel');

      sendBtn.classList.add('sending');
      sendBtn.disabled = true;
      if (statusEl) {
        statusEl.classList.remove('error');
        statusEl.textContent = '';
      }

      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: payload
      })
        .then(function (res) { return res.json(); })
        .then(function (data) {
          if (!data.success) throw new Error('web3forms error');
          sendBtn.classList.remove('sending');
          sendBtn.classList.add('sent');
          if (statusEl) statusEl.textContent = dict['contact.statusSuccess'];
          form.reset();
          window.setTimeout(function () {
            sendBtn.classList.remove('sent');
            sendBtn.disabled = false;
            window.setTimeout(function () {
              if (statusEl) statusEl.textContent = '';
            }, 6000);
          }, 3200);
        })
        .catch(function () {
          sendBtn.classList.remove('sending');
          sendBtn.disabled = false;
          if (statusEl) {
            statusEl.classList.add('error');
            statusEl.textContent = dict['contact.statusError'];
          }
        });
    });

    form.querySelectorAll('input, textarea').forEach(function (input) {
      input.addEventListener('blur', function () {
        if (input.value.trim() !== '') validateField(input);
      });
      input.addEventListener('input', function () {
        if (input.classList.contains('invalid')) validateField(input);
      });
    });
  }

  /* ---------- 15b. CV Download ---------- */
<<<<<<< HEAD
  var cvDropdown = document.querySelector('.cv-dropdown');
  var cvToggle = document.querySelector('.cv-dropdown-toggle');
  var cvPngBtn = document.querySelector('.cv-png-btn');
  var cvPdfBtn = document.querySelector('.cv-pdf-btn');
  var CV_IMG = 'assets/img/CV Arfan Aysel (Photo).png';
=======
  const cvDropdown = document.querySelector('.cv-dropdown');
  const cvToggle = document.querySelector('.cv-dropdown-toggle');
  const cvPngBtn = document.querySelector('.cv-png-btn');
  const cvPdfBtn = document.querySelector('.cv-pdf-btn');
  const CV_IMG = 'assets/img/CV Arfan Aysel (1).png';
>>>>>>> 1e1375f (Update portofolio terbaru)

  function closeDropdown() {
    if (cvDropdown) cvDropdown.classList.remove('open');
  }

  if (cvToggle && cvDropdown) {
    cvToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      cvDropdown.classList.toggle('open');
    });
    document.addEventListener('click', function (e) {
      if (!cvDropdown.contains(e.target)) closeDropdown();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeDropdown();
    });
  }

  if (cvPngBtn) {
    cvPngBtn.addEventListener('click', function (e) {
      e.preventDefault();
      closeDropdown();
<<<<<<< HEAD
      var link = document.createElement('a');
=======
      const link = document.createElement('a');
>>>>>>> 1e1375f (Update portofolio terbaru)
      link.href = CV_IMG;
      link.download = 'CV Arfan Aysel.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }

  if (cvPdfBtn) {
    cvPdfBtn.addEventListener('click', function () {
      closeDropdown();
<<<<<<< HEAD
      var img = new Image();
=======
      const img = new Image();
>>>>>>> 1e1375f (Update portofolio terbaru)
      img.onload = function () {
        if (typeof window.jspdf === 'undefined') {
          alert('jsPDF belum siap. Silakan muat ulang halaman.');
          return;
        }
<<<<<<< HEAD
        var jsPDF = window.jspdf.jsPDF;
        var w = img.naturalWidth;
        var h = img.naturalHeight;
        var orientation = w > h ? 'l' : 'p';
        var pdf = new jsPDF(orientation, 'px', [w, h]);
=======
        const jsPDF = window.jspdf.jsPDF;
        const w = img.naturalWidth;
        const h = img.naturalHeight;
        const orientation = w > h ? 'l' : 'p';
        const pdf = new jsPDF(orientation, 'px', [w, h]);
>>>>>>> 1e1375f (Update portofolio terbaru)
        pdf.addImage(img, 'PNG', 0, 0, w, h);
        pdf.save('CV Arfan Aysel.pdf');
      };
      img.onerror = function () {
        alert('Gagal memuat gambar CV.');
      };
      img.src = CV_IMG;
    });
  }

  /* ---------- 16. Init ---------- */
  applyLanguage(currentLang);
  onScroll();
  setStagger(document.querySelectorAll('.projects-grid .project-card'));
  setStagger(document.querySelectorAll('.certs-grid .cert-card'));
  setStagger(document.querySelectorAll('.learning-grid .learning-card'));
  setStagger(document.querySelectorAll('.journey-grid .journey-card'));
  setStagger(document.querySelectorAll('.achieve-grid .achieve-card'));
  setStagger(document.querySelectorAll('.skill-group'));
})();
