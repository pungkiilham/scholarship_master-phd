import { useState } from 'react'

const essays = [
  {
    id: 1,
    title: 'Leadership',
    subtitle: 'Bryan/Odoo/Robin — Shock Absorber Story',
    wordLimit: '100–300 words',
    wordCount: '~270',
    content: `When Robin, our senior manager, assigned Bryan — a developer who had just started learning Odoo — to handle a complex customisation for Posity and deliver within two weeks, I knew the expectation was unrealistic. As the project manager with hands-on development experience, I understood something Robin did not: Odoo is a large, interconnected ERP where each module depends on the others. A new developer needs months to grasp its core architecture before delivering even simple tasks, let alone the customisation Posity demanded.

Rather than simply rejecting Robin's directive, I chose to educate. I walked him through Odoo's technical structure — how modules interconnect, why the learning curve is steep, and what a realistic delivery timeline looked like. Simultaneously, I worked with Bryan to break down the task into achievable components, helping him focus on what he could deliver while building his understanding of the system.

The result was a recalibrated timeline. Bryan delivered the customisation successfully — not in two weeks, but after just over one month. Robin began to appreciate the complexity: at our next alignment meeting, he voluntarily brought a senior Odoo developer to support Bryan in answering Posity's technical questions. Within a month, Robin hired a mid-level developer to share Bryan's workload, allowing Bryan to focus on learning. After two months, Bryan was delivering simple customisations independently.

The deeper lesson was about my role as a mid-level manager. I learned that my duty is to act as a shock absorber — filtering unrealistic external expectations so my team can focus on delivering high-quality work. By standing up for my team, I earned their trust and respect. In subsequent meetings, they reciprocated — standing by me when Robin directed blame my way. That mutual loyalty, built through one honest conversation, is the leadership I will carry into every team I build.`,
    structure: [
      { section: 'Situation', words: '~35', content: 'Robin assigns Bryan (Odoo newbie) to Posity customisation, 2-week deadline' },
      { section: 'Challenge', words: '~50', content: 'Odoo complexity, interconnected modules, months-long learning curve' },
      { section: 'Action', words: '~60', content: 'Counter Robin with technical explanation; help Bryan break down tasks; propose realistic timeline' },
      { section: 'Result', words: '~80', content: 'Bryan delivered in >1 month; Robin adjusted expectations, brought senior dev, hired mid-level; Posity delivered' },
      { section: 'Reflection', words: '~45', content: 'Shock absorber role; earned team trust; reciprocal loyalty when team defended Pungki' },
    ],
    strengths: [
      'Leadership beyond authority (pushing back on senior)',
      'Technical credibility (Odoo structure knowledge)',
      'People management (protecting Bryan + helping him grow)',
      'Measurable outcomes (1 month vs 2 weeks, Robin hired support)',
      'Reciprocity (team defended Pungki → proof of effective leadership)',
      '"Shock absorber" — memorable, specific metaphor',
    ],
    todos: [
      'Verify Robin and Bryan are names you can mention (or use initials)',
      'Clarify what Posity is (client? company?) — add 1 phrase',
      'Check word count stays ≤ 300',
      'Ensure no overlap with examples in other 3 essays',
    ],
  },
  {
    id: 2,
    title: 'Networking',
    subtitle: 'Estro Hutama Client Network + Diginergy Knowledge Log',
    wordLimit: '100–300 words',
    wordCount: '~240',
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
          </div>
        ))}
      </div>

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
