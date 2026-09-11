export interface MonthCell {
  dateISO: string
  day: number
  inMonth: boolean
}

/** Grille de 6 semaines (42 jours), semaine commençant le lundi. */
export function getMonthGrid(year: number, monthIndex0: number): MonthCell[] {
  const first = new Date(Date.UTC(year, monthIndex0, 1))
  const firstWeekday = (first.getUTCDay() + 6) % 7 // 0 = lundi
  const start = new Date(first)
  start.setUTCDate(start.getUTCDate() - firstWeekday)

  const cells: MonthCell[] = []
  for (let i = 0; i < 42; i++) {
    const d = new Date(start)
    d.setUTCDate(start.getUTCDate() + i)
    cells.push({
      dateISO: d.toISOString().slice(0, 10),
      day: d.getUTCDate(),
      inMonth: d.getUTCMonth() === monthIndex0,
    })
  }
  return cells
}

export function monthLabel(year: number, monthIndex0: number): string {
  return new Intl.DateTimeFormat('fr-FR', { month: 'long', year: 'numeric' }).format(
    new Date(Date.UTC(year, monthIndex0, 1))
  )
}

export function parseMonthParam(param: string | undefined): { year: number; monthIndex0: number } {
  if (param && /^\d{4}-\d{2}$/.test(param)) {
    const [y, m] = param.split('-').map(Number)
    return { year: y, monthIndex0: m - 1 }
  }
  const now = new Date()
  return { year: now.getUTCFullYear(), monthIndex0: now.getUTCMonth() }
}

export function shiftMonthParam(year: number, monthIndex0: number, delta: number): string {
  const d = new Date(Date.UTC(year, monthIndex0 + delta, 1))
  return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, '0')}`
}
