import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngx-intl-tel-input',
  templateUrl: './ngx-intl-tel-input.component.html',
  styleUrls: ['./ngx-intl-tel-input.component.css']
})
export class NgxIntlTelInputComponent implements OnInit {

  public preferredCountries =  ['cz', 'sk'];

  constructor() { }

  ngOnInit() {
  }

}
