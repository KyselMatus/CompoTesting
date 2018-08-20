import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-la-input-mask',
  templateUrl: './la-input-mask.component.html',
  styleUrls: ['./la-input-mask.component.css']
})
export class LaInputMaskComponent implements OnInit {

  @Input() data;

  public config;

  constructor() { }

  ngOnInit() {
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges(changes: SimpleChanges) {
    const name: string = changes.data.currentValue;
    console.log('lainputmask name: ', name);
    switch (name) {
      case 'RC':
        this.config = {
          mask: '000000/0000',
          outputMask: true
        };
        break;
      case 'cardValidity':
        this.config = {
          mask: '00/00',
          outputMask: true
        };
        break;
    }
  }
}
