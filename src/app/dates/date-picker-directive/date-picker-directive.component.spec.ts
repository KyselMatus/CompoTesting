import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePickerDirectiveComponent } from './date-picker-directive.component';

describe('DatePickerDirectiveComponent', () => {
  let component: DatePickerDirectiveComponent;
  let fixture: ComponentFixture<DatePickerDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatePickerDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePickerDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
