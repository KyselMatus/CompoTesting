import { Component, OnInit } from '@angular/core';
import { IMyDpOptions } from 'mydatepicker';

@Component({
  selector: 'app-my-date-picker',
  templateUrl: './my-date-picker.component.html',
  styleUrls: ['./my-date-picker.component.css']
})
export class MyDatePickerComponent implements OnInit {

  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd.mm.yyyy',
    width: '200px',
  };

  // Initialized to specific date.
  public model: any;

  constructor() { }

  ngOnInit() {
  }

}
