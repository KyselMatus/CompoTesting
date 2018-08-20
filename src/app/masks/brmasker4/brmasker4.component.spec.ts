import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Brmasker4Component } from './brmasker4.component';

describe('Brmasker4Component', () => {
  let component: Brmasker4Component;
  let fixture: ComponentFixture<Brmasker4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Brmasker4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Brmasker4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
