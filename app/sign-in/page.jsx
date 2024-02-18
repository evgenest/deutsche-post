import AnyChildPage from '@/components/interface/any_page/AnyChildPage'
import TextButton from '@/components/interface/buttons/TextButton'
import { createClient, signIn } from '@/utils/supabase/server'
import { createServerClient } from '@supabase/ssr'
import { cookies, headers } from 'next/headers'
import { redirect } from 'next/navigation'
// import 'dotenv/config'

export default async function Page() {
  // useEffect(() => {
  //   const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  //   const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  //   const supabase = createSupabase(supabaseUrl, supabaseAnonKey)
  //   const {
  //     data: getSessionData,
  //     error: getSessionError,
  //   } = async () => await supabase.auth.getSession()

  //   console.log(getSessionData)
  //   console.log(getSessionError)

  //   supabase.auth.onAuthStateChange(async (event, session) => {
  //     if (event == 'SIGNED_IN' || event == 'TOKEN_REFRESHED') {
  //       console.log('SIGNED_IN', session)
  //       const accessToken = session.access_token
  //       const refreshToken = session.refresh_token

  //       // Set the session to the Supabase client
  //       await supabase.auth.setSession({
  //         access_token: accessToken,
  //         refresh_token: refreshToken,
  //         auth: { persistSession: true },
  //       })
  //     }
  //   })
  // })

  // if (getSessionData.session == null) {
  //   const { data: signInWithOAuthData, error: signInWithOAuthError } =
  //     await supabase.auth.signInWithOAuth({
  //       provider: 'github',
  //     })
  // }

  // const supabase = createClient(
  //   cookies(),
  //   process.env.NEXT_PUBLIC_SUPABASE_URL,
  //   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  // )
  // const { data } = async () => await supabase.auth.getSession()

  // console.log(data)

  // if (data?.session) {
  //   redirect('/')
  // } else {
  //   const {
  //     data,
  //     error,
  //   } = async () =>
  //     await supabase.auth.signInWithOAuth({
  //       provider: 'github',
  //       options: {
  //         redirectTo: `{process.env.NEXT_PUBLIC_SUPABASE_URL}/auth/v1/callback`,
  //       },
  //     })

  //   console.log(data)
  //   console.log(error)
  // }

  const cookieStore = cookies()

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      get(name) {
        return cookieStore.get(name)?.value
      },
    },
    auth: {
      flowType: 'pkce',
    },
  })

  const headersList = headers()
  const baseUrl =
    headersList.get('x-forwarded-proto') + '://' + headersList.get('host')

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: {
      // redirectTo: `https://xlnrpecwcmdvktptfmzz.supabase.co/auth/v1/callback`,
      redirectTo: `${baseUrl}/auth/callback`,
      // redirectTo: 'http://localhost:3000/auth/callback'
    },
  })

  // const { data, error } = await supabase.auth.signInWithOtp({
  //   email: 'evgenest@onmail.com',
  //   options: {
  //     emailRedirectTo: 'http://localhost:3000/auth/callback'
  //   }
  // })

  if (data?.url) {
    redirect(data.url)
  }

  if (error) {
    console.error(error)
  }

  return (
    <AnyChildPage>
      <TextButton onClick={signIn}>Sign in with GitHub</TextButton>
    </AnyChildPage>
  )
}
