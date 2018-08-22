import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCreditCardsComponent } from './ngx-credit-cards.component';

describe('NgxCreditCardsComponent', () => {
  let component: NgxCreditCardsComponent;
  let fixture: ComponentFixture<NgxCreditCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxCreditCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCreditCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
