import supabase from './supabase'

export default class ReadService {
  static async getAll(table) {
    // console.log('getAll')

    const { data, error } = await supabase.from(table).select('*')
    return [data, error]
  }

  static async getById(table, column, id) {
    const { data, error } = await supabase
      .from(table)
      .select('*')
      .eq(column, id)
    return [data, error]
  }
}
