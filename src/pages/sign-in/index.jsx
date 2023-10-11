import AnyChildPage from '@/components/AnyChildPage'
import supabase from '@/utils/supabase'
import React from 'react'

const { data: getSessionData, error: getSessionError } =
  await supabase.auth.getSession()

console.log(getSessionData.session)
console.log(getSessionError)

supabase.auth.onAuthStateChange(async (event, session) => {
  if (event == 'SIGNED_IN' || event == 'TOKEN_REFRESHED') {
    console.log('SIGNED_IN', session)
    const accessToken = session.access_token
    const refreshToken = session.refresh_token

    // Set the session to the Supabase client
    await supabase.auth.setSession({
      access_token: accessToken,
      refresh_token: refreshToken,
      auth: { persistSession: true },
    })
  }
})

if (getSessionData.session == null) {
  const { data: signInWithOAuthData, error: signInWithOAuthError } =
    await supabase.auth.signInWithOAuth({
      provider: 'github',
    })

  console.log(signInWithOAuthData)
  console.log(signInWithOAuthError)
}

export default function SignIn() {
  return <AnyChildPage>SignIn</AnyChildPage>
}
