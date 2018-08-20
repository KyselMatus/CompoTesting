import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapDatetimePickerComponent } from './bootstrap-datetime-picker.component';

describe('BootstrapDatetimePickerComponent', () => {
  let component: BootstrapDatetimePickerComponent;
  let fixture: ComponentFixture<BootstrapDatetimePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapDatetimePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapDatetimePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
