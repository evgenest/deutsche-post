'use server'

import { cookies } from 'next/headers'
import { createClient } from '../utils/supabase/server'

export async function getAll(table) {
  // console.log('getAll')

  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { data, error } = await supabase.from(table).select('*')
  return [data, error]
}

export async function getById(table, column, id) {
  const { data, error } = await supabase.from(table).select('*').eq(column, id)
  return [data, error]
}
