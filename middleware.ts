import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'
import { SUPABASE_ANON_KEY, SUPABASE_URL, isSupabaseConfigured } from '@/lib/supabase/env'

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({ request })

  const isCrmRoute = request.nextUrl.pathname.startsWith('/crm')
  const isLoginRoute = request.nextUrl.pathname === '/crm/login'
  const isAuthCallback = request.nextUrl.pathname === '/crm/auth/callback'

  if (!isCrmRoute || !isSupabaseConfigured) {
    return response
  }

  const supabase = createServerClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    cookies: {
      getAll() {
        return request.cookies.getAll()
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
        response = NextResponse.next({ request })
        cookiesToSet.forEach(({ name, value, options }) =>
          response.cookies.set(name, value, options)
        )
      },
    },
  })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user && !isLoginRoute && !isAuthCallback) {
    const redirectUrl = request.nextUrl.clone()
    redirectUrl.pathname = '/crm/login'
    redirectUrl.searchParams.set('next', request.nextUrl.pathname)
    return NextResponse.redirect(redirectUrl)
  }

  if (user && isLoginRoute) {
    const redirectUrl = request.nextUrl.clone()
    redirectUrl.pathname = '/crm/dashboard'
    redirectUrl.search = ''
    return NextResponse.redirect(redirectUrl)
  }

  return response
}

export const config = {
  matcher: ['/crm/:path*'],
}
