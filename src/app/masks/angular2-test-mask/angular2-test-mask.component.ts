import { Component, OnInit, OnChanges, Input, SimpleChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-angular2-test-mask',
  templateUrl: './angular2-test-mask.component.html',
  styleUrls: ['./angular2-test-mask.component.css']
})
export class Angular2TestMaskComponent implements OnInit {

  @Input() data;

  public myModel = '';
  public mask;
  public sentValue;
  public placeholder = '';
  public isCardNo = false;

  constructor() {
    console.log('2input: ', this.data);

   }

  ngOnInit() {

  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges(changes: SimpleChanges) {
    const name: string = changes.data.currentValue;
    console.log('ng2tm name: ', name);
    switch (name) {
      case 'RC':
        this.mask = {
          mask: [/./, /./, /./, /./, /./, /./, '/', /./, /./, /./, /./],
          placeholderChar: '\u2000',
          guide: false,
        };
        break;
      case 'cardValidity':
        this.mask = {
          mask: [/[0-1]/, /\d/, '/', /\d/, /\d/]
        };
        break;
      case 'cardNumber':
        this.isCardNo = true;
        this.placeholder = '.... ..XX XXXX ....';
        this.mask = {
          mask: [/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, 'X', 'X', ' ', 'X', 'X', 'X', 'X', ' ', /\d/, /\d/, /\d/, /\d/],
          placeholderChar: '.',
          keepCharPositions: true
        };
    }
  }

  valuechange = (newValue) => {
    if (this.isCardNo) {
      let sentValue = this.myModel.replace(/[^0-9A-Z]/g, '');
      if (sentValue[sentValue.length - 1] === 'X') {
        sentValue = sentValue.substring(0, sentValue.length - 6);
      }
      console.log('Credit card no. sent value: ', sentValue);
    }
  }
}
