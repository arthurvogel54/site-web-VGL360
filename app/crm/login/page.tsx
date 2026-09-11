import { isSupabaseConfigured } from '@/lib/supabase/env'
import { LoginForm } from '@/components/crm/LoginForm'

export const metadata = {
  title: 'Connexion — CRM VGL360',
}

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-crm-bg px-4 py-16">
      <div className="w-full max-w-md bg-crm-card rounded-3xl p-8 md:p-10 border border-crm-border shadow-sm">
        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 rounded-2xl bg-crm-accent flex items-center justify-center">
            <span className="text-white font-black text-xl">V</span>
          </div>
        </div>
        <h1 className="text-2xl font-display font-extrabold text-center mb-1 text-crm-ink">
          CRM <span className="text-crm-accent">VGL360</span>
        </h1>
        <p className="text-center text-crm-muted text-sm mb-8">
          Pipeline, objectifs, planning &amp; trophées de l&apos;équipe.
        </p>

        {isSupabaseConfigured ? (
          <LoginForm />
        ) : (
          <div className="text-sm text-crm-ink/80 bg-crm-accent/5 border border-crm-accent/20 rounded-xl p-4 leading-relaxed">
            Le CRM n&apos;est pas encore connecté à Supabase. Renseignez{' '}
            <code className="text-crm-accent">NEXT_PUBLIC_SUPABASE_URL</code> et{' '}
            <code className="text-crm-accent">NEXT_PUBLIC_SUPABASE_ANON_KEY</code> dans{' '}
            <code className="text-crm-accent">.env.local</code>, puis suivez{' '}
            <code className="text-crm-accent">docs/CRM_SETUP.md</code>.
          </div>
        )}
      </div>
    </main>
  )
}
