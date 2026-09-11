// Jours fériés français (métropole), calculés à la volée — pas de dépendance externe.

function easterSunday(year: number): Date {
  // Algorithme de Meeus/Jones/Butcher
  const a = year % 19
  const b = Math.floor(year / 100)
  const c = year % 100
  const d = Math.floor(b / 4)
  const e = b % 4
  const f = Math.floor((b + 8) / 25)
  const g = Math.floor((b - f + 1) / 3)
  const h = (19 * a + b - d - g + 15) % 30
  const i = Math.floor(c / 4)
  const k = c % 4
  const l = (32 + 2 * e + 2 * i - h - k) % 7
  const m = Math.floor((a + 11 * h + 22 * l) / 451)
  const month = Math.floor((h + l - 7 * m + 114) / 31)
  const day = ((h + l - 7 * m + 114) % 31) + 1
  return new Date(Date.UTC(year, month - 1, day))
}

function addDays(date: Date, days: number): Date {
  const d = new Date(date)
  d.setUTCDate(d.getUTCDate() + days)
  return d
}

function iso(date: Date): string {
  return date.toISOString().slice(0, 10)
}

/** Retourne l'ensemble des jours fériés français (format YYYY-MM-DD) pour une année donnée. */
export function frenchPublicHolidays(year: number): Set<string> {
  const easter = easterSunday(year)

  const dates = [
    new Date(Date.UTC(year, 0, 1)), // Jour de l'an
    addDays(easter, 1), // Lundi de Pâques
    new Date(Date.UTC(year, 4, 1)), // Fête du travail
    new Date(Date.UTC(year, 4, 8)), // Victoire 1945
    addDays(easter, 39), // Ascension
    addDays(easter, 50), // Lundi de Pentecôte
    new Date(Date.UTC(year, 6, 14)), // Fête nationale
    new Date(Date.UTC(year, 7, 15)), // Assomption
    new Date(Date.UTC(year, 10, 1)), // Toussaint
    new Date(Date.UTC(year, 10, 11)), // Armistice
    new Date(Date.UTC(year, 11, 25)), // Noël
  ]

  return new Set(dates.map(iso))
}

export function isWeekend(dateISO: string): boolean {
  const day = new Date(dateISO + 'T00:00:00Z').getUTCDay()
  return day === 0 || day === 6
}
