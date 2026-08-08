export const cheveningOverview = {
  title: 'Chevening Scholarship 2026/27',
  openDate: '4 August 2026',
  closeDate: '6 October 2026 (11:00 UTC)',
  link: 'https://www.chevening.org/scholarship/indonesia/',
  applyLink: 'https://www.chevening.org/apply/',
  courseFinder: 'https://www.chevening.org/scholarships/find-a-course/',
  notes: [
    'Fully funded 1-year taught Master\'s at ANY UK university',
    'Pick 3 eligible courses (full-time, taught MSc, autumn start, 9-12 months)',
    'No application fee from Chevening itself',
    'Unconditional offer from ≥1 course needed by ~July 2027',
  ],
}

export const cheveningTimeline = [
  { stage: 'Applications open', date: '4 August 2026' },
  { stage: 'Applications close', date: '6 October 2026, 11:00 UTC' },
  { stage: 'Eligibility sift', date: 'October 2026' },
  { stage: 'Reading committee', date: 'Oct 2026 - Jan 2027' },
  { stage: 'Interviews (Indonesia)', date: '~February 2027' },
  { stage: 'Unconditional offer deadline', date: '~July 2027' },
  { stage: 'Study begins', date: 'September/October 2027' },
]

export const cheveningUniversities = [
  {
    uni: 'University of Warwick (WMG)',
    course: 'MSc Engineering Business Management',
    cluster: 'Management',
    start: '28 Sep',
    entry: '2:1 pref; 2:2 + 2+ yrs exp considered',
    ielts: '6.5 (6.0 each)',
    fee: '£75 app fee',
    verified: true,
  },
  {
    uni: 'University of Birmingham',
    course: 'MSc Advanced Engineering Management',
    cluster: 'Management',
    start: 'September',
    entry: '2:2 accepted (Engineering/Science/Technology)',
    ielts: '6.5',
    fee: 'No app fee',
    verified: true,
  },
  {
    uni: 'Loughborough University',
    course: 'MSc Engineering Management',
    cluster: 'Management',
    start: 'September',
    entry: '2:2-friendly',
    ielts: '6.5 (6.0 each)',
    fee: 'No app fee',
    verified: true,
  },
  {
    uni: 'University of Sheffield',
    course: 'MSc Advanced Manufacturing Technologies',
    cluster: 'Technical',
    start: 'September',
    entry: '2:1; Mechatronics module-eligible',
    ielts: '6.5 (6.0 each)',
    fee: 'No app fee',
    verified: true,
  },
  {
    uni: 'University of Bristol',
    course: 'MSc Engineering with Management (Intelligent Manufacturing)',
    cluster: 'Technical',
    start: 'September',
    entry: 'Strong lower 2:2 (55%+); Mechatronic accepted; ATAS needed',
    ielts: '6.5',
    fee: 'Varies (check)',
    verified: true,
  },
  {
    uni: 'University of Liverpool',
    course: 'MSc Advanced Manufacturing Systems and Technology',
    cluster: 'Technical',
    start: 'September (also Jan)',
    entry: '2:2 accepted (Engineering/Science)',
    ielts: '6.5',
    fee: 'No app fee',
    verified: true,
  },
  {
    uni: 'UCL',
    course: 'MSc Technology Management',
    cluster: 'Management',
    start: 'September',
    entry: '2:2 + 2+ yrs work experience considered',
    ielts: '6.5-7.0',
    fee: 'Check',
    verified: true,
  },
  {
    uni: 'University of Manchester',
    course: 'MSc Management of Projects',
    cluster: 'Management',
    start: 'September',
    entry: '2:1',
    ielts: '6.5-7.0',
    fee: 'None confirmed',
    verified: true,
  },
  {
    uni: 'University of Manchester',
    course: 'MSc Engineering Project Management',
    cluster: 'Management',
    start: 'September',
    entry: '2:1',
    ielts: '6.5-7.0',
    fee: 'None confirmed',
    verified: true,
  },
  {
    uni: 'University of Leeds',
    course: 'MSc Engineering Project Management',
    cluster: 'Management',
    start: 'September',
    entry: 'Check course page',
    ielts: '6.5',
    fee: 'Check',
    verified: true,
  },
  {
    uni: 'University of Sussex',
    course: 'MSc Project Management',
    cluster: 'Management',
    start: 'September',
    entry: 'Check course page',
    ielts: '6.5',
    fee: 'None confirmed',
    verified: true,
  },
  {
    uni: 'University of Nottingham',
    course: 'MSc Industrial Engineering and Operations Management',
    cluster: 'Operations',
    start: 'September',
    entry: '2:1',
    ielts: '6.5',
    fee: 'Check',
    verified: true,
  },
  {
    uni: 'Warwick (WMG)',
    course: 'MSc Programme and Project Management',
    cluster: 'Operations',
    start: '28 Sep',
    entry: '2:1 pref; 2:2 + exp',
    ielts: '6.5 (6.0 each)',
    fee: '£75 app fee',
    verified: true,
  },
  {
    uni: 'Loughborough University',
    course: 'MSc Advanced Manufacturing Engineering and Management',
    cluster: 'Technical',
    start: 'September',
    entry: '2:2-friendly',
    ielts: '6.5 (6.0 each)',
    fee: 'No app fee',
    verified: true,
  },
]

