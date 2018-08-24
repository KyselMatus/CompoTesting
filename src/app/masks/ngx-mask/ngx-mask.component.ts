import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ngx-mask',
  templateUrl: './ngx-mask.component.html',
  styleUrls: ['./ngx-mask.component.css']
})
export class NgxMaskComponent implements OnInit {

  @Input() data;

  public mask;
  public customPatterns = {'1': { pattern: new RegExp('[0-1]')}, '0': { pattern: new RegExp('\d')}};
  public specChar = [];
  public dropSpecial = true;
  public placeholder = '';

  constructor() { }

  ngOnInit() {
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges(changes: SimpleChanges) {
    const name: string = changes.data.currentValue;
    console.log('ngx name: ', name);
    switch (name) {
      case 'RC':
        this.mask = '000000/0000';
        break;
      case 'cardValidity':
        this.mask = '00/00';
        break;
      case 'cardNumber':
        this.mask = 'AAAA AAXX XXXX AAAA';
        this.specChar = ['X', ' '];
        this.dropSpecial = false;
        this.placeholder = '---- --XX XXXX ----';
        break;
    }
  }
}
