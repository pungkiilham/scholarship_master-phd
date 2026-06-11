export const initialTracker = [
  { scholarship: 'vliruos-icp', name: 'VLIRUOS ICP Connect', country: 'Belgium', deadline: 'Feb 1, 2026', deadlineClass: 'critical', status: 'pending', docsReady: false, applied: false },
  { scholarship: 'swedish-institute', name: 'Swedish Institute', country: 'Sweden', deadline: 'Feb 25, 2026', deadlineClass: 'critical', status: 'pending', docsReady: false, applied: false },
  { scholarship: 'erasmus-mundus', name: 'Erasmus Mundus (Multiple Programs)', country: 'EU', deadline: 'Feb 2026', deadlineClass: 'warning', status: 'pending', docsReady: false, applied: false },
  { scholarship: 'daad-epos', name: 'DAAD EPOS', country: 'Germany', deadline: 'Rolling (varies)', deadlineClass: '', status: 'pending', docsReady: false, applied: false },
  { scholarship: 'world-bank', name: 'World Bank Scholarship', country: 'Global', deadline: 'Mar 30 - May 29, 2026', deadlineClass: '', status: 'pending', docsReady: false, applied: false },
  { scholarship: 'tu-delft', name: 'TU Delft Excellence', country: 'Netherlands', deadline: 'Dec 1, 2025 (2026) / 2027 intake TBA', deadlineClass: '', status: 'pending', docsReady: false, applied: false },
  { scholarship: 'holland', name: 'Holland Scholarship', country: 'Netherlands', deadline: 'May 1, 2026', deadlineClass: '', status: 'pending', docsReady: false, applied: false },
  { scholarship: 'orange-knowledge', name: 'Orange Knowledge Programme', country: 'Netherlands', deadline: 'Rolling', deadlineClass: '', status: 'pending', docsReady: false, applied: false },
  { scholarship: 'unimelb-grs', name: 'UniMelb Graduate Research Scholarship', country: 'Australia', deadline: 'Rolling (varies)', deadlineClass: '', status: 'pending', docsReady: false, applied: false },
]

export const statusOptions = [
  { value: 'pending', label: '⬜ Not Started', className: 'status-pending' },
  { value: 'progress', label: '🔄 In Progress', className: 'status-progress' },
  { value: 'ready', label: '📋 Docs Ready', className: 'status-ready' },
  { value: 'applied', label: '✅ Applied', className: 'status-applied' },
  { value: 'result', label: '🎉 Result', className: 'status-result' },
]