export const cheveningExcluded = [
  { uni: 'Cranfield', course: 'MSc Digital and Technology Solutions', reason: 'Part-time, 24 months (not 9-12 mo)' },
  { uni: 'Cranfield', course: 'MSc Engineering and Management of Manufacturing Systems', reason: 'Discontinued' },
  { uni: 'Various', course: 'January-start intakes', reason: 'Chevening requires autumn start' },
  { uni: 'Various', course: 'MSc(Res) variants', reason: 'Research-based, not taught MSc' },
]

export const cheveningCombos = [
  {
    name: 'Combo 1 — Management-leaning (safest, GPA-friendly)',
    courses: [
      'MSc Engineering Business Management — Warwick (WMG)',
      'MSc Advanced Engineering Management — Birmingham',
      'MSc Engineering Management — Loughborough',
    ],
  },
  {
    name: 'Combo 2 — Mix (current plan)',
    courses: [
      'MSc Engineering Business Management — Warwick (WMG)',
      'MSc Engineering Management — Loughborough',
      'MSc Advanced Manufacturing Technologies — Sheffield',
    ],
  },
  {
    name: 'Combo 3 — Technical-leaning',
    courses: [
      'MSc Advanced Manufacturing Technologies — Sheffield',
      'MSc Engineering with Management (Intelligent Manufacturing) — Bristol',
      'MSc Advanced Manufacturing Systems and Technology — Liverpool',
    ],
  },
]

export const cheveningSecondOptions = [
  {
    cluster: 'Business / Management',
    courses: [
      { uni: 'Sussex', course: 'MSc Management', entry: 'Check page', ielts: '6.5' },
      { uni: 'Loughborough / Newcastle', course: 'MSc Innovation and Entrepreneurship', entry: '2:2-friendly', ielts: '6.5' },
      { uni: 'Loughborough / Warwick', course: 'MSc Business Analytics', entry: '2:1 pref', ielts: '6.5-7.0' },
    ],
  },
  {
    cluster: 'Data / Digital / AI',
    courses: [
      { uni: 'Warwick (WMG)', course: 'MSc Applied Artificial Intelligence', entry: '2:1 pref; 2:2 + exp', ielts: '6.5' },
      { uni: 'Loughborough / Sussex / Manchester', course: 'MSc Data Science / AI', entry: '2:1', ielts: '6.5-7.0' },
      { uni: 'Warwick (WMG)', course: 'MSc e-Business Management', entry: '2:1 pref; 2:2 + exp', ielts: '6.5' },
    ],
  },
  {
    cluster: 'Energy / Sustainability',
    courses: [
      { uni: 'Loughborough', course: 'MSc Renewable Energy Systems Technology', entry: '2:2-friendly', ielts: '6.5' },
      { uni: 'Nottingham / Exeter', course: 'MSc Sustainable Energy', entry: '2:1', ielts: '6.5' },
    ],
  },
]

export const cheveningEntryRequirements = [
  { item: 'Citizenship', value: 'Indonesia (resident of eligible/ODA country)' },
  { item: 'Undergraduate', value: 'Qualifies for UK Master\'s; finished ≥2 yrs before 6 Oct 2026' },
  { item: 'Work experience', value: '≥2 years / 2,800 hrs — you have 8+ ✓' },
  { item: 'Return commitment', value: 'Return to Indonesia for 2+ years after scholarship' },
  { item: 'UK scholarship history', value: 'Never studied in UK on UK-gov funding' },
  { item: 'Courses', value: '3 eligible UK courses (taught MSc, FT, autumn, 9-12 mo)' },
  { item: 'University offer', value: 'Unconditional offer from ≥1 course by ~July 2027' },
  { item: 'IELTS (university req)', value: 'IELTS Academic 6.5 (6.0 each) or TOEFL iBT 90+ — TOEFL ITP NOT accepted' },
]
