import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-picker-directive',
  templateUrl: './date-picker-directive.component.html',
  styleUrls: ['./date-picker-directive.component.css']
})
export class DatePickerDirectiveComponent implements OnInit {

  dateval: string = null;

  constructor() { }

  ngOnInit() {
  }

  dateSelected(val) {
    this.dateval = val;
  }

}
