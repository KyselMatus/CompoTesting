import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular2TestMaskComponent } from './angular2-test-mask.component';

describe('Angular2TestMaskComponent', () => {
  let component: Angular2TestMaskComponent;
  let fixture: ComponentFixture<Angular2TestMaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Angular2TestMaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Angular2TestMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
