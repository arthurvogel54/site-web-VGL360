import type { ObjectiveTier } from './database.types'

export interface TierProgress {
  tier: ObjectiveTier
  count: number
  target: number
  progress: number // 0..1
  achieved: boolean
}

export function computeTierProgress(
  tiers: ObjectiveTier[],
  cumulativeCount: number,
  rolling3MonthsCount: number
): TierProgress[] {
  return tiers
    .slice()
    .sort((a, b) => a.position - b.position)
    .map((tier) => {
      const count = tier.period === '3_months' ? rolling3MonthsCount : cumulativeCount
      const progress = Math.min(1, count / tier.threshold_rdv)
      return {
        tier,
        count,
        target: tier.threshold_rdv,
        progress,
        achieved: count >= tier.threshold_rdv,
      }
    })
}

export function threeMonthsAgoISODate(): string {
  const d = new Date()
  d.setMonth(d.getMonth() - 3)
  return d.toISOString().slice(0, 10)
}
