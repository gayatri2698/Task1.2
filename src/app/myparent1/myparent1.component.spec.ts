import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myparent1Component } from './myparent1.component';

describe('Myparent1Component', () => {
  let component: Myparent1Component;
  let fixture: ComponentFixture<Myparent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Myparent1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Myparent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
