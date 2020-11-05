import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mychild1Component } from './mychild1.component';

describe('Mychild1Component', () => {
  let component: Mychild1Component;
  let fixture: ComponentFixture<Mychild1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mychild1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mychild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
