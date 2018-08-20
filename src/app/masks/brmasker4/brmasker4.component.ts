import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { BrMaskModel } from 'brmasker4';

@Component({
  selector: 'app-brmasker4',
  templateUrl: './brmasker4.component.html',
  styleUrls: ['./brmasker4.component.css']
})
export class Brmasker4Component implements OnInit {
  @Input() data;

  public config;

  constructor() {}

  ngOnInit() {}

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges(changes: SimpleChanges) {
    const name: string = changes.data.currentValue;
    console.log('brmasker name: ', name);
    switch (name) {
      case 'RC':
        this.config = {
          mask: '000000/0000',
          len: 11
        };
        break;
      case 'cardValidity':
        this.config = {
          mask: '00/00',
          len: 5
        };
        break;
    }
  }
}
