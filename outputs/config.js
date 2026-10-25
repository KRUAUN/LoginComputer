// Configure this to match the published student roster sheet.
// Publish the roster tab as CSV (File > Share > Publish to web) and paste its CSV URL.
window.APP_CONFIG = Object.freeze({
  rosterCsvUrl: '/.netlify/functions/roster',
  // Required columns: grade, student name. These may be header names or zero-based column numbers.
  gradeColumn: 0,
  nameColumn: 1,
  // Values must match the grade select values in the form (ป.1 through ป.6).
  gradeAliases: { 'ป.1': ['ป.1', 'ป1', 'ประถมศึกษาปีที่ 1'], 'ป.2': ['ป.2', 'ป2', 'ประถมศึกษาปีที่ 2'], 'ป.3': ['ป.3', 'ป3', 'ประถมศึกษาปีที่ 3'], 'ป.4': ['ป.4', 'ป4', 'ประถมศึกษาปีที่ 4'], 'ป.5': ['ป.5', 'ป5', 'ประถมศึกษาปีที่ 5'], 'ป.6': ['ป.6', 'ป6', 'ประถมศึกษาปีที่ 6'] },
  refreshMinutes: 15
});


