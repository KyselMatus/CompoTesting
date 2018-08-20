import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ng4-intl-phone-prefix-input',
  templateUrl: './ng4-intl-phone-prefix-input.component.html',
  styleUrls: ['./ng4-intl-phone-prefix-input.component.css']
})
export class Ng4IntlPhonePrefixInputComponent implements OnInit {
  public phoneNumber: any;
  private myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      myPhone: ['', Validators.required]
    });
  }
}
