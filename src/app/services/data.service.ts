import { Injectable } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js'
import { environment } from 'src/environments/environment'
import { Palette } from '../models/palette'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private supabase: SupabaseClient

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey)
  }

  getPalettes() {
    return this.supabase
      .from('palette').select('*').order('likes', { ascending: false })
  }

  insertPalette(palette: Palette) {
    return this.supabase.from('palette').insert(
      [{
        bg: palette.bg,
        bgFocus: palette.bgFocus,
        primaryClear: palette.primaryClear,
        primaryDull: palette.primaryDull,
        primaryVisible: palette.primaryVisible,
        accentClear: palette.accentClear,
        accentDull: palette.accentDull,
        clear: palette.clear,
        dull: palette.dull,
        duller: palette.duller
      }]
    )
  }
}
