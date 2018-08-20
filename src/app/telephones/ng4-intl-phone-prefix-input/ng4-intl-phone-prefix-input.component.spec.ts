import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng4IntlPhonePrefixInputComponent } from './ng4-intl-phone-prefix-input.component';

describe('Ng4IntlPhonePrefixInputComponent', () => {
  let component: Ng4IntlPhonePrefixInputComponent;
  let fixture: ComponentFixture<Ng4IntlPhonePrefixInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng4IntlPhonePrefixInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng4IntlPhonePrefixInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
