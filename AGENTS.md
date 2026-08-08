# AGENTS.md — Scholarship Dashboard

Project: `scholarship-dashboard/` — a React (Vite) app that tracks scholarships + a dedicated Chevening application planner. All Chevening content lives in `src/data/cheveningData.js` and renders via `src/components/CheveningSection.jsx`.

## Commands
- `npm run dev` — start dev server
- `npm run build` — build (no lint/test scripts configured)
- No lint or test commands exist. To check changes, run `npm run build`.

## User profile (fixed facts, do not re-derive)
- Background: mechatronic engineering S1; **8+ years IT Project Manager** in the renewable energy sector.
- GPA: **3.24 / 4.00** — UK-equivalent is **borderline 2:1 / strong 2:2** (converter-dependent; some unis treat 3.2+ as First, others as high 2:2). Work experience is the main compensator.
- IELTS target: Academic 6.5 (6.0 each). TOEFL ITP not accepted.
- Career goal: become a **dosen (lecturer)** — open to Teknik Industri / Engineering Management, Teknik Elektro, or IT. University **rank matters** to them.
- Scholarship priority: **Chevening 2026/27** (closes 6 Oct 2026, 11:00 UTC). Also tracking VLIRUOS, Swedish Institute, Erasmus Mundus, DAAD EPOS, World Bank, etc. in `trackerData.js`.

## Chevening strategy (decision locked 8 Aug 2026)
- Rule: 3 eligible courses (taught MSc, full-time, autumn start, 9-12 mo). No hard rule against technical degrees, but the scored essays + admission realism favor a coherent leadership story.
- **Recommended Top 3 (Combo A):** York (MSc Engineering Management, Electronic Eng school, 2:2 + industrial exp, IELTS 6.0) + Loughborough (MSc Engineering Management, #1 UK engineering, 2:2, no fee) + Warwick WMG (MSc Engineering Business Management, 2:2 + 2+ yrs exp, £75 fee).
- Why: all 2:2-safe (GPA lottery-proof), all high-rank, management core builds on the 8-yr IT PM leadership narrative, and York/Royal Holloway are taught inside Electronic Engineering schools (keeps the Electro/STEM dosen lane open).
- Alternatives in `cheveningCombos`: Combo B adds Leicester "Advanced Electrical & Electronic Engineering with Management" (IET-accredited, electrical-titled); Combo C = zero fees (York + Loughborough + Royal Holloway); Combo D = mechatronics trio (QMUL Robotics+AI / Strathclyde Mechatronics / Glasgow Mechatronics) as pure Teknik Elektro/Mesin backup.
- **Avoid as primary picks:** strict-2:1 courses (QMUL Eng Mgmt, KCL, Bath, Bristol, Leeds, Nottingham) — discretionary at GPA 3.24.

## Data structure (cheveningData.js)
- `cheveningOverview` — dates, links, notes.
- `cheveningTimeline` — stage/date rows.
- `cheveningUniversities` — curated ~24 shortlist. Fields: `uni, course, cluster, start, entry, ielts, fee, verified, partner` (`partner` = "Chevening Partner" tag on portal).
- `cheveningPortalCourses` — full capture of the Chevening Course Finder ("Engineering Management", 4 pages, Aug 2026), **~108 entries**. Fields: `uni, school, course, degree, partner`. Update this when the user re-checks the portal.
- `cheveningExcluded` — ineligible/risky courses + reasons.
- `cheveningCombos` — strategy combos.
- `cheveningSecondOptions` — adjacent/backup majors by cluster.
- `cheveningEntryRequirements` — eligibility table.
- `cheveningGpaNote` — GPA-converter reality check rows.
- `CheveningSection.jsx` renders these as tables/cards; new data exports must be imported there if they should appear in the UI.

## Verified entry-requirement facts (already checked on course pages)
- York Eng Mgmt: 2:2 in Engineering (Electronics/Electrical/CS/Civil/Mechanical/Automation) or Eng Mgmt; industrial experience welcomed; IELTS 6.0 (5.5 each); IET-accredited; Sept, 12 mo.
- Royal Holloway Eng Mgmt: 2:2 in Science/Engineering/Technology/Management; IELTS 6.5; Electronic Eng dept, Central London; Sept, 12 mo.
- QMUL Eng Mgmt: 2:1 STEM pref; high 2:2 (55%+) case-by-case → treat as RISK.
- Brunel Eng Mgmt: 2:2 in Eng/Science/Maths/Tech; IELTS 6.0 (5.5 each); Sept + Jan; CUG 48th.
- Leicester Advanced Electrical & Electronic Eng with Management: good 2nd class (2:1 / strong 2:2) in Electrical/Electronic Eng; IET-accredited; IELTS 6.5; Sept, 12-16 mo.
- Surrey Infrastructure Eng & Management: 2:2 in civil/related engineering/management/science; IELTS 6.5 (6.0 W, 5.5 others); Oct + Feb.
- Warwick WMG EBM: 2:1 pref, 2:2 + 2+ yrs exp; IELTS 6.5 (6.0 each); £75 app fee.
- Loughborough Eng Mgmt: 2:2-friendly; IELTS 6.5 (6.0 each); no app fee.

## Conventions
- Data lives in `src/data/*.js`; components in `src/components/`.
- Fields on existing objects must be preserved (components map over them).
- When the user re-checks the Chevening portal, replace/augment `cheveningPortalCourses` and refresh the partner flags + verified entries.
