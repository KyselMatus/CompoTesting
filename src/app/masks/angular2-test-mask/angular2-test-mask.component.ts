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
          mask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]
        };
        break;
      case 'cardValidity':
        this.mask = {
          mask: [/[0-1]/, /\d/, '/', /\d/, /\d/]
        };
        break;
      case 'cardNumber':
        this.mask = {
          mask: [/./, /./, /./, /./, ' ', /./, /./, 'XX XXXX ', /./, /./, /./, /./],
          placeholderChar: '\u2000',
          keepCharPositions: true
        };
    }
  }
}
