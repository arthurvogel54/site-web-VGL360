'use client'

import { useState, useTransition } from 'react'
import { signIn } from '@/app/crm/actions'
import { CrmButton } from '@/components/crm/Button'

export function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    startTransition(async () => {
      const result = await signIn(email, password)
      if (result?.error) {
        setError(result.error)
      }
    })
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label htmlFor="email" className="block text-xs uppercase tracking-wider text-crm-muted mb-1.5">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl bg-crm-bg border border-crm-border px-4 py-3 text-crm-ink text-sm focus:border-crm-accent focus:outline-none"
          placeholder="prenom@vgl360.fr"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-xs uppercase tracking-wider text-crm-muted mb-1.5">
          Mot de passe
        </label>
        <input
          id="password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-xl bg-crm-bg border border-crm-border px-4 py-3 text-crm-ink text-sm focus:border-crm-accent focus:outline-none"
          placeholder="••••••••"
        />
      </div>

      {error && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
          {error}
        </p>
      )}

      <CrmButton type="submit" variant="primary" className="w-full justify-center mt-2" disabled={isPending}>
        {isPending ? 'Connexion…' : 'Se connecter'}
      </CrmButton>
    </form>
  )
}
