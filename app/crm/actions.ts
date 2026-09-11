'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { createClient } from '@/lib/supabase/server'
import { ACTIVE_COMPANY_COOKIE, getCrmSession } from '@/lib/crm/session'
import type { DayType, RdvType } from '@/lib/crm/database.types'

export async function switchCompany(slug: string) {
  const cookieStore = await cookies()
  cookieStore.set(ACTIVE_COMPANY_COOKIE, slug, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax',
  })
  revalidatePath('/crm', 'layout')
}

export async function signIn(email: string, password: string) {
  const supabase = await createClient()
  const { error } = await supabase.auth.signInWithPassword({ email, password })
  if (error) {
    return { error: error.message }
  }
  redirect('/crm/dashboard')
}

export async function signOut() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  redirect('/crm/login')
}

export interface LeadInput {
  prospect_name: string
  value: number
  city: string
  referent_name: string
  sector: string
  contact_date: string
  notes: string
}

export async function createLead(stageId: string, input: LeadInput) {
  const { userId, activeCompany } = await getCrmSession()
  const supabase = await createClient()

  const { error } = await supabase.from('leads').insert({
    company_id: activeCompany.id,
    stage_id: stageId,
    created_by: userId,
    assigned_to: userId,
    prospect_name: input.prospect_name,
    value: input.value,
    city: input.city || null,
    referent_name: input.referent_name || null,
    sector: input.sector || null,
    contact_date: input.contact_date || null,
    notes: input.notes || null,
  })

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/crm/pipeline')
  return { error: null }
}

export async function updateLead(leadId: string, input: Partial<LeadInput>) {
  const supabase = await createClient()
  const { error } = await supabase
    .from('leads')
    .update({
      ...(input.prospect_name !== undefined && { prospect_name: input.prospect_name }),
      ...(input.value !== undefined && { value: input.value }),
      ...(input.city !== undefined && { city: input.city || null }),
      ...(input.referent_name !== undefined && { referent_name: input.referent_name || null }),
      ...(input.sector !== undefined && { sector: input.sector || null }),
      ...(input.contact_date !== undefined && { contact_date: input.contact_date || null }),
      ...(input.notes !== undefined && { notes: input.notes || null }),
    })
    .eq('id', leadId)

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/crm/pipeline')
  return { error: null }
}

export async function moveLead(leadId: string, stageId: string, position: number) {
  const supabase = await createClient()
  const { error } = await supabase
    .from('leads')
    .update({ stage_id: stageId, position })
    .eq('id', leadId)

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/crm/pipeline')
  revalidatePath('/crm/dashboard')
  return { error: null }
}

export async function deleteLead(leadId: string) {
  const supabase = await createClient()
  const { error } = await supabase.from('leads').delete().eq('id', leadId)
  if (error) {
    return { error: error.message }
  }
  revalidatePath('/crm/pipeline')
  return { error: null }
}

export async function logRdv(leadId: string | null, rdvType: RdvType, sector: string | null) {
  const { userId, activeCompany } = await getCrmSession()
  const supabase = await createClient()

  const { error } = await supabase.from('rdv_log').insert({
    user_id: userId,
    company_id: activeCompany.id,
    lead_id: leadId,
    rdv_type: rdvType,
    rdv_date: new Date().toISOString().slice(0, 10),
    sector,
  })

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/crm/dashboard')
  revalidatePath('/crm/objectifs')
  revalidatePath('/crm/trophees')
  return { error: null }
}

export async function upsertPlanningEntry(
  userId: string,
  entryDate: string,
  dayType: DayType,
  companyId: string | null,
  note: string
) {
  const supabase = await createClient()
  const { error } = await supabase.from('planning_entries').upsert(
    {
      user_id: userId,
      entry_date: entryDate,
      day_type: dayType,
      company_id: dayType === 'travail' ? companyId : null,
      note: note || null,
    },
    { onConflict: 'user_id,entry_date' }
  )

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/crm/planning')
  return { error: null }
}
