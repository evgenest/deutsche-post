'use server'

import { cookies } from 'next/headers'
import { createClient } from '../utils/supabase/server'

export async function insert(table, obj) {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { data, error } = await supabase
    .from(table)
    .insert([obj], { defaultToNull: 'true' })
    .select()
  return { data, error }
}
