import { useState } from 'react'

const essays = [
  {
    id: 1,
    title: 'Leadership',
    subtitle: 'Batu 2022/2023 — Conflict, Win-Win, and "Act Like It\'s Yours"',
    wordLimit: '100–300 words',
    wordCount: '~280',
    target: {
      question: 'Describe a time when you demonstrated leadership.',
      whatTheyTest: 'Situations where you changed the direction of something beyond your formal authority.',
      mustInclude: [
        'What was the context or challenge you faced?',
        'What specific actions did you take as a leader?',
        'What was the outcome, and what did you learn?',
      ],
      scoring: 'Evidence of influence, not just management. One strong specific example > three vague claims.',
    },
    content: `In 2023, I was brought in as a sub-contractor to build a management application for a government vehicle testing unit in Batu, East Java. The main contractor — the firm that held the primary agreement with the client — was responsible for delivering the overall system. My scope was two specific features. Two months into the project, the main contractor told the client I had promised to deliver eight features. I was suddenly facing a client who believed I had broken my word, and a contractor who was shifting the blame onto me.

I did not panic. I showed the client our original agreement — the exact scope, the exact features. Then I confronted the main contractor, not with anger, but with clarity: "We agreed on two. I will deliver two. If you want more, we renegotiate." I made it clear I would not accept being blamed for promises I never made.

The outcome surprised everyone. The main contractor, recognizing I had held my ground professionally, offered me the main contractor role for the following year. I accepted — and delivered the project on time, within scope, and with zero critical bugs. More importantly, I never spoke negatively about the main contractor to the client. Today, we still collaborate regularly. He contacts me for advice on other projects, and I do the same. That relationship was built not on convenience, but on trust earned through conflict handled with integrity.

This is not an isolated incident. At Estro Hutama, my own company, I have delivered three to five custom projects every year since 2014 — each treated as if it were my own business. At Diginergy, where I serve as project manager for German clients, I have learned to shield my team from external pressure: "Blame me, not them." I also practice what I call "confrontasi cantik" — pushing back on unrealistic expectations from management or clients without making anyone feel defeated. My CEO now reaches out to me as a brainstorming partner before major pitches. One client from Diginergy has become a private supporter of my side project — an AI chatbot that mimics 80 percent of human responses — and has committed to implementing it across three of his businesses.

My leadership principle is simple: act like every project is yours.`,
    structure: [
      { section: 'Hook', words: '~30', content: '2023 Batu: sub-contractor, main contractor blamed me for promises I never made' },
      { section: 'Action', words: '~50', content: 'Showed original agreement; confronted with clarity, not anger; held ground professionally' },
      { section: 'Result', words: '~40', content: 'Became main contractor next year; delivered on time; still collaborate today' },
      { section: 'Pattern — Estro Hutama', words: '~30', content: '3-5 projects/year since 2014; each treated as own business' },
      { section: 'Pattern — Diginergy', words: '~60', content: 'Shield team ("blame me"); confrontasi cantik; CEO brainstorming partner; client supports side project' },
      { section: 'Principle', words: '~20', content: '"Act like every project is yours" — responsibility, not authority' },
    ],
    strengths: [
      'Recent example (2023, not 2017)',
      'Conflict handled with integrity → win-win outcome',
      'Ongoing relationship proves genuine trust',
      'Multi-project pattern (Estro + Diginergy) shows consistency',
      '"Confrontasi cantik" — memorable, culturally resonant phrase',
      'CEO as brainstorming partner = trusted advisor status',
    ],
    todos: [
      'Decide whether to name main contractor or keep generic',
      'Verify client names for Diginergy side project',
      'Check word count stays ≤ 300',
      'Ensure no overlap with Essay 2 (Networking)',
    ],
    whySuperior: [
      { aspect: 'Recency', detail: '2022/2023 — bukan 9 tahun lalu, tapi baru 1-2 tahun' },
      { aspect: 'Conflict jelas', detail: 'Dikhianati → defend → win-win → still friends' },
      { aspect: 'Pattern bukan insiden', detail: 'Estro Hutama (3-5/tahun) + Diginergy (CEO + client)' },
      { aspect: '"Confrontasi cantik"', detail: 'Push back tanpa membuat pihak lain kalah — unique phrase' },
      { aspect: 'Trusted advisor', detail: 'CEO brainstorming partner + client private support' },
      { aspect: '"Act like it\'s yours"', detail: 'Prinsip yang applicable ke semua context' },
    ],
    kerangka: [
      { section: 'P1 — Hook', words: '~30', content: '2023 Batu: sub-contractor, main contractor blamed saya' },
      { section: 'P2 — Action', words: '~50', content: 'Tunjukkan bukti; confront dengan jelas; hold ground' },
      { section: 'P3 — Result', words: '~40', content: 'Jadi main contractor; deliver on time; masih collaborate' },
      { section: 'P4 — Pattern', words: '~90', content: 'Estro Hutama (3-5/tahun) + Diginergy (shield team + CEO + client)' },
      { section: 'P5 — Principle', words: '~20', content: '"Act like every project is yours"' },
    ],
    contentId: `Pada tahun 2023, saya ditunjuk sebagai sub-contractor untuk membangun aplikasi manajemen di unit pengujian kendaraan pemerintah di Kota Batu, Jawa Timur. Main contractor — perusahaan yang memegang perjanjian utama dengan klien — bertanggung jawab mengirimkan keseluruhan sistem. Cakupan saya adalah dua fitur spesifik. Dua bulan ke dalam proyek, main contractor memberitahu klien bahwa saya berjanji meng-deliver delapan fitur. Saya tiba-tiba menghadapi klien yang percaya saya telah melanggar janji, dan kontraktor yang mengalihkan kesalahan kepada saya.

Saya tidak panik. Saya tunjukkan perjanjian asli kita — cakupan tepat, fitur tepat. Lalu saya konfrontasi main contractor, bukan dengan kemarahan, tapi dengan kejelasan: "Kita sepakat dua. Saya akan deliver dua. Kalau Anda mau lebih, kita negosiasi ulang." Saya tegaskan saya tidak akan menerima kesalahan untuk janji yang tidak pernah saya buat.

Hasilnya mengejutkan semua orang. Main contractor, menyadari saya telah memegang pendirian secara profesional, menawarkan saya peran main contractor tahun berikutnya. Saya terima — dan meng-deliver proyek tepat waktu, sesuai cakupan, dan dengan nol bug kritis. Lebih penting lagi, saya tidak pernah berbicara negatif tentang main contractor kepada klien. Hari ini, kami masih berkolaborasi secara rutin. Dia menghubungi saya untuk saran proyek lain, dan saya melakukan hal yang sama. Hubungan itu dibangun bukan atas kenyamanan, tapi kepercayaan yang diperoleh melalui konflik yang ditangani dengan integritas.

Ini bukan kejadian terisolasi. Di Estro Hutama, perusahaan saya sendiri, saya telah meng-deliver tiga hingga lima proyek khusus setiap tahun sejak 2014 — masing-masing diperlakukan seolah-olah itu bisnis saya sendiri. Di Diginergy, di mana saya menjabat sebagai manajer proyek untuk klien Jerman, saya telah belajar melindungi tim saya dari tekanan eksternal: "Salahkan saya, bukan mereka." Saya juga mempraktikkan apa yang saya sebut "confrontasi cantik" — menolak ekspektasi yang tidak realistis dari manajemen atau klien tanpa membuat siapa pun merasa kalah. CEO saya sekarang menghubungi saya sebagai mitra brainstorming sebelum pitch besar. Salah satu klien dari Diginergy telah menjadi pendukung pribadi proyek sampingan saya — chatbot AI yang meniru 80 persen respons manusia — dan telah berkomitmen mengimplementasikannya di tiga bisnisnya.

Prinsip kepemimpinan saya sederhana: perlakukan setiap proyek seperti milik Anda sendiri.`,
  },
  {
    id: 2,
    title: 'Networking',
    subtitle: 'From Batu Conflict to Industry-Wide Trust Network',
    wordLimit: '100–300 words',
    wordCount: '~270',
    target: {
      question: 'Tell us about a professional relationship/network you have built and maintained.',
      whatTheyTest: 'Evidence of building, maintaining, and benefiting from professional relationships — not just "being collaborative."',
      mustInclude: [
        'How was the relationship formed, and what made it important?',
        'What did you contribute, and what did you gain?',
        'How have you sustained or developed this relationship over time?',
        'How will these skills help you build connections within Chevening?',
      ],
      scoring: 'Name specific people/organizations you connected. Describe what the network produced. Reference Chevening alumni initiatives.',
    },
    content: `[DRAFT — aligned with Essay 1: Batu 2022/2023 + Diginergy]

The most important professional relationship I have built started with a conflict. In 2023, the main contractor on a Batu government project tried to shift blame onto me for promises I never made. I held my ground professionally — showed the evidence, refused to accept false responsibility, and proposed a fair renegotiation. The result was not a victory over him. It was a partnership. He offered me the main contractor role the following year, and today we collaborate regularly. He still contacts me for advice on other projects, and I do the same.

That relationship taught me the principle I apply everywhere: build trust through integrity, not convenience. I do not speak negatively about partners to clients. I do not take their work when opportunities arise. Instead, I share knowledge freely — automation insights, regulatory updates, project lessons learned. This reciprocity has grown my network organically. I now know nearly every major vendor operating in Dishub units across Indonesia. These are not contacts in a CRM. They are partners who trust me because I have never compromised them.

At Diginergy, I apply the same principle with international clients. I maintain a personal knowledge log for each German client — tracking their technical preferences, communication style, and business milestones. When relevant industry articles or introductions emerge, I share them without being asked. One client has become a private supporter of my AI chatbot side project, committing to implement it across three of his businesses — a relationship that began with a simple technical recommendation I sent unsolicited.

This is how I will approach the Chevening network. During my year in the UK, I plan to connect with Indonesian alumni working in government and manufacturing — relationships I can activate when I return as a dosen. On returning to Surabaya, I will sustain these connections by sharing teaching resources and co-organizing workshops that bridge industry and academia.`,
    structure: [
      { section: 'Formation', words: '~55', content: 'Batu 2023: conflict with main contractor → held ground → partnership' },
      { section: 'Principle', words: '~40', content: 'Trust through integrity; no negative talk; no taking their work' },
      { section: 'Industry Network', words: '~40', content: 'Know nearly every major vendor in Dishub across Indonesia' },
      { section: 'Diginergy', words: '~50', content: 'Personal knowledge log; unsolicited value; client supports side project' },
      { section: 'Chevening', words: '~45', content: 'Connect with alumni; teaching resources + workshops' },
    ],
    strengths: [
      'Direct continuation of Essay 1 (Batu conflict → partnership)',
      'Industry-wide network (all major Dishub vendors)',
      'Give-before-get shown through unsolicited value',
      'International client relationship (Diginergy)',
      'Concrete Chevening activation plan',
    ],
    todos: [
      'Decide whether to name main contractor',
      'Add specific example of "technical recommendation" shared',
      'Research Indonesian Chevening alumni initiatives → name one',
    ],
    whySuperior: [
      { aspect: 'Conflict → Trust', detail: 'Relationship formed through conflict, not convenience' },
      { aspect: 'Industry-wide network', detail: 'Know major vendor Dishub se-Indonesia' },
      { aspect: 'Give-before-get', detail: 'Unsolicited value → client supports side project' },
      { aspect: 'Cross-border', detail: 'Indonesia + Germany (Diginergy) = global network' },
      { aspect: 'Benang merah', detail: 'Lanjutan Essay 1 — Batu conflict + Diginergy pattern' },
    ],
    kerangka: [
      { section: 'P1 — Formation', words: '~55', content: 'Batu 2023: conflict → held ground → partnership' },
      { section: 'P2 — Principle', words: '~40', content: 'Trust through integrity; no negative talk' },
      { section: 'P3 — Industry Network', words: '~40', content: 'All major Dishub vendors se-Indonesia' },
      { section: 'P4 — Diginergy', words: '~50', content: 'Knowledge log; unsolicited value; client support' },
      { section: 'P5 — Chevening', words: '~45', content: 'Alumni connection; workshops' },
    ],
    contentId: `Hubungan profesional paling penting yang saya bangun dimulai dari sebuah konflik. Pada tahun 2023, main contractor pada proyek pemerintah di Batu mencoba mengalihkan kesalahan kepada saya untuk janji yang tidak pernah saya buat. Saya memegang pendirian secara profesional — menunjukkan bukti, menolak menerima tanggung jawab palsu, dan mengusulkan negosiasi ulang yang adil. Hasilnya bukan kemenangan atas dia. Itu adalah kemitraan. Dia menawarkan saya peran main contractor tahun berikutnya, dan hari ini kami berkolaborasi secara rutin. Dia masih menghubungi saya untuk saran proyek lain, dan saya melakukan hal yang sama.

Hubungan itu mengajarkan saya prinsip yang saya terapkan di mana-mana: bangun kepercayaan melalui integritas, bukan kenyamanan. Saya tidak berbicara negatif tentang mitra kepada klien. Saya tidak mengambil pekerjaan mereka ketika ada peluang. Sebaliknya, saya berbagi pengetahuan secara bebas — wawasan automasi, pembaruan regulasi, pelajaran proyek. Reciprocitas ini telah menumbuhkan jaringan saya secara organik. Saya sekarang mengenal hampir semua vendor utama yang beroperasi di unit Dishub di seluruh Indonesia. Ini bukan kontak di CRM. Mereka adalah mitra yang mempercayai saya karena saya tidak pernah mengorbankan mereka.

Di Diginergy, saya menerapkan prinsip yang sama dengan klien internasional. Saya memelihara log pengetahuan pribadi untuk setiap klien Jerman — melacak preferensi teknis, gaya komunikasi, dan tonggak bisnis mereka. Ketika artikel industri atau pengenalan yang relevan muncul, saya membagikannya tanpa diminta. Salah satu klien telah menjadi pendukung pribadi proyek sampingan chatbot AI saya, berkomitmen mengimplementasikannya di tiga bisnisnya — hubungan yang dimulai dengan rekomendasi teknis sederhana yang saya kirimkan tanpa diminta.

Inilah pendekatan yang akan saya ambil terhadap jaringan Chevening. Selama tahun di Inggris, saya berencana untuk terhubung dengan alumni Indonesia yang bekerja di pemerintahan dan manufaktur — hubungan yang dapat saya aktifkan ketika saya kembali sebagai dosen. Kembali ke Surabaya, saya akan mempertahankan hubungan ini dengan berbagi sumber daya mengajar dan mengorganisir workshop yang menjembatani industri dan akademik.`,
  },
  {
    id: 3,
    title: 'Course Choice',
    subtitle: 'Glasgow MSc Mechatronics — Formalizing Self-Taught Expertise',
    wordLimit: '100–300 words',
    wordCount: '~270',
    target: {
      question: 'Explain your first choice of course and university only.',
      whatTheyTest: 'How your chosen course connects to UK priority areas and your career goals.',
      mustInclude: [
        'What is the specific priority area you wish to address?',
        'How will your chosen course equip you to address this theme in your home country?',
        'Why have you selected your particular university in the UK?',
        'How do you plan to immediately apply the knowledge after studies?',
      ],
      scoring: 'Name specific professors, modules, research. Explain why you cannot get this training at home. UK priority areas: Growth & Prosperity, Climate Resilience, Security & Stability, Inclusive Societies.',
    },
    content: `[DRAFT — aligned with Essay 1: Batu 2022/2023 + Diginergy]

UK Priority Area: Promoting Growth and Prosperity

I have delivered custom automation projects for government agencies and manufacturers since 2014 — including a 2023 Batu government project where I took over as main contractor and delivered on time with zero critical bugs. But every one of these projects was built on self-taught knowledge: trial and error, online research, and late nights debugging code I did not fully understand structurally. I can build systems that work. I cannot yet explain WHY they work at the level required to teach others. That gap is why I need the MSc Mechatronics at the University of Glasgow.

Glasgow's programme addresses three specific gaps in my current expertise. First, its control systems module will formalize the automation logic I currently apply intuitively — knowledge I need if I am to teach engineering students who deserve structured understanding, not just practical shortcuts. Second, the robotics and embedded computing curriculum will deepen the technical foundation I use daily at Diginergy, where I manage cross-border projects for German clients. Third, Glasgow's project-based learning approach matches how I already work: solving real problems, not writing theoretical papers.

On returning to Surabaya, I will integrate Glasgow's modules into my teaching at an engineering faculty, replacing outdated PLC-centric curricula with IoT and Industry 4.0 content drawn from my Dishub and Diginergy experience. I will also establish a small automation laboratory where students work on real challenges from government agencies — the same agencies I have served for a decade. This directly contributes to the UK's growth-and-prosperity agenda: strengthening Indonesia's industrial workforce by training engineers who can close the automation gap I have seen firsthand.`,
    structure: [
      { section: 'Gap', words: '~50', content: 'Self-taught since 2014; can build but cannot teach structurally' },
      { section: 'Why Glasgow', words: '~60', content: 'Control systems + robotics + project-based learning' },
      { section: 'Why This University', words: '~40', content: 'Matches how I work; project-based, not theoretical' },
      { section: 'Implementation', words: '~60', content: 'Curriculum integration; automation lab; real government challenges' },
    ],
    strengths: [
      'Honest about self-taught limitation → shows growth mindset',
      'Specific modules referenced (control systems, robotics, embedded)',
      'Connected to Essay 1 (Batu) and Diginergy experience',
      'Immediate implementation plan (curriculum + lab)',
      'UK priority area clearly connected',
    ],
    todos: [
      'Research specific Glasgow professors and their research',
      'Name specific modules from the curriculum',
      'Add why you cannot get this training at Indonesian universities',
    ],
    whySuperior: [
      { aspect: 'Honest gap', detail: 'Self-taught ≠ teachable — shows self-awareness' },
      { aspect: 'Specific modules', detail: 'Control systems + robotics + embedded' },
      { aspect: 'Connected to Essay 1', detail: 'Batu + Diginergy = need formal training' },
      { aspect: 'Implementation', detail: 'Curriculum + lab + real challenges' },
      { aspect: 'UK priority', detail: 'Growth & Prosperity — strengthen Indonesia workforce' },
    ],
    kerangka: [
      { section: 'P1 — Gap', words: '~50', content: 'Self-taught since 2014; can build but cannot teach' },
      { section: 'P2 — Why Glasgow', words: '~60', content: 'Control systems + robotics + embedded + project-based' },
      { section: 'P3 — Why This University', words: '~40', content: 'Matches how I work' },
      { section: 'P4 — Implementation', words: '~60', content: 'Curriculum + lab + real challenges' },
    ],
    contentId: `Area Prioritas UK: Mendorong Pertumbuhan dan Kemakmuran

Saya telah meng-deliver proyek automasi khusus untuk lembaga pemerintah dan produsen sejak 2014 — termasuk proyek pemerintah Batu 2023 di mana saya mengambil alih sebagai main contractor dan meng-deliver tepat waktu dengan nol bug kritis. Tetapi setiap proyek ini dibangun atas pengetahuan yang saya ajari sendiri: coba dan gagal, riset online, dan malam-malam larut debugging kode yang tidak saya pahami secara struktural. Saya bisa membangun sistem yang berfungsi. Saya belum bisa menjelaskan MENGAPA sistem itu berfungsi pada tingkat yang diperlukan untuk mengajarkan orang lain. Kesenjangan itulah mengapa saya membutuhkan MSc Mechatronics di University of Glasgow.

Program Glasgow mengatasi tiga kesenjangan spesifik dalam keahlian saya saat ini. Pertama, modul sistem kontrolnya akan menormalisasi logika automasi yang saat ini saya terapkan secara intuitif — pengetahuan yang saya butuhkan jika saya akan mengajarkan mahasiswa teknik yang berhak mendapatkan pemahaman terstruktur, bukan hanya jalan pintas praktis. Kedua, kurikulum robotika dan komputasi tertanam akan memperdalam fondasi teknis yang saya gunakan sehari-hari di Diginergy, di mana saya mengelola proyek lintas batas untuk klien Jerman. Ketiga, pendekatan pembelajaran berbasis proyek Glasgow cocok dengan cara saya bekerja: memecahkan masalah nyata, bukan menulis makalah teoritis.

Kembali ke Surabaya, saya akan mengintegrasikan modul Glasgow ke dalam pengajaran saya di fakultas teknik, menggantikan kurikulum PLC usang dengan konten IoT dan Industry 4.0 yang berasal dari pengalaman Dishub dan Diginergy saya. Saya juga akan mendirikan laboratorium automasi kecil di mana mahasiswa bekerja pada tantangan nyata dari lembaga pemerintah — lembaga yang sama yang telah saya layani selama satu dekade. Ini secara langsung berkontribusi pada agenda pertumbuhan dan kemakmuran UK: memperkuat tenaga kerja industri Indonesia dengan melatih insinyur yang dapat menutup kesenjangan automasi yang saya lihat secara langsung.`,
  },
  {
    id: 4,
    title: 'Career Plan',
    subtitle: 'From Batu Project to 200+ Engineers Nationwide',
    wordLimit: '100–300 words',
    wordCount: '~280',
    target: {
      question: 'Outline your medium and long-term career plans. Please relate your answer to a key challenge or priority facing your country.',
      whatTheyTest: 'A clear, realistic, and achievable post-study career plan with genuine commitment to addressing pressing challenges.',
      mustInclude: [
        'What impact do you intend to make in your home country?',
        'How does your career plan connect with your course of study?',
        'What barriers or obstacles might you face, and how will you overcome them?',
        'How will being a Chevening Scholar help you achieve your ambitions?',
      ],
      scoring: 'Short/mid/long-term with measurable goals. Tie to UK strategic priorities (FCDO country profile). Credible gap between current position and stated ambition.',
    },
    content: `[DRAFT — aligned with Essay 1: Batu 2022/2023 + Diginergy]

Short-term (1–3 years): Upon returning from Glasgow, I will secure a lecturer position at an engineering faculty in East Java — ideally at Politeknik Elektronika Negeri Surabaya (PENS), my alma mater. My immediate objective is to redesign the mechatronics and automation curriculum, replacing outdated PLC-centric modules with IoT/Industry 4.0 content drawn directly from Glasgow's teaching. I will also continue my consulting practice, offering automation audits to government agencies like Dishub — the same agencies I have served for a decade — creating a feedback loop between classroom theory and public-sector reality.

Mid-term (5–10 years): I will scale the model I proven at Batu and Dishub Tangerang. I will establish an Industry-Academia Collaboration Hub connecting three or more universities with regional government units (Dishub, Disperindag, BPOM) and manufacturers. The hub will run joint projects, co-supervise student theses on real public-sector problems, and provide CPD courses for government engineers. My goal: 200+ engineers trained in automation within a decade — the same impact I made at Dishub, multiplied across institutions.

Long-term (15+ years): I aim to lead a national initiative to standardise automation and mechatronics education across Indonesian polytechnics — drawing on UK pedagogical models and Chevening alumni networks to advocate for curriculum reform at the Ministry of Education level. The Batu project showed me what one automated system can do. The long-term vision is to build a generation of engineers who can replicate that impact nationwide.

Barriers: Indonesia's academic culture rewards research publications over teaching innovation; government procurement favors low-price vendors over quality solutions. I will overcome these by publishing curriculum-reform case studies in international journals (turning innovation into research output) and by leveraging Chevening alumni for equipment donations and industry partnerships.

Chevening provides the three things I cannot acquire domestically: world-class technical training at Glasgow, a global network of reform-minded leaders, and the credibility to influence institutional change in Indonesia.`,
    structure: [
      { section: 'Short-term', words: '~60', content: 'Lecturer at PENS; redesign curriculum; continue Dishub consulting' },
      { section: 'Mid-term', words: '~55', content: 'Industry-Academia Hub; government units + manufacturers; 200+ engineers' },
      { section: 'Long-term', words: '~50', content: 'National standardisation; Ministry of Education advocacy' },
      { section: 'Barriers', words: '~45', content: 'Academic culture + procurement → overcome via publications + alumni' },
      { section: 'Chevening', words: '~30', content: 'Training + network + credibility' },
    ],
    strengths: [
      'Direct continuation of Dishub story (short-term = same practice)',
      'Measurable mid-term target (200+ engineers, 3+ universities)',
      'Long-term vision tied to national impact',
      'Specific barriers with solutions',
      'Chevening value clearly stated',
    ],
    todos: [
      'Verify PENS lecturer hiring requirements',
      'Research existing Industry-Academia hubs in Indonesia',
      'Add specific Chevening alumni to contact',
    ],
    whySuperior: [
      { aspect: 'Short-term = Essay 1 practice', detail: 'Lanjutkan konsultasi Dishub, mulai mengajar' },
      { aspect: 'Mid-term = scale Dishub model', detail: '3+ universitas, 200+ insinyur dalam 10 tahun' },
      { aspect: 'Long-term = national impact', detail: 'Standardisasi kurikulum automasi nasional' },
      { aspect: 'Barriers addressed', detail: 'Budaya akademik + procurement → publications + alumni' },
    ],
    kerangka: [
      { section: 'P1 — Short-term', words: '~60', content: 'Dosen PENS; redesign kurikulum; lanjut konsultasi Dishub' },
      { section: 'P2 — Mid-term', words: '~55', content: 'Industry-Academia Hub; 3+ universitas; 200+ insinyur' },
      { section: 'P3 — Long-term', words: '~50', content: 'Standarisasi nasional; advokasi Kementerian Pendidikan' },
      { section: 'P4 — Barriers', words: '~45', content: 'Budaya akademik + procurement → publications + alumni' },
      { section: 'P5 — Chevening', words: '~30', content: 'Training + network + credibility' },
    ],
    contentId: `Jangka Pendek (1–3 tahun): Kembali dari Glasgow, saya akan mendapatkan posisi dosen di fakultas teknik di Jawa Timur — idealnya di Politeknik Elektronika Negeri Surabaya (PENS), almamater saya. Tujuan langsung saya adalah mendesain ulang kurikulum mekatronika dan automasi, menggantikan modul PLC usang dengan konten IoT/Industry 4.0 yang langsung dari pengajaran Glasgow. Saya juga akan melanjutkan praktik konsultasi Dishub, menawarkan audit automasi kepada lembaga pemerintah — menciptakan umpan balik antara teori kelas dan realitas sektor publik.

Jangka Menengah (5–10 tahun): Saya akan menskalakan model yang saya buktikan di Dishub Tangerang. Saya akan mendirikan Hub Kolaborasi Industri-Akademik yang menghubungkan tiga atau lebih universitas dengan unit pemerintah daerah (Dishub, Disperindag, BPOM) dan produsen. Hub akan menjalankan proyek bersama, bimbingan tesis mahasiswa pada masalah nyata sektor publik, dan menyediakan kursus CPD untuk insinyur pemerintah. Target saya: 200+ insinyur terlatih dalam automasi dalam satu dekade — dampak yang sama dengan Dishub, dikalikan melalui institusi.

Jangka Panjang (15+ tahun): Saya bertujuan untuk memimpin inisiatif nasional untuk menstandarisasi pendidikan automasi dan mekatronika di seluruh politeknik Indonesia — mengambil model pedagogis Inggris dan jaringan alumni Chevening untuk mengadvokasi reformasi kurikulum di Kementerian Pendidikan. Proyek Dishub menunjukkan kepada saya apa yang bisa dilakukan satu sistem yang terotomatisasi. Visi jangka panjang adalah membangun generasi insinyur yang dapat mereplikasi dampak itu di seluruh Indonesia.

Hambatan: Budaya akademik Indonesia lebih menghargai publikasi penelitian daripada inovasi pengajaran; pengadaan pemerintah lebih menyukai vendor harga rendah daripada solusi berkualitas. Saya akan mengatasinya dengan mempublikasikan studi kasus reformasi kurikulum di jurnal internasional (mengubah inovasi menjadi output penelitian) dan memanfaatkan alumni Chevening untuk donasi peralatan dan kemitraan industri.

Chevening menyediakan tiga hal yang tidak dapat saya peroleh secara domestik: pelatihan teknis kelas dunia di Glasgow, jaringan global para pemimpin yang menginginkan perubahan, dan kredibilitas untuk mempengaruhi perubahan institusional di Indonesia.`,
  },
]

