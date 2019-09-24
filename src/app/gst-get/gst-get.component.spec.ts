import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GstGetComponent } from './gst-get.component';

describe('GstGetComponent', () => {
  let component: GstGetComponent;
  let fixture: ComponentFixture<GstGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GstGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GstGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
