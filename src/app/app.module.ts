import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxMaskModule } from 'ngx-mask';
import { TextMaskModule } from 'angular2-text-mask';
import { BrMasker4Module } from 'brmasker4';
import { LaInputMaskModule } from 'la-input-mask';
import { MyDatePickerModule } from 'mydatepicker';
import { MatDatepickerModule, MatNativeDateModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DlDateTimePickerDateModule } from 'angular-bootstrap-datetimepicker';
import { DatePickerModule } from 'date-picker-directive';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { InternationalPhoneModule } from 'ng4-intl-phone';
import { NgXCreditCardsModule } from 'ngx-credit-cards';

import { AppComponent } from './app.component';
import { NgxMaskComponent } from './masks/ngx-mask/ngx-mask.component';
import { Angular2TestMaskComponent } from './masks/angular2-test-mask/angular2-test-mask.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Brmasker4Component } from './masks/brmasker4/brmasker4.component';
import { LaInputMaskComponent } from './masks/la-input-mask/la-input-mask.component';
import { DatesComponent } from './dates/dates.component';
import { MyDatePickerComponent } from './dates/my-date-picker/my-date-picker.component';
import { MatDatePickerComponent } from './dates/mat-date-picker/mat-date-picker.component';
import { BootstrapDatetimePickerComponent } from './dates/bootstrap-datetime-picker/bootstrap-datetime-picker.component';
import { DatePickerDirectiveComponent } from './dates/date-picker-directive/date-picker-directive.component';
import { TelephonesComponent } from './telephones/telephones.component';
import { NgxIntlTelInputComponent } from './telephones/ngx-intl-tel-input/ngx-intl-tel-input.component';
import { Ng4IntlPhonePrefixInputComponent } from './telephones/ng4-intl-phone-prefix-input/ng4-intl-phone-prefix-input.component';
import { CardsComponent } from './cards/cards.component';
import { NgxCreditCardsComponent } from './cards/ngx-credit-cards/ngx-credit-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    NgxMaskComponent,
    Angular2TestMaskComponent,
    Brmasker4Component,
    LaInputMaskComponent,
    DatesComponent,
    MyDatePickerComponent,
    MatDatePickerComponent,
    BootstrapDatetimePickerComponent,
    DatePickerDirectiveComponent,
    TelephonesComponent,
    NgxIntlTelInputComponent,
    Ng4IntlPhonePrefixInputComponent,
    CardsComponent,
    NgxCreditCardsComponent,
  ],
  imports: [
    BrowserModule,
    NgxMaskModule.forRoot(),
    TextMaskModule,
    BrMasker4Module,
    LaInputMaskModule,
    MyDatePickerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    NoopAnimationsModule,
    DlDateTimePickerDateModule,
    DatePickerModule,
    BsDropdownModule.forRoot(),
    NgxIntlTelInputModule,
    InternationalPhoneModule,
    NgXCreditCardsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