function Collapsible({ title, badge, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div style={{ marginBottom: '1rem' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '0.75rem',
          padding: '0.75rem 1rem',
          background: '#1e293b',
          border: '1px solid #334155',
          borderRadius: '8px',
          color: '#e2e8f0',
          fontSize: '1rem',
          fontWeight: 600,
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{open ? '▾' : '▸'}</span>
          {title}
          {badge && (
            <span style={{ fontSize: '0.7rem', padding: '0.15rem 0.5rem', borderRadius: '999px', background: 'rgba(74,222,128,0.15)', color: '#4ade80' }}>{badge}</span>
          )}
        </span>
        <span style={{ fontSize: '0.75rem', color: '#64748b' }}>{open ? 'Hide' : 'Show'}</span>
      </button>
      {open && <div style={{ paddingTop: '0.75rem' }}>{children}</div>}
    </div>
  )
}

export default function CheveningEssays() {
  const [selectedEssay, setSelectedEssay] = useState(null)

  return (
    <div>
      <h2 className="section-title">Chevening 2026/27 — Supporting Statements</h2>
      <p style={{ color: '#94a3b8', marginBottom: '1rem' }}>
        4 essays × 100–300 words each. Click any essay to expand. All drafts are WIP — review before submitting.
      </p>

      <div style={{ display: 'grid', gap: '1rem' }}>
        {essays.map((essay) => (
          <div key={essay.id} className="scholarship-card">
            <div className="card-header">
              <div className="card-title">
                <span style={{ color: '#4ade80', marginRight: '0.5rem' }}>Essay {essay.id}</span>
                {essay.title}
              </div>
              <span style={{ fontSize: '0.75rem', color: '#64748b' }}>
                {essay.wordCount} / {essay.wordLimit}
              </span>
            </div>
            <p style={{ color: '#94a3b8', fontSize: '0.85rem', margin: '0.25rem 0 0.5rem' }}>
              {essay.subtitle}
            </p>

            {essay.whySuperior && (
              <Collapsible title="Kenapa Topik Ini Superior" defaultOpen={true}>
                <div className="tracker-table-wrap">
                  <table className="tracker-table">
                    <thead>
                      <tr><th>Aspek</th><th>Mengapa Works</th></tr>
                    </thead>
                    <tbody>
                      {essay.whySuperior.map((s, i) => (
                        <tr key={i}>
                          <td><strong>{s.aspect}</strong></td>
                          <td>{s.detail}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Collapsible>
            )}

            {essay.kerangka && (
              <Collapsible title="Kerangka Essay (Revisi dari Draft)">
                <div className="tracker-table-wrap">
                  <table className="tracker-table">
                    <thead>
                      <tr><th>Section</th><th>Words</th><th>Content</th></tr>
                    </thead>
                    <tbody>
                      {essay.kerangka.map((s, i) => (
                        <tr key={i}>
                          <td><strong>{s.section}</strong></td>
                          <td>{s.words}</td>
                          <td>{s.content}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Collapsible>
            )}

            <Collapsible title="Chevening Target — What They're Testing" defaultOpen={true}>
              <div style={{
                background: '#0f172a',
                border: '1px solid #1e293b',
                borderRadius: '8px',
                padding: '0.75rem 1rem',
                fontSize: '0.85rem',
              }}>
                <p style={{ color: '#e2e8f0', margin: '0 0 0.5rem', fontWeight: 600 }}>
                  Q: {essay.target.question}
                </p>
                <p style={{ color: '#94a3b8', margin: '0 0 0.5rem' }}>
                  <strong style={{ color: '#fbbf24' }}>What they test:</strong> {essay.target.whatTheyTest}
                </p>
                <p style={{ color: '#94a3b8', margin: '0 0 0.25rem', fontWeight: 600 }}>Must include:</p>
                <ul style={{ color: '#94a3b8', margin: '0 0 0.5rem', paddingLeft: '1.25rem' }}>
                  {essay.target.mustInclude.map((item, i) => (
                    <li key={i} style={{ marginBottom: '0.15rem' }}>{item}</li>
                  ))}
                </ul>
                <p style={{ color: '#4ade80', margin: 0, fontStyle: 'italic' }}>
                  Scoring: {essay.target.scoring}
                </p>
              </div>
            </Collapsible>

            <Collapsible title="Read Essay" badge={`${essay.wordCount} words`}>
              <div style={{
                background: '#0f172a',
                border: '1px solid #1e293b',
                borderRadius: '8px',
                padding: '1rem',
                whiteSpace: 'pre-wrap',
                fontSize: '0.9rem',
                lineHeight: '1.6',
                color: '#e2e8f0',
              }}>
                {essay.content}
              </div>
            </Collapsible>

            {essay.contentId && (
              <Collapsible title="Versi Bahasa Indonesia" badge="ID">
                <div style={{
                  background: '#0f172a',
                  border: '1px solid #1e293b',
                  borderRadius: '8px',
                  padding: '1rem',
                  whiteSpace: 'pre-wrap',
                  fontSize: '0.9rem',
                  lineHeight: '1.6',
                  color: '#e2e8f0',
                }}>
                  {essay.contentId}
                </div>
              </Collapsible>
            )}

            <Collapsible title="Structure Breakdown">
              <div className="tracker-table-wrap">
                <table className="tracker-table">
                  <thead>
                    <tr><th>Section</th><th>Words</th><th>Content</th></tr>
                  </thead>
                  <tbody>
                    {essay.structure.map((s, i) => (
                      <tr key={i}>
                        <td><strong>{s.section}</strong></td>
                        <td>{s.words}</td>
                        <td>{s.content}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Collapsible>

            <Collapsible title="Key Strengths">
              <ul style={{ color: '#94a3b8', fontSize: '0.85rem', paddingLeft: '1.25rem' }}>
                {essay.strengths.map((s, i) => (
                  <li key={i} style={{ marginBottom: '0.25rem' }}>
                    <span style={{ color: '#4ade80' }}>✓</span> {s}
                  </li>
                ))}
              </ul>
            </Collapsible>

            <Collapsible title="Before Submitting — TODO">
              <ul style={{ color: '#94a3b8', fontSize: '0.85rem', paddingLeft: '1.25rem' }}>
                {essay.todos.map((t, i) => (
                  <li key={i} style={{ marginBottom: '0.25rem' }}>
                    <span style={{ color: '#fbbf24' }}>☐</span> {t}
                  </li>
                ))}
              </ul>
            </Collapsible>
          </div>
        ))}
      </div>

      <Collapsible title="Benang Merah — Alignment Across 4 Essays" defaultOpen={true}>
        <div style={{
          background: '#0f172a',
          border: '1px solid #1e293b',
          borderRadius: '8px',
          padding: '1rem',
          fontSize: '0.85rem',
        }}>
          <p style={{ color: '#e2e8f0', margin: '0 0 0.75rem', fontWeight: 600 }}>
            Core Thread: Dishub automation → ethical stand → need advanced training → become dosen → scale impact
          </p>

          <div className="tracker-table-wrap">
            <table className="tracker-table">
              <thead>
                <tr><th>Essay</th><th>Thread</th><th>Connection to Core</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1. Leadership</strong></td>
                  <td>Dishub automation project → proposed semi-robotic system → ethical stand (refused unofficial payments)</td>
                  <td>Foundation — shows technical skill + integrity + government experience</td>
                </tr>
                <tr>
                  <td><strong>2. Networking</strong></td>
                  <td>Dishub KAUBT relationship → trust built without kickback → reciprocity through quality work</td>
                  <td>Extends trust theme — relationships built on value, not compromise</td>
                </tr>
                <tr>
                  <td><strong>3. Course Choice</strong></td>
                  <td>Indonesia's automation gap (seen at Dishub) → need advanced mechatronics training → Glasgow</td>
                  <td>Problem → Solution — why Glasgow Mechatronics is the answer</td>
                </tr>
                <tr>
                  <td><strong>4. Career Plan</strong></td>
                  <td>Return as dosen → teach automation → close government-industry gap → 200+ engineers in 10 years</td>
                  <td>Long-term vision — scale the Dishub impact to national level</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ marginTop: '0.75rem', padding: '0.75rem', background: '#1e293b', borderRadius: '8px' }}>
            <p style={{ color: '#4ade80', margin: '0 0 0.5rem', fontWeight: 600 }}>Narrative Arc</p>
            <p style={{ color: '#94a3b8', margin: 0, lineHeight: '1.6' }}>
              <strong>Dishub (2017)</strong> → automation works → ethical stand → trust built
              <br />
              → <strong>see bigger gap</strong> → Indonesia lacks automation expertise
              <br />
              → <strong>Glasgow Mechatronics</strong> → advanced training
              <br />
              → <strong>return as dosen</strong> → teach automation → scale impact
              <br />
              → <strong>200+ engineers</strong> in 10 years → national curriculum reform
            </p>
          </div>

          <div style={{ marginTop: '0.75rem', padding: '0.75rem', background: '#1e293b', borderRadius: '8px' }}>
            <p style={{ color: '#fbbf24', margin: '0 0 0.5rem', fontWeight: 600 }}>Key Consistency Checks</p>
            <ul style={{ color: '#94a3b8', margin: 0, paddingLeft: '1.25rem' }}>
              <li>All 4 essays mention <strong style={{ color: '#e2e8f0' }}>Dishub / automation</strong> as starting point</li>
              <li>All 4 essays connect to <strong style={{ color: '#e2e8f0' }}>dosen (lecturer)</strong> as career goal</li>
              <li>Essay 1 (Leadership) + Essay 2 (Networking) both use <strong style={{ color: '#e2e8f0' }}>Dishub relationships</strong></li>
              <li>Essay 3 (Course) + Essay 4 (Career) both reference <strong style={{ color: '#e2e8f0' }}>automation gap in Indonesia</strong></li>
              <li>No example is repeated — each essay has its own specific story</li>
            </ul>
          </div>
        </div>
      </Collapsible>

      <Collapsible title="Essay Framework & Grand Design" defaultOpen={false}>
        <div style={{
          background: '#0f172a',
          border: '1px solid #1e293b',
          borderRadius: '8px',
          padding: '1rem',
          fontSize: '0.85rem',
          color: '#94a3b8',
        }}>
          <h4 style={{ color: '#e2e8f0', margin: '0 0 0.5rem' }}>Prinsip Utama</h4>
          <ul style={{ marginBottom: '1rem' }}>
            <li><strong style={{ color: '#e2e8f0' }}>STAR Method:</strong> Situation → Task → Action → Result</li>
            <li><strong style={{ color: '#e2e8f0' }}>Bukti, bukan klaim:</strong> Gunakan angka, nama, hasil terukur</li>
            <li><strong style={{ color: '#e2e8f0' }}>"Saya" bukan "Kami":</strong> Tunjukkan peran Anda secara spesifik</li>
            <li><strong style={{ color: '#e2e8f0' }}>100–300 kata:</strong> Ideal 200–250 kata per essay</li>
          </ul>

          <h4 style={{ color: '#e2e8f0', margin: '0 0 0.5rem' }}>UK Priority Areas</h4>
          <ul style={{ marginBottom: '1rem' }}>
            <li>Promoting growth and prosperity ✓ (Essay 3)</li>
            <li>Building climate resilience</li>
            <li>Strengthening security and stability</li>
            <li>Supporting development for more inclusive societies</li>
          </ul>

          <h4 style={{ color: '#e2e8f0', margin: '0 0 0.5rem' }}>Checklist Lintas Essay</h4>
          <ul>
            <li>☐ Tidak ada contoh yang diulang antar essay</li>
            <li>☐ Semua essay menyebut tujuan yang sama (dosen Engineering Management)</li>
            <li>☐ Essay 3 dan 4 saling terhubung</li>
            <li>☐ Essay 2 menyebut rencana spesifik di Chevening</li>
          </ul>
        </div>
      </Collapsible>
    </div>
  )
}
