import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-copy',
  templateUrl: './copy.component.html',
  styles: [
  ]
})
export class CopyComponent implements OnInit {
  @Input() variables: any;
  constructor() {
    console.log(this.variables);
  }


  ngOnInit(): void {
  }


}
