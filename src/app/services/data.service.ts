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

  incrementLike(id: number) {
    return this.supabase.rpc('increment', { row_id: id });
  }

  addToSaved(paletteId: number) {
    let palettes = localStorage.getItem("palettes")
    if (palettes) {
      let palettesArr = JSON.parse(palettes) as Array<number>;
      palettesArr.push(paletteId);
      localStorage.setItem('palettes', JSON.stringify(palettesArr));
    } else {
      localStorage.setItem('palettes', JSON.stringify([paletteId]));
    }
  }

  getSavedPalettes() {
    const palettes = localStorage.getItem("palettes")
    if (palettes)
      return JSON.parse(palettes);
  }
}
