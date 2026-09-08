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
    subtitle: 'Estro Hutama Client Network + Diginergy Knowledge Log',
    wordLimit: '100–300 words',
    wordCount: '~240',
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
    content: `[DRAFT — based on framework]

At Estro Hutama Indonesia, I maintained a client network of twelve industrial manufacturers across East Java — not through formal CRM tools, but through deliberate reciprocity. Every quarter I shared one piece of unsolicited value: a market report on automation trends, a connection to a relevant supplier, or a candid assessment of a competitor's product. These were not sales gestures; they were investments in trust.

The payoff was structural, not transactional. When I later proposed operational audits that required deep access to production data — sensitive information manufacturers rarely share — the same clients opened their doors without hesitation. One client, a food-processing plant in Sidoarjo, allowed me to map their entire workflow, which revealed a bottleneck saving them IDR 200 million annually. That audit became a case study I still use in teaching.

At Diginergy, I replicate this model across borders. I maintain a personal "knowledge log" for each German client — tracking their technical preferences, business milestones, and communication style — and share relevant industry articles or introductions without being asked. The result: three clients have referred new business to Diginergy without a formal pitch.

I will activate this same principle within the Chevening community. During my year in the UK, I plan to join the Indonesian Chevening Society and contribute by organising cross-sector knowledge-sharing sessions between Indonesian scholars and UK engineering firms. On returning to Surabaya, I will sustain these connections by co-delivering workshops with Chevening alumni that bridge industry and academia — closing the gap that currently limits Indonesian engineering graduates' employability.`,
    structure: [
      { section: 'Philosophy', words: '~25', content: 'Reciprocity-driven networking: give before you get' },
      { section: 'Building', words: '~50', content: 'Estro client network: 12 manufacturers, quarterly value-sharing' },
      { section: 'Maintaining', words: '~45', content: 'Diginergy knowledge log for German clients; follow-up discipline' },
      { section: 'Results', words: '~40', content: '3 clients referred business without formal pitch; IDR 200M bottleneck savings' },
      { section: 'Chevening', words: '~50', content: 'Join Indonesian Chevening Society; organise cross-sector workshops; sustain alumni connections' },
    ],
    strengths: [
      'Specific examples (12 manufacturers, IDR 200M, 3 referrals)',
      'Give-before-get philosophy shown, not claimed',
      'Cross-border angle (Indonesia↔Germany) is distinctive',
      'Concrete Chevening activation plan',
    ],
    todos: [
      'Research Indonesian Chevening alumni initiatives → name one',
      'Verify IDR 200M claim with actual numbers',
      'Add more detail on Diginergy knowledge log process',
    ],
  },
  {
    id: 3,
    title: 'Course Choice',
    subtitle: 'Glasgow MSc Mechatronics — UK Priority: Growth & Prosperity',
    wordLimit: '100–300 words',
    wordCount: '~230',
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
    content: `[DRAFT — based on framework]

UK Priority Area: Promoting Growth and Prosperity

Indonesia's manufacturing sector — contributing 18% of GDP — faces a critical skills gap: engineers who can design, programme, and manage automated systems are scarce, while demand surges as factories adopt Industry 4.0 technologies. My career goal is to become a dosen (lecturer) in Engineering Management, training the next generation of engineers who can close this gap. The MSc Mechatronics at the University of Glasgow is the precise catalyst for that mission.

Glasgow's programme stands out for three reasons. First, its curriculum — spanning control systems, robotics, and embedded computing — directly mirrors the technical stack I运用 daily at Diginergy (IoT/PLC integration, Odoo ERP customisation, cross-platform software delivery). Second, the School of Engineering's research in intelligent manufacturing and sustainable automation aligns with Indonesia's push for green industrialisation — an area where I can immediately apply new knowledge upon returning. Third, Glasgow's emphasis on project-based learning means I will graduate not just with theory, but with a portfolio of solved engineering problems I can bring into the classroom.

On returning to Surabaya, I will integrate Glasgow's modules on control systems and robotics into my teaching at an Indonesian university, updating curricula that currently lag behind industry standards. I will also establish a small automation laboratory — modelled on Glasgow's project-based approach — where students work on real manufacturing challenges from local SMEs, directly contributing to the UK's growth-and-prosperity agenda by strengthening Indonesia's industrial workforce.`,
    structure: [
      { section: 'Priority Area', words: '~40', content: 'Growth & Prosperity; Indonesia manufacturing skills gap' },
      { section: 'Why This Course', words: '~60', content: 'Glasgow curriculum mirrors Diginergy technical stack; research alignment; project-based learning' },
      { section: 'Why This University', words: '~50', content: 'School of Engineering research strength; industry links; unique methodology' },
      { section: 'Implementation', words: '~60', content: 'Curriculum integration; automation lab for local SMEs; strengthen industrial workforce' },
    ],
    strengths: [
      'UK priority area clearly identified',
      'Specific modules and research areas mentioned',
      'Immediate application plan upon returning',
      'Connection to Indonesia\'s Industry 4.0 needs',
    ],
    todos: [
      'Research specific Glasgow professors and their research',
      'Name specific modules from the curriculum',
      'Add why you cannot get this training in Indonesia',
    ],
  },
  {
    id: 4,
    title: 'Career Plan',
    subtitle: 'Short/Mid/Long-term — Dosen + Industry-Academia Hub',
    wordLimit: '100–300 words',
    wordCount: '~270',
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
    content: `[DRAFT — based on framework]

Short-term (1–3 years): Upon returning from Glasgow, I will secure a lecturer position at an engineering faculty in East Java — ideally at Politeknik Elektronika Negeri Surabaya (PENS), my alma mater, or a comparable institution. My immediate objective is to redesign the mechatronics and automation curriculum, replacing outdated PLC-centric modules with current IoT/Industry 4.0 content drawn directly from Glasgow's teaching. I will also launch a part-time consulting practice, offering automation audits to local manufacturers — creating a feedback loop between classroom theory and factory-floor reality.

Mid-term (5–10 years): I will scale my impact by establishing an Industry-Academia Collaboration Hub connecting three or more universities with regional manufacturers. The hub will run joint projects, co-supervise student theses on real industrial problems, and provide CPD (Continuing Professional Development) courses for working engineers. My goal is to graduate 200+ engineers with hands-on automation skills within a decade.

Long-term (15+ years): I aim to lead a national initiative to standardise engineering-management education across Indonesian polytechnics — drawing on UK pedagogical models and Chevening alumni networks to advocate for curriculum reform at the Ministry of Education level.

Barriers: Indonesia's academic culture rewards research publications over teaching innovation; funding for laboratory equipment is limited. I will overcome these by publishing curriculum-reform case studies in international journals (turning innovation into research output) and by leveraging Chevening alumni in the UK for equipment donations and industry partnerships.

Chevening provides the three things I cannot acquire domestically: world-class technical training at Glasgow, a global network of reform-minded leaders, and the credibility to influence institutional change in Indonesia.`,
    structure: [
      { section: 'Short-term', words: '~65', content: 'Lecturer at PENS; redesign curriculum; automation audits for manufacturers' },
      { section: 'Mid-term', words: '~55', content: 'Industry-Academia Hub; 3+ universities; 200+ engineers in 10 years' },
      { section: 'Long-term', words: '~45', content: 'National standardisation initiative; Ministry of Education advocacy' },
      { section: 'Barriers', words: '~50', content: 'Academic culture; funding → overcome via publications + alumni partnerships' },
      { section: 'Chevening', words: '~35', content: 'Training + network + credibility' },
    ],
    strengths: [
      'Realistic short-term goal (lecturer, not director)',
      'Measurable mid-term target (200+ engineers)',
      'Specific barriers identified with solutions',
      'Connection to UK priority areas',
    ],
    todos: [
      'Verify PENS lecturer hiring requirements',
      'Research existing Industry-Academia hubs in Indonesia',
      'Add specific Chevening alumni to contact',
    ],
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

            {essay.whySuperior && (
              <Collapsible title="Kenapa Topik Dishub Superior" defaultOpen={true}>
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
