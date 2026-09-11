import { getCrmSession } from '@/lib/crm/session'
import { createClient } from '@/lib/supabase/server'
import { PipelineBoard } from '@/components/crm/PipelineBoard'

export const metadata = {
  title: 'Affaires en cours — CRM VGL360',
}

export default async function PipelinePage() {
  const { activeCompany, profile } = await getCrmSession()
  const supabase = await createClient()

  const [{ data: stages }, { data: leads }, { data: profiles }] = await Promise.all([
    supabase
      .from('pipeline_stages')
      .select('*')
      .eq('company_id', activeCompany.id)
      .order('position'),
    supabase
      .from('leads')
      .select('*')
      .eq('company_id', activeCompany.id)
      .order('position'),
    supabase.from('profiles').select('id, full_name, avatar_color'),
  ])

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-display font-extrabold text-crm-ink">
          Affaires en cours — <span style={{ color: activeCompany.theme_color }}>{activeCompany.name}</span>
        </h1>
        <p className="text-crm-muted text-sm mt-1">
          Les affaires que vous négociez, de la première discussion à la signature.
        </p>
      </div>

      <PipelineBoard
        stages={stages ?? []}
        leads={leads ?? []}
        profiles={profiles ?? []}
        currentUserId={profile.id}
      />
    </div>
  )
}
