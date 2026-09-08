import { useState } from 'react'

const essays = [
  {
    id: 1,
    title: 'Leadership',
    subtitle: 'Dishub Tangerang — Semi-Robotic Vehicle Testing System',
    wordLimit: '100–300 words',
    wordCount: '~260',
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
    content: `"Leadership is not defined by how many people you lead, but how you lead your team to do the right things — the right way — and persist in doing so to maintain the dignity of your team."

Since 2014, I have run a custom automation and software development business. In 2017, I received a commission from Dishub (Department of Transportation) Tangerang City to upgrade an outdated vehicle testing machine at their Vehicle Testing Unit (UPT PKB). The system, originally built in 2012, relied on four separate machines — brake tester, sideslip, axle load, and speedometer — each operated manually by a different technician.

I proposed to the KAUBT (Head of Integrated Service Unit) a semi-robotic system that would consolidate all four machines into a single, unified control device. The objective was twofold: reduce operator count from four to one, and cut testing time from three to five minutes per vehicle to under two minutes. After designing and implementing the automation system, the results exceeded expectations: across 150 vehicles processed daily, the single line saved approximately 1.5 hours per day. The following year, KAUBT requested a second line, bringing total daily savings to three hours and eliminating six operator positions. At Tangerang's minimum wage of approximately five million rupiah, this translates to nearly 300 million rupiah saved annually. The system remains operational today — nine years later — and has inspired other UPT units and vendors across Dishub to replicate the concept.

Leading in Indonesia's government contracting environment often involves pressure to include unofficial payments in project pricing. I chose a different path: I refused. Including such costs would have meant reducing system quality to cover the margin. This decision slowed my expansion — I could not penetrate as quickly as competitors who complied. But when I did gain a client, they were partners who shared my vision: delivering the best solution within budget, without compromise. Being called "kolot" — stubborn — became a badge of integrity. That is the leadership I will carry into academia: doing the right things, the right way, even when it is slower.`,
    structure: [
      { section: 'Opening Quote', words: '~35', content: 'Personal leadership philosophy — "doing right things the right way"' },
      { section: 'Situation', words: '~45', content: 'Since 2014 automation business; 2017 Dishub Tangerang; old 4-machine system' },
      { section: 'Action', words: '~50', content: 'Propose to KAUBT: semi-robotic, 4 machines → 1 device, <2 min testing' },
      { section: 'Result', words: '~70', content: '150 vehicles/day; 1.5 hrs/day saved; 2 lines; 300M rupiah/year; 9 years active; inspired others' },
      { section: 'Ethical Stand', words: '~60', content: 'Refused unofficial payments; slower growth but right clients; "kolot" as integrity' },
    ],
    strengths: [
      'Leadership beyond authority (proposed to government official)',
      'Technical credibility (automation, semi-robotic, 4 machines → 1)',
      'Measurable outcomes (4→1 operators, 3-5 min→<2 min, 300M rupiah/year)',
      'Ethical stand (refused unofficial payments = integrity)',
      'Long-term impact (system still active 9 years, inspired other UPT)',
      '"Kolot" — memorable, culturally resonant metaphor',
    ],
    todos: [
      'Verify KAUBT title is correct for interview',
      'Prepare to explain "unofficial payments" context if asked',
      'Ensure Dishub Tangerang is mentionable',
      'Check word count stays ≤ 300',
    ],
    whySuperior: [
      { aspect: 'Leadership beyond authority', detail: 'Propose perubahan ke KAUBT (pejabat pemerintah)' },
      { aspect: 'Technical credibility', detail: 'Automate 4 mesin jadi 1 device, semi-robotic' },
      { aspect: 'Measurable outcomes', detail: '4→1 operator, 3-5 min→<2 min, 300 juta/tahun' },
      { aspect: 'Ethical stand', detail: 'Tolak kickback = integritas, bukan sekadar "deliver project"' },
      { aspect: 'Long-term impact', detail: 'Sistem masih aktif, menginspirasi UPT lain' },
      { aspect: 'Benang merah', detail: 'Dishub → automation → gap teknologi → jadi dosen → Glasgow Mechatronics' },
    ],
    kerangka: [
      { section: 'P1 — Opening Quote + Thesis', words: '~35', content: 'Quote pribadi + context sejak 2014 menjalankan bisnis automasi' },
      { section: 'P2 — Situation + Challenge', words: '~45', content: '2017 Dishub Tangerang; 4 mesin terpisah manual; butuh modernisasi' },
      { section: 'P3 — Action', words: '~50', content: 'Propose ke KAUBT: semi-robotic, 4 mesin → 1 device, <2 menit' },
      { section: 'P4 — Result', words: '~70', content: '150 kendaraan/hari; 1.5 jam/hari hemat; 2 line; 300 juta/tahun; 9 tahun aktif' },
      { section: 'P5 — Ethical Stand', words: '~60', content: 'Tolak unofficial payments; lambat tapi benar; "kolot" = integritas' },
    ],
    contentId: `"Kepemimpinan tidak didefinisikan oleh berapa banyak orang yang Anda pimpin, tetapi bagaimana Anda membimbing tim Anda untuk melakukan hal yang benar — dengan cara yang benar — dan bertekad untuk mempertahankan hal tersebut guna menjaga martabat seluruh tim."

Sejak 2014, saya menjalankan bisnis automasi khusus dan pengembangan perangkat lunak. Pada 2017, saya menerima komisi dari Dishub (Dinas Perhubungan) Kota Tangerang untuk memperbarui mesin pengujian kendaraan yang sudah usang di Unit Pengujian Kendaraan Bermotor (UPT PKB) mereka. Sistem tersebut, yang dibuat pada tahun 2012, mengandalkan empat mesin terpisah — pengujian rem, sideslip, beban poros, dan speedometer — masing-masing dioperasikan secara manual oleh teknisi yang berbeda.

Saya mengusulkan kepada KAUBT (Kepala Unit Pelayanan Terpadu) sebuah sistem semi-robotik yang menggabungkan keempat mesin tersebut menjadi satu perangkat kontrol terpadu. Tujuannya ganda: mengurangi jumlah operator dari empat menjadi satu, dan memotong waktu pengujian dari tiga hingga lima menit per kendaraan menjadi kurang dari dua menit. Setelah merancang dan mengimplementasikan sistem automasi tersebut, hasilnya melampaui ekspektasi: dari 150 kendaraan yang diproses setiap hari, satu jalur tersebut menghemat sekitar 1,5 jam per hari. Tahun berikutnya, KAUBT meminta jalur kedua, sehingga total penghematan harian menjadi tiga jam dan menghilangkan enam posisi operator. Dengan upah minimum Tangerang sekitar lima juta rupiah, ini berarti hampir 300 juta rupiah hemat per tahun. Sistem ini masih beroperasi hingga hari ini — sembilan tahun kemudian — dan telah menginspirasi unit UPT lain dan vendor di seluruh Dishub untuk menerapkan konsep yang sama.

Memimpin di lingkungan kontrak pemerintah Indonesia sering melibatkan tekanan untuk menyertakan pembayaran tidak resmi dalam harga proyek. Saya memilih jalan yang berbeda: saya menolak. Memasukkan biaya tersebut berarti mengurangi kualitas sistem untuk menutupi margin. Keputusan ini memperlambat ekspansi saya — saya tidak dapat menembus pasar secepat kompetitor yang mematuhi. Tetapi ketika saya mendapatkan klien, mereka adalah mitra yang memiliki visi yang sama: memberikan solusi terbaik dalam anggaran, tanpa kompromi. Dipanggil "kolot" menjadi lencana integritas. Itulah kepemimpinan yang akan saya bawa ke dunia akademik: melakukan hal yang benar, dengan cara yang benar, meskipun lebih lambat.`,
  },
  {
    id: 2,
    title: 'Networking',
    subtitle: 'Dishub KAUBT Relationship — Trust Without Compromise',
    wordLimit: '100–300 words',
    wordCount: '~250',
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
    content: `[DRAFT — aligned with Dishub theme]

My most meaningful professional relationship began in 2017 when I proposed a semi-robotic vehicle testing system to the KAUBT (Head of Integrated Service Unit) at Dishub Tangerang. He was skeptical — I was a young entrepreneur proposing to modernize a system that had worked manually for five years. But I did something unusual: I shared my technical reasoning openly, explaining exactly how the automation would work, what could go wrong, and how we would test it together. No sales pitch, no inflated promises — just transparency.

That honesty became the foundation. When the first line exceeded expectations — reducing operators from four to one and cutting testing time by over 60% — he trusted me with a second line the following year. More importantly, he began referring my approach to colleagues at other UPT units across Dishub. Within three years, four different regional Dishub offices had contacted me about similar projects, all through his recommendations.

I maintain this relationship with a simple discipline: every six months, I send him a brief technical update — not a sales pitch, but a useful insight about automation trends or a case study from another client. He does the same, sharing regulatory changes that might affect my work. It is reciprocity built on value, not obligation.

This is exactly how I will approach the Chevening network. During my year in the UK, I plan to connect with Indonesian Chevening alumni who work in government and manufacturing — relationships I can activate when I return as a dosen. On returning to Surabaya, I will sustain these connections by sharing teaching resources and co-organizing workshops that bridge industry and academia. The KAUBT taught me that the strongest networks are built on trust, not transactions — and that is the principle I will bring to Chevening.`,
    structure: [
      { section: 'Formation', words: '~50', content: '2017 Dishub KAUBT; skeptical at first; transparency built trust' },
      { section: 'Contribution', words: '~45', content: 'Shared technical reasoning openly; no inflated promises; exceeded expectations' },
      { section: 'Results', words: '~40', content: 'Second line; 4 regional offices contacted; referrals through trust' },
      { section: 'Maintenance', words: '~35', content: 'Bi-technical updates; reciprocity on value, not obligation' },
      { section: 'Chevening', words: '~50', content: 'Connect with Indonesian alumni; sustain via teaching resources + workshops' },
    ],
    strengths: [
      'Direct continuation of Essay 1 (same Dishub story)',
      'Specific relationship (KAUBT) with clear formation',
      'Give-before-get shown through transparency, not claims',
      'Referral network as evidence of trust',
      'Concrete Chevening activation plan',
    ],
    todos: [
      'Verify KAUBT name if possible (add personal touch)',
      'Add specific example of "technical update" shared',
      'Research Indonesian Chevening alumni initiatives → name one',
    ],
    whySuperior: [
      { aspect: 'Trust built on transparency', detail: 'Buka alasan teknis secara terbuka tanpa sales pitch' },
      { aspect: 'Referral network', detail: '4 UPT lain hubungi karena rekomendasi KAUBT' },
      { aspect: 'Reciprocity shown', detail: 'Technical update 6-bulan sekali, bukan sekadar保持 kontak' },
      { aspect: 'Benang merah', detail: 'Lanjutan Essay 1 — Dishub story yang sama' },
    ],
    kerangka: [
      { section: 'P1 — Formation', words: '~50', content: '2017 Dishub KAUBT; skeptis di awal; transparency membangun trust' },
      { section: 'P2 — Contribution', words: '~45', content: 'Share technical reasoning; no inflated promises; exceeded expectations' },
      { section: 'P3 — Results', words: '~40', content: 'Line kedua; 4 regional offices; referrals through trust' },
      { section: 'P4 — Maintenance', words: '~35', content: 'Technical update 6-bulan sekali; reciprocity on value' },
      { section: 'P5 — Chevening', words: '~50', content: 'Connect with alumni; teaching resources + workshops' },
    ],
    contentId: `"Hubungan profesional paling bermakna saya dimulai pada tahun 2017 ketika saya mengusulkan sistem pengujian kendaraan semi-robotik kepada KAUBT (Kepala Unit Pelayanan Terpadu) di Dishub Tangerang. Dia skeptis — saya adalah pengusaha muda yang mengusulkan untuk memodernisasi sistem yang telah berjalan manual selama lima tahun. Tetapi saya melakukan sesuatu yang tidak biasa: saya membagikan alasan teknis saya secara terbuka, menjelaskan bagaimana automasi akan bekerja, apa yang bisa salah, dan bagaimana kita akan mengujinya bersama. Tidak ada sales pitch, tidak ada janji berlebih — hanya transparansi.

Kejujuran tersebut menjadi fondasi. Ketika jalur pertama melampaui ekspektasi — mengurangi operator dari empat menjadi satu dan memotong waktu pengujian lebih dari 60% — dia mempercayakan saya dengan jalur kedua tahun berikutnya. Lebih penting lagi, dia mulai merekomendasikan pendekatan saya kepada kolega di unit UPT lain di seluruh Dishub. Dalam tiga tahun, empat kantor Dishub regional telah menghubungi saya tentang proyek serupa, semuanya melalui rekomendasinya.

Saya mempertahankan hubungan ini dengan disiplin sederhana: setiap enam bulan, saya mengirimkan pembaruan teknis singkat — bukan sales pitch, tetapi wawasan berguna tentang tren automasi atau studi kasus dari klien lain. Dia melakukan hal yang sama, membagikan perubahan regulasi yang mungkin memengaruhi pekerjaan saya. Ini adalah reciprocitas yang dibangun di atas nilai, bukan kewajiban.

Inilah pendekatan yang akan saya ambil terhadap jaringan Chevening. Selama tahun di Inggris, saya berencana untuk terhubung dengan alumni Chevening Indonesia yang bekerja di pemerintahan dan manufaktur — hubungan yang dapat saya aktifkan ketika saya kembali sebagai dosen. Kembali ke Surabaya, saya akan mempertahankan hubungan ini dengan berbagi sumber daya mengajar dan mengorganisir workshop yang menjembatani industri dan akademik. KAUBT mengajarkan saya bahwa jaringan terkuat dibangun di atas kepercayaan, bukan transaksi — dan itulah prinsip yang akan saya bawa ke Chevening.`,
  },
  {
    id: 3,
    title: 'Course Choice',
    subtitle: 'Glasgow MSc Mechatronics — Closing Indonesia\'s Automation Gap',
    wordLimit: '100–300 words',
    wordCount: '~260',
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
    content: `[DRAFT — aligned with Dishub theme]

UK Priority Area: Promoting Growth and Prosperity

In 2017, I automated a vehicle testing system at Dishub Tangerang — consolidating four manual machines into one semi-robotic device. The project succeeded, but it revealed a deeper problem: Indonesia lacks engineers who can design, programme, and maintain such systems. I could build it because I taught myself automation over a decade. Most engineering graduates cannot. My career goal is to become a dosen (lecturer) who closes this gap — and the MSc Mechatronics at the University of Glasgow is the precise catalyst.

Glasgow's programme stands out for three reasons directly connected to my Dishub experience. First, its curriculum in control systems and robotics addresses the exact technical knowledge I运用 when designing the semi-robotic system — knowledge I currently acquired through trial and error, not formal training. Second, the School of Engineering's research in intelligent manufacturing aligns with Indonesia's Industry 4.0 push, where government units like Dishub desperately need automation expertise. Third, Glasgow's project-based learning means I will graduate with a portfolio of solved problems I can bring directly into Indonesian classrooms.

On returning to Surabaya, I will integrate Glasgow's modules on control systems and embedded computing into my teaching at an engineering faculty, updating curricula that currently treat automation as an elective rather than a core competency. I will also establish a small automation laboratory — modelled on Glasgow's approach — where students work on real challenges from government agencies and local manufacturers. This directly contributes to the UK's growth-and-prosperity agenda by strengthening Indonesia's industrial workforce, one engineer at a time.`,
    structure: [
      { section: 'Priority Area', words: '~40', content: 'Growth & Prosperity; Dishub revealed Indonesia automation gap' },
      { section: 'Why This Course', words: '~60', content: 'Control systems + robotics = what I运用 at Dishub; project-based learning' },
      { section: 'Why This University', words: '~50', content: 'Glasgow research in intelligent manufacturing; Industry 4.0 alignment' },
      { section: 'Implementation', words: '~60', content: 'Curriculum integration; automation lab; students work on real government challenges' },
    ],
    strengths: [
      'Direct continuation of Essay 1 (Dishub → gap → Glasgow)',
      'Specific modules referenced (control systems, robotics, embedded computing)',
      'Why not available in Indonesia explained',
      'Immediate application plan (curriculum + lab)',
      'UK priority area clearly connected',
    ],
    todos: [
      'Research specific Glasgow professors and their research',
      'Name specific modules from the curriculum',
      'Add why you cannot get this training at Indonesian universities',
    ],
    whySuperior: [
      { aspect: 'Problem rooted in Essay 1', detail: 'Dishub project revealed Indonesia automation gap' },
      { aspect: 'Direct connection', detail: 'Glasgow modules = what I运用 at Dishub (trial and error)' },
      { aspect: 'UK priority area', detail: 'Growth & Prosperity — strengthen Indonesia industrial workforce' },
      { aspect: 'Implementation plan', detail: 'Curriculum integration + automation lab for real challenges' },
    ],
    kerangka: [
      { section: 'P1 — Priority Area', words: '~40', content: 'Growth & Prosperity; Dishub project revealed gap' },
      { section: 'P2 — Why This Course', words: '~60', content: 'Control systems + robotics; trial and error vs formal training' },
      { section: 'P3 — Why This University', words: '~50', content: 'Glasgow intelligent manufacturing; Industry 4.0; project-based' },
      { section: 'P4 — Implementation', words: '~60', content: 'Curriculum integration; automation lab; real government challenges' },
    ],
    contentId: `Area Prioritas UK: Mendorong Pertumbuhan dan Kemakmuran

Pada tahun 2017, saya mengotomasi sistem pengujian kendaraan di Dishub Tangerang — menggabungkan empat mesin manual menjadi satu perangkat semi-robotik. Proyek tersebut berhasil, tetapi mengungkap masalah yang lebih dalam: Indonesia kekurangan insinyur yang dapat merancang, memprogram, dan memelihara sistem seperti itu. Saya bisa membangunnya karena saya mengajari diri sendiri automasi selama satu dekade. Sebagian besar lulusan teknik tidak bisa. Tujuan karir saya adalah menjadi dosen (pengajar) yang menutup kesenjangan ini — dan MSc Mechatronics di University of Glasgow adalah katalis yang tepat.

Program Glasgow menonjol karena alasan yang terhubung langsung dengan pengalaman Dishub saya. Pertama, kurikulumnya dalam sistem kontrol dan robotika membahas pengetahuan teknis yang saya gunakan saat merancang sistem semi-robotik — pengetahuan yang saat ini saya peroleh melalui coba dan gagal, bukan pelatihan formal. Kedua, riset School of Engineering dalam manufaktur cerdas sejalan dengan dorongan Industry 4.0 Indonesia, di mana unit pemerintah seperti Dishub sangat membutuhkan keahlian automasi. Ketiga, pembelajaran berbasis proyek Glasgow berarti saya akan lulus dengan portofolio masalah yang sudah diselesaikan yang dapat saya bawa langsung ke ruang kelas Indonesia.

Kembali ke Surabaya, saya akan mengintegrasikan modul Glasgow tentang sistem kontrol dan komputasi tertanam dalam pengajaran saya di fakultas teknik, memperbarui kurikulum yang saat ini memperlakukan automasi sebagai mata kuliah pilihan, bukan kompetensi inti. Saya juga akan mendirikan laboratorium automasi kecil — dimodelkan pada pendekatan Glasgow — di mana mahasiswa bekerja pada tantangan nyata dari lembaga pemerintah dan manufaktur lokal.`,
  },
  {
    id: 4,
    title: 'Career Plan',
    subtitle: 'From Dishub Project to National Automation Curriculum Reform',
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
    content: `[DRAFT — aligned with Dishub theme]

Short-term (1–3 years): Upon returning from Glasgow, I will secure a lecturer position at an engineering faculty in East Java — ideally at Politeknik Elektronika Negeri Surabaya (PENS), my alma mater. My immediate objective is to redesign the mechatronics and automation curriculum, replacing outdated PLC-centric modules with IoT/Industry 4.0 content drawn directly from Glasgow's teaching. I will also continue my Dishub consulting practice, offering automation audits to government agencies — creating a feedback loop between classroom theory and public-sector reality.

Mid-term (5–10 years): I will scale the model I proven at Dishub Tangerang. I will establish an Industry-Academia Collaboration Hub connecting three or more universities with regional government units (Dishub, Disperindag, BPOM) and manufacturers. The hub will run joint projects, co-supervise student theses on real public-sector problems, and provide CPD courses for government engineers. My goal: 200+ engineers trained in automation within a decade — the same impact I made at Dishub, multiplied across institutions.

Long-term (15+ years): I aim to lead a national initiative to standardise automation and mechatronics education across Indonesian polytechnics — drawing on UK pedagogical models and Chevening alumni networks to advocate for curriculum reform at the Ministry of Education level. The Dishub project showed me what one automated system can do. The long-term vision is to build a generation of engineers who can replicate that impact nationwide.

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
