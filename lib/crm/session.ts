import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import type { Company, Profile } from './database.types'

const ACTIVE_COMPANY_COOKIE = 'crm_active_company'

export interface CrmSession {
  userId: string
  profile: Profile
  companies: Company[]
  activeCompany: Company
}

/**
 * Charge le profil courant + les sociétés auxquelles il a accès, et détermine
 * la société "active" (celle affichée dans le pipeline / dashboard / planning).
 * Pour les owners il n'y a qu'un choix possible ; pour les alternants c'est
 * piloté par le cookie posé par le CompanySwitcher.
 */
export async function getCrmSession(): Promise<CrmSession> {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/crm/login')
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  if (!profile) {
    redirect('/crm/login')
  }

  const { data: userCompanies } = await supabase
    .from('user_companies')
    .select('company_id, is_default, companies(*)')
    .eq('user_id', user.id)

  const companies = (userCompanies ?? [])
    .map((uc) => uc.companies as unknown as Company)
    .filter(Boolean)

  if (companies.length === 0) {
    redirect('/crm/login?error=no_access')
  }

  const cookieStore = await cookies()
  const requestedSlug = cookieStore.get(ACTIVE_COMPANY_COOKIE)?.value
  const defaultEntry = (userCompanies ?? []).find((uc) => uc.is_default)

  const activeCompany =
    companies.find((c) => c.slug === requestedSlug) ??
    companies.find((c) => c.id === defaultEntry?.company_id) ??
    companies[0]

  return {
    userId: user.id,
    profile,
    companies,
    activeCompany,
  }
}

export { ACTIVE_COMPANY_COOKIE }
