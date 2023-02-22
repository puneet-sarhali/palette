import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styles: [
  ]
})
export class ColorsComponent implements OnInit {
  @Input() theme: any;
  @Input() savedPalettes!: Array<number>;
  @Output() onThemeChange = new EventEmitter;
  @Output() onSaved = new EventEmitter;
  @Input() selectedTheme: any;
  isSaved = false;
  constructor() {

  }

  ngOnInit(): void {
    if (this.savedPalettes.includes(this.theme['id'])) {
      this.isSaved = true;
    }
  }

  onThemeClick() {
    this.onThemeChange.emit(this.theme);
  }

  onSavedOutput(id: number) {
    this.onSaved.emit(id);
  }



}
