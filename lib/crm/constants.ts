import type { DayType } from './database.types'

export const DAY_TYPE_LABELS: Record<DayType, string> = {
  travail: 'Jour travaillé',
  weekend: 'Week-end',
  ferie: 'Jour férié',
  formation: 'Formation (CFA)',
}

export const DAY_TYPE_COLORS: Record<DayType, string> = {
  travail: '#6341B8',
  weekend: '#1E1E2E',
  ferie: '#FF3E8A',
  formation: '#F4D03F',
}

export const SECTOR_SUGGESTIONS = [
  'Agent immobilier',
  'Architecte',
  'École',
  'Notaire',
  'Artisan',
  'Promoteur',
  'Courtier',
  'Collectivité',
  'Autre',
]

export const DAILY_RDV_TARGET = 4

export const COMPANY_THEME_FALLBACK = '#6341B8'
