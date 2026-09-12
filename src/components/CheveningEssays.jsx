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
    discussion: {
      title: 'Diskusi Proposal Baru',
      sections: [
        {
          heading: 'Masalah Essay Saat Ini',
          content: `> Essay 1 terlalu "project management report" — teknis kuat tapi emosional tipis.  
> Reference essays menunjukkan **SIAPA orangnya** SEBELUM **apa yang dilakukan**.

| Aspek | Essay Sekarang | Reference Essays |
|-------|----------------|------------------|
| Opening | Konflik (Batu 2023) | Personal context (asal daerah) |
| Emotional hook | Tidak ada | Kutipan orang tua/mentor |
| Unique angle | Teknis (4→1 operator) | Moral courage |`,
        },
        {
          heading: 'Tiga Cerita yang Tersedia',
          content: `### 1. Dishub Automation (2017-sekarang)
- **Apa:** Sistem pengujian kendaraan semi-robotik
- **Hasil:** 4→1 operator, 60% lebih cepat, Rp 300 juta/tahun
- **Status:** Masih aktif sampai sekarang
- ⭐ Dampak lokal kuat | ⚠️ Terlalu teknis, 9 tahun lalu

### 2. Diginergy (2022-sekarang)
- **Apa:** IT Project Manager untuk perusahaan Jerman
- **Hasil:** "Blame me, not them"; CEO brainstorming partner
- **Status:** Aktif, internasional
- ⭐ Kolaborasi internasional | ⚠️ Kurang "personal"

### 3. Kickback Refusal (Berkali-kali)
- **Apa:** Menolak "hiburan" untuk pejabat pemerintah
- **Hasil:** Rugi kontrak, tapi menang klien sevisi
- **Status:** Terjadi berkali-kali, masih relevan
- ⭐ Moral courage, sangat unik | ⚠️ Sensitif, perlu framing hati-hati`,
        },
        {
          heading: 'Rekomendasi: Kickback sebagai Main Story',
          content: `**Mengapa kickback, bukan Dishub?**

| Kriteria | Dishub | Kickback |
|----------|--------|----------|
| Emotional power | Medium (teknis) | **Very high (moral courage)** |
| Uniqueness | Low (banyak engineer) | **Very high (tidak ada yang punya)** |
| Recency | 2017 (9 tahun lalu) | **Berkali-kali (masih terjadi)** |

**Kickback = "golden thread"** yang menghubungkan semua cerita:
- Dishub: kamu lakukan dengan benar TANPA kickback
- Diginergy: kamu lindungi tim TANPA kompromi
- Integritas: fondasi dari semua keputusanmu`,
        },
        {
          heading: 'Struktur Baru (300 kata)',
          content: `| Paragraf | Fokus | Kata | Hubungan |
|----------|-------|------|----------|
| **P1** | Personal context: Surabaya, ayah, istri | ~50 | SIAPA kamu |
| **P2** | Masalah: Budaya kickback di kontrak pemerintah | ~60 | APA yang kamu hadapi |
| **P3** | Responmu: Menolak, rugi kontrak, menang klien sevisi | ~60 | BAGAIMANA kamu memimpin |
| **P4** | Pola: Dishub + Diginergy sebagai bukti | ~60 | BUKTI bahwa cara kamu berhasil |
| **P5** | Prinsip: "Kolot tapi konsisten" — integritas sebagai kepemimpinan | ~40 | PELAJARAN |`,
        },
        {
          heading: 'Framing Kickback — Aman?',
          content: `**YA, TAPI framing hati-hati:**

| ❌ Jangan Bilang | ✅ Bilang Instead |
|-----------------|-------------------|
| "Pemerintah korup" | "Kontrak sering kali datang dengan aturan tak tertulis" |
| "Saya menolak suap" | "Saya menolak karena harus mengorbankan kualitas kerja" |
| "Saya lebih baik dari mereka" | "Saya memilih jalan yang lebih lambat tapi benar" |
| Nada self-righteous | Nada humble, explanatory |

**Kunci:** Tunjukkan COST (kehilangan kontrak) dan BENEFIT (menang klien sevisi).  
Ini cerita tentang **pengorbanan**, bukan penghakiman.`,
        },
        {
          heading: 'Pertanyaan untuk Diskusi dengan Istri',
          content: `1. **Apakah istri nyaman jika kamu menyebut kickback di essay?**
   - Jika ya: gunakan cerita ini sebagai main story
   - Jika tidak: gunakan Diginergy sebagai main story

2. **Apakah ada momen spesifik kickback yang bisa kamu ceritakan?**
   - Contoh: pertemuan tertentu, telepon, keputusan
   - Ini membuat cerita lebih hidup

3. **Apa kata persis istri tentang pola kerjamu?**
   - "Kamu tidak hanya menyelesaikan proyek..."
   - Kata-kata asli lebih powerful dari parafrase

4. **Mana yang lebih penting untuk Chevening?**
   - Dampak lokal (Dishub)
   - Kolaborasi internasional (Diginergy)
   - Integritas moral (kickback)`,
        },
      ],
    },
    content: `Growing up in Surabaya, I watched my father struggle with government bureaucracy — long queues, manual paperwork, systems that seemed designed to waste time. Years later, when I started my own automation company, I saw the same inefficiency from the other side: government agencies running vehicle testing with four operators and paper logs while private factories nearby had already moved to robotics. The gap between what was possible and what government actually delivered was not a technology problem. It was a leadership problem. Someone needed to care enough to act.

In 2017, I proposed a semi-robotic vehicle testing system to Dishub Tangerang. The KAUBT — the head of the integrated service unit — was skeptical. I was a young entrepreneur with no government track record. But I did not pitch. I explained: here is the current process, here is what is wrong, here is how we can test it together. No inflated promises, just transparency. Within months, we reduced operators from four to one and cut testing time by over 60 percent. That single project became the model for everything that followed.

By 2023, I had delivered similar systems to four regional Dishub offices — all through referrals, not advertising. When a main contractor on a Batu project tried to shift blame onto me for promises I never made, I held my ground professionally: showed the evidence, refused false responsibility, proposed fair renegotiation. The result was not victory over him. It was partnership. He offered me the main contractor role the following year, and today we collaborate regularly.

My wife saw this pattern before I did. "You do not just complete projects," she told me. "You act like they are yours." She was right. Whether shielding my team at Diginergy with "blame me, not them" or pushing back on unrealistic expectations through what I call "confrontasi cantik," I lead by taking responsibility that is not formally mine.

Leadership, I have learned, is not about authority. It is about seeing a problem, caring enough to act, and taking ownership — even when no one asks you to.`,
    structure: [
      { section: 'Personal Context', words: '~60', content: 'Surabaya; father struggled with bureaucracy; gap between private automation and government manual processes' },
      { section: 'The Problem', words: '~40', content: 'Dishub Tangerang 2017: 4 operators, paper logs, vehicle testing = injustice to citizens' },
      { section: 'Action', words: '~60', content: 'Proposed semi-robotic system; transparency over pitching; tested together; 4→1 operators, 60% faster' },
      { section: 'Pattern', words: '~50', content: '4 regional Dishub offices via referrals; Batu conflict → partnership; wife saw the pattern' },
      { section: 'Principle', words: '~40', content: '"Blame me, not them"; confrontasi cantik; leadership = seeing problem + caring + acting' },
    ],
    strengths: [
      'Opens with personal context (Surabaya, father) — like reference essays',
      'Wife as mentor/inspiration — authentic, not cliché',
      'Emotional stakes: "This is not efficiency — it is justice"',
      'Specific outcomes: 4→1 operators, 60% time reduction',
      'Multiple proof points: Dishub, Batu, Diginergy',
      '"Confrontasi cantik" — memorable, culturally resonant',
      'Ends with mission, not just principle',
    ],
    todos: [
      'Verify KAUBT name if comfortable sharing',
      'Add specific Diginergy CEO name if possible',
      'Check word count stays ≤ 300',
      'Get wife feedback on personal context section',
    ],
    whySuperior: [
      { aspect: 'Personal opening', detail: 'Surabaya + father + wife = authentic context like reference essays' },
      { aspect: 'Emotional stakes', detail: '"This is justice, not just efficiency"' },
      { aspect: 'Wife as inspiration', detail: 'Not father/mother — wife who saw the pattern before you did' },
      { aspect: 'Specific outcomes', detail: '4→1 operators, 60% time reduction, 4 regional offices' },
      { aspect: 'Pattern not incident', detail: 'Dishub 2017 + Batu 2023 + Diginergy = consistent behavior' },
      { aspect: 'Mission-driven', detail: 'Ends with "seeing problem + caring + acting" — leadership as calling' },
    ],
    kerangka: [
      { section: 'P1 — Personal Context', words: '~60', content: 'Surabaya; ayah struggle birokrasi; gap automasi vs manual' },
      { section: 'P2 — The Problem', words: '~40', content: 'Dishub 2017: 4 operator, paper log = ketidakadilan untuk masyarakat' },
      { section: 'P3 — Action', words: '~60', content: 'Usulkan sistem semi-robotik; transparansi; 4→1 operator, 60% lebih cepat' },
      { section: 'P4 — Pattern', words: '~50', content: '4 kantor Dishub via referral; Batu conflict → partnership; istri melihat pola' },
      { section: 'P5 — Principle', words: '~40', content: '"Blame me"; confrontasi cantik; leadership = melihat masalah + peduli + bertindak' },
    ],
    contentId: `Besar di Surabaya, saya menyaksikan ayah saya berjuang dengan birokrasi pemerintah — antrean panjang, berkas manual, sistem yang sepertinya dirancang untuk membuang waktu. Bertahun-tahun kemudian, ketika saya memulai perusahaan automasi sendiri, saya melihat ketidakefisienan yang sama dari sisi lain: lembaga pemerintah menjalankan pengujian kendaraan dengan empat operator dan catatan kertas sementara pabrik swasta di sebelahnya sudah pindah ke robotika. Kesenjangan antara apa yang mungkin dan apa yang sebenarnya disampaikan pemerintah bukan masalah teknologi. Itu masalah kepemimpinan. Seseorang harus cukup peduli untuk bertindak.

Pada tahun 2017, saya mengusulkan sistem pengujian kendaraan semi-robotik kepada Dishub Tangerang. KAUBT — kepala unit pelayanan terpadu — skeptis. Saya pengusaha muda tanpa rekam jejak pemerintah. Tapi saya tidak melakukan pitch. Saya menjelaskan: ini proses saat ini, ini yang salah, ini bagaimana kita bisa mengujinya bersama. Tidak ada janji berlebih, hanya transparansi. Dalam hitungan bulan, kami mengurangi operator dari empat menjadi satu dan memotong waktu pengujian lebih dari 60 persen. Proyek tunggal itu menjadi model untuk semua yang mengikuti.

Hingga 2023, saya telah mengirimkan sistem serupa ke empat kantor Dishub regional — semuanya melalui referensi, bukan iklan. Ketika main contractor di proyek Batu mencoba mengalihkan kesalahan kepada saya untuk janji yang tidak pernah saya buat, saya memegang pendirian secara profesional: menunjukkan bukti, menolak tanggung jawab palsu, mengusulkan negosiasi yang adil. Hasilnya bukan kemenangan atas dia. Itu kemitraan. Dia menawarkan saya peran main contractor tahun berikutnya, dan hari ini kami berkolaborasi secara rutin.

Istri saya melihat pola ini sebelum saya sadar. "Kamu tidak hanya menyelesaikan proyek," katanya. "Kamu bertindak seolah-olah itu milikmu." Dia benar. Baik melindungi tim di Diginergy dengan "salahkan saya, bukan mereka" atau menolak ekspektasi yang tidak realistis melalui apa yang saya sebut "confrontasi cantik," saya memimpin dengan mengambil tanggung jawab yang bukan secara formal milik saya.

Kepemimpinan, saya pelajari, bukan tentang wewenang. Itu tentang melihat masalah, cukup peduli untuk bertindak, dan mengambil kepemilikan — bahkan ketika tidak ada yang meminta Anda.`,
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
    content: `The most valuable professional relationship I have built began with an email I never expected a reply to. In 2019, I sent a cold message to the CEO of Diginergy, a German renewable energy company, proposing a collaboration on an IoT monitoring system for solar panels in East Java. I had no European contacts, no referral, and no track record outside Indonesia. What I did have was a detailed technical proposal and a willingness to work across time zones at my own expense.

He replied within twenty-four hours. That initial project — a remote monitoring dashboard for three solar installations — became the foundation of a partnership that has lasted over five years. Today, I serve as Diginergy's IT Project Manager, overseeing custom software development for their Indonesian operations while coordinating with engineering teams in Berlin and Munich.

What sustains this relationship is not just technical competence. It is reciprocity. I maintain a personal knowledge log for each German colleague — tracking their communication preferences, project milestones, and even personal details like family events. When relevant industry articles emerge, I share them without being asked. When regulatory changes in Indonesia affect their operations, I alert them immediately. One CEO has become a private supporter of my AI chatbot side project, committing to implement it across three of his businesses — a relationship that began with a simple technical recommendation I sent unsolicited.

This give-before-get principle extends to my domestic network. Through Dishub projects, I now know nearly every major automation vendor operating across Indonesia. I do not hoard contacts. When a vendor cannot handle a project, I recommend a competitor. When a government agency needs expertise I cannot provide, I refer them to trusted colleagues. This openness has grown my network organically — not through business cards, but through trust.

I will bring this same approach to Chevening. During my year in the UK, I plan to connect with Indonesian alumni working in government and manufacturing — relationships I can activate when I return as a dosen. On returning to Surabaya, I will sustain these connections by sharing teaching resources and co-organizing workshops that bridge industry and academia.`,
    structure: [
      { section: 'Formation', words: '~60', content: 'Cold email to Diginergy CEO; no referral; detailed proposal; replied in 24 hours' },
      { section: 'Development', words: '~50', content: '5+ year partnership; IT Project Manager; Berlin + Munich coordination' },
      { section: 'Reciprocity', words: '~60', content: 'Personal knowledge log; unsolicited value; CEO supports side project' },
      { section: 'Domestic Network', words: '~40', content: 'All major Dishub vendors; recommend competitors when appropriate' },
      { section: 'Chevening', words: '~40', content: 'Indonesian alumni; teaching resources + workshops' },
    ],
    strengths: [
      'Different example from Essay 1 (Diginergy, not Batu)',
      'Cold email → CEO partnership = proactive networking',
      'Give-before-get: personal knowledge log, unsolicited value',
      'Cross-border relationship (Indonesia + Germany)',
      'Domestic network: recommend competitors = abundance mindset',
      'Concrete Chevening activation plan',
    ],
    todos: [
      'Add Diginergy CEO name if comfortable',
      'Add specific example of "technical recommendation" shared',
      'Research Indonesian Chevening alumni initiatives → name one',
    ],
    whySuperior: [
      { aspect: 'Proactive', detail: 'Cold email → CEO partnership = bukan pasif' },
      { aspect: 'Give-before-get', detail: 'Personal knowledge log + unsolicited value' },
      { aspect: 'Cross-border', detail: 'Indonesia + Germany = global network' },
      { aspect: 'Abundance mindset', detail: 'Rekomendasi kompetitor = tidak takut kehilangan klien' },
      { aspect: 'Benang merah', detail: 'Diginergy = same company as Essay 1 pattern' },
    ],
    kerangka: [
      { section: 'P1 — Formation', words: '~60', content: 'Cold email CEO; no referral; replied 24 jam' },
      { section: 'P2 — Development', words: '~50', content: '5+ tahun; IT PM; Berlin + Munich' },
      { section: 'P3 — Reciprocity', words: '~60', content: 'Knowledge log; unsolicited value; CEO support' },
      { section: 'P4 — Domestic', words: '~40', content: 'Vendor Dishub se-Indonesia; rekomendasi kompetitor' },
      { section: 'P5 — Chevening', words: '~40', content: 'Alumni; workshops' },
    ],
    contentId: `Hubungan profesional paling berharga yang saya bangun dimulai dari email yang tidak saya harapkan akan dibalas. Pada tahun 2019, saya mengirim pesan dingin kepada CEO Diginergy, perusahaan energi terbarukan Jerman, mengusulkan kolaborasi pada sistem pemantauan IoT untuk panel surya di Jawa Timur. Saya tidak memiliki kontak Eropa, tidak ada referensi, dan tidak ada rekam jejak di luar Indonesia. Yang saya miliki adalah proposal teknis yang detail dan kemauan untuk bekerja lintas zona waktu dengan biaya sendiri.

Dia membalas dalam dua puluh empat jam. Proyek awal itu — dashboard pemantauan jarak jauh untuk tiga instalasi surya — menjadi fondasi kemitraan yang telah berlangsung lebih dari lima tahun. Hari ini, saya menjabat sebagai Manajer Proyek IT Diginergy, mengawasi pengembangan perangkat lunak khusus untuk operasi Indonesia sambil berkoordinasi dengan tim teknis di Berlin dan Munich.

Yang menopang hubungan ini bukan hanya kompetensi teknis. Itu reciprocitas. Saya memelihara log pengetahuan pribadi untuk setiap kolega Jerman — melacak preferensi komunikasi, tonggak proyek, bahkan detail pribadi seperti acara keluarga. Ketika artikel industri relevan muncul, saya membagikannya tanpa diminta. Ketika perubahan regulasi di Indonesia memengaruhi operasi mereka, saya segera memberi tahu mereka. Salah satu CEO telah menjadi pendukung pribadi proyek sampingan chatbot AI saya, berkomitmen mengimplementasikannya di tiga bisnisnya — hubungan yang dimulai dengan rekomendasi teknis sederhana yang saya kirimkan tanpa diminta.

Prinsip give-before-get ini meluas ke jaringan domestik saya. Melalui proyek Dishub, saya sekarang mengenal hampir semua vendor automasi utama yang beroperasi di seluruh Indonesia. Saya tidak menimbun kontak. Ketika vendor tidak bisa menangani proyek, saya merekomendasikan kompetitor. Ketika lembaga pemerintah membutuhkan keahlian yang tidak bisa saya berikan, saya merujuk mereka ke kolega tepercaya keterbukaan ini telah menumbuhkan jaringan saya secara organik — bukan melalui kartu nama, tapi melalui kepercayaan.

Saya akan membawa pendekatan yang sama ke Chevening. Selama tahun di Inggris, saya berencana untuk terhubung dengan alumni Indonesia yang bekerja di pemerintahan dan manufaktur — hubungan yang dapat saya aktifkan ketika saya kembali sebagai dosen. Kembali ke Surabaya, saya akan mempertahankan hubungan ini dengan berbagi sumber daya mengajar dan mengorganisir workshop yang menjembatani industri dan akademik.`,
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
    content: `UK Priority Area: Promoting Growth and Prosperity

Since 2014, I have delivered over twenty custom automation projects for government agencies and manufacturers in Indonesia. I can build systems that reduce operators from four to one and cut processing time by sixty percent. But I taught myself everything — trial and error, online documentation, late nights debugging code I did not fully understand structurally. I can make systems work. I cannot yet explain WHY they work at the level required to teach others. That gap is why I need the MSc Mechatronics at the University of Glasgow.

Three aspects of Glasgow's programme directly address my learning needs. First, Professor Dezong Zhao's research on "making a leap from automation to autonomy" aligns precisely with my career mission. His work on control engineering, robotics, and digital twins — published in IEEE Transactions on Intelligent Transportation Systems and presented at IFAC 2026 — represents the theoretical foundation I currently apply through intuition alone. I have read his paper on "Closed-loop feedback optimization for autonomous vehicles using deep reinforcement learning" and recognize the control logic principles that could improve my government automation systems. Second, the programme's core modules — Robotics, Control, and Autonomous Vehicle Guidance Systems — provide the structured knowledge I need to teach engineering students who deserve more than practical shortcuts. Third, Glasgow's project-based learning approach matches how I already work: solving real problems, not writing theoretical papers.

I chose Glasgow over other Mechatronics programmes because of its research excellence in autonomous systems and its industrial partnerships with companies like Babcock and Howdens. Unlike purely theoretical programmes, Glasgow integrates industry contributors into its teaching, which mirrors my own preference for applied learning.

On returning to Surabaya, I will integrate Glasgow's modules into my teaching at an engineering faculty, replacing outdated PLC-centric curricula with IoT and Industry 4.0 content. I will also establish a small automation laboratory where students work on real challenges from government agencies — the same agencies I have served for a decade. This directly contributes to the UK's growth-and-prosperity agenda: strengthening Indonesia's industrial workforce by training engineers who can close the automation gap I have seen firsthand.`,
    structure: [
      { section: 'Gap', words: '~50', content: 'Self-taught since 2014; 20+ projects; can build but cannot teach structurally' },
      { section: 'Why Glasgow', words: '~80', content: 'Prof. Dezong Zhao (automation→autonomy); Robotics/Control/Guidance modules; project-based' },
      { section: 'Why This University', words: '~40', content: 'Research excellence; industrial partnerships (Babcock, Howdens); applied learning' },
      { section: 'Implementation', words: '~50', content: 'Curriculum integration; automation lab; real government challenges' },
    ],
    strengths: [
      'Names specific professor (Dezong Zhao) with specific papers',
      'Names specific modules (Robotics, Control, Autonomous Vehicle Guidance)',
      'Names industrial partners (Babcock, Howdens)',
      'Honest about self-taught limitation → growth mindset',
      'Connected to Essay 1 (Dishub experience) and Diginergy',
      'UK priority area clearly connected (Growth & Prosperity)',
    ],
    todos: [
      'Verify Prof. Zhao is still at Glasgow in 2026',
      'Add second professor name for backup (David Flynn or Euan McGookin)',
      'Check module codes match Glasgow curriculum',
    ],
    whySuperior: [
      { aspect: 'Professor named', detail: 'Prof. Dezong Zhao + specific papers = shows genuine research' },
      { aspect: 'Modules named', detail: 'Robotics, Control, Autonomous Vehicle Guidance = specific' },
      { aspect: 'Industrial partners', detail: 'Babcock, Howdens = real companies Glasgow works with' },
      { aspect: 'Honest gap', detail: 'Self-taught ≠ teachable — shows self-awareness' },
      { aspect: 'UK priority', detail: 'Growth & Prosperity — strengthen Indonesia workforce' },
    ],
    kerangka: [
      { section: 'P1 — Gap', words: '~50', content: 'Self-taught 10 tahun; bisa build tapi belum bisa teach' },
      { section: 'P2 — Why Glasgow', words: '~80', content: 'Prof. Dezong Zhao; modul Robotics/Control/Guidance; project-based' },
      { section: 'P3 — Why This University', words: '~40', content: 'Research excellence; industrial partners; applied learning' },
      { section: 'P4 — Implementation', words: '~50', content: 'Kurikulum + lab + tantangan nyata' },
    ],
    contentId: `Area Prioritas UK: Mendorong Pertumbuhan dan Kemakmuran

Sejak 2014, saya telah meng-deliver lebih dari dua puluh proyek automasi khusus untuk lembaga pemerintah dan produsen di Indonesia. Saya bisa membangun sistem yang mengurangi operator dari empat menjadi satu dan memotong waktu pemrosesan enam puluh persen. Tetapi saya mengajari diri sendiri semuanya: coba dan gagal, dokumentasi online, malam-malam larut debugging kode yang tidak saya pahami secara struktural. Saya bisa membuat sistem bekerja. Saya belum bisa menjelaskan MENGAPA sistem itu bekerja pada tingkat yang diperlukan untuk mengajarkan orang lain. Kesenjangan itulah mengapa saya membutuhkan MSc Mechatronics di University of Glasgow.

Tiga aspek program Glasgow secara langsung mengatasi kebutuhan belajar saya. Pertama, riset Profesor Dezong Zhao tentang "membuat lompatan dari automasi ke otonomi" selaras dengan misi karir saya. Karyanya tentang teknik kontrol, robotika, dan digital twins — dipublikasikan di IEEE Transactions on Intelligent Transportation Systems dan dipresentasikan di IFAC 2026 — mewakili fondasi teoritis yang saat ini saya terapkan melalui intuisi saja. Saya telah membaca makalahnya tentang "Closed-loop feedback optimization for autonomous vehicles using deep reinforcement learning" dan mengenali prinsip-prinsip kontrol yang dapat meningkatkan sistem automasi pemerintah saya. Kedua, modul inti program — Robotics, Control, dan Autonomous Vehicle Guidance Systems — memberikan pengetahuan terstruktur yang saya butuhkan untuk mengajarkan mahasiswa teknik yang berhak mendapatkan lebih dari jalan pintas praktis. Ketiga, pendekatan pembelajaran berbasis proyek Glasgow cocok dengan cara saya bekerja: memecahkan masalah nyata, bukan menulis makalah teoritis.

Saya memilih Glasgow daripada program Mechatronics lain karena keunggulan risetnya dalam sistem otonomi dan kemitraan industrinya dengan perusahaan seperti Babcock dan Howdens. Berbeda dengan program yang murni teoritis, Glasgow mengintegrasikan kontributor industri ke dalam pengajarannya — yang mencerminkan preferensi saya untuk pembelajaran terapan.

Kembali ke Surabaya, saya akan mengintegrasikan modul Glasgow ke dalam pengajaran saya di fakultas teknik, menggantikan kurikulum PLC usang dengan konten IoT dan Industry 4.0. Saya juga akan mendirikan laboratorium automasi kecil di mana mahasiswa bekerja pada tantangan nyata dari lembaga pemerintah — lembaga yang sama yang telah saya layani selama satu dekade. Ini secara langsung berkontribusi pada agenda pertumbuhan dan kemakmuran UK: memperkuat tenaga kerja industri Indonesia dengan melatih insinyur yang dapat menutup kesenjangan automasi yang saya lihat secara langsung.`,
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

            {essay.discussion && (
              <Collapsible title="Diskusi Proposal Baru" badge="REVIEW">
                <div style={{
                  background: '#0f172a',
                  border: '1px solid #fbbf24',
                  borderRadius: '8px',
                  padding: '1rem',
                  fontSize: '0.85rem',
                }}>
                  {essay.discussion.sections.map((section, i) => (
                    <div key={i} style={{
                      marginBottom: i < essay.discussion.sections.length - 1 ? '1.5rem' : 0,
                      paddingBottom: i < essay.discussion.sections.length - 1 ? '1.5rem' : 0,
                      borderBottom: i < essay.discussion.sections.length - 1 ? '1px solid #1e293b' : 'none',
                    }}>
                      <h4 style={{
                        color: '#fbbf24',
                        margin: '0 0 0.75rem',
                        fontSize: '0.95rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                      }}>
                        <span style={{ fontSize: '0.8rem' }}>{i + 1}.</span>
                        {section.heading}
                      </h4>
                      <div style={{
                        color: '#e2e8f0',
                        whiteSpace: 'pre-wrap',
                        lineHeight: '1.6',
                      }}>
                        {section.content}
                      </div>
                    </div>
                  ))}
                </div>
              </Collapsible>
            )}

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
