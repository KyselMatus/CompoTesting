import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaInputMaskComponent } from './la-input-mask.component';

describe('LaInputMaskComponent', () => {
  let component: LaInputMaskComponent;
  let fixture: ComponentFixture<LaInputMaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaInputMaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaInputMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
