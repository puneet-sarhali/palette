import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { delay } from 'rxjs';

@Component({
  selector: 'app-copy',
  templateUrl: './copy.component.html',
  styles: [
  ]
})
export class CopyComponent implements OnInit {
  @Input() variables: any;
  copyClicked = false;
  constructor() {

  }


  ngOnInit(): void {
  }

  copyMessage(val: string) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.copyClicked = true;
    setTimeout(() => { this.copyClicked = false }, 500)
  }

  pickTextColor(bgColor: string) {
    var color = (bgColor.charAt(0) === '#') ? bgColor.substring(1, 7) : bgColor;
    var r = parseInt(color.substring(0, 2), 16); // hexToR
    var g = parseInt(color.substring(2, 4), 16); // hexToG
    var b = parseInt(color.substring(4, 6), 16); // hexToB
    return (((r * 0.299) + (g * 0.587) + (b * 0.114)) > 186) ?
      true : false;
  }



}
