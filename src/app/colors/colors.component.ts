import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styles: [
  ]
})
export class ColorsComponent implements OnInit {
  @Input() theme: any;
  @Output() onThemeChange = new EventEmitter;
  @Input() selectedTheme: any;
  constructor() {

  }

  ngOnInit(): void {
  }

  onThemeClick() {
    this.onThemeChange.emit(this.theme);
  }

}
