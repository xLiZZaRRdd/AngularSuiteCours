import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exo2Component } from './exo2.component';

describe('Exo2Component', () => {
  let component: Exo2Component;
  let fixture: ComponentFixture<Exo2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Exo2Component]
    });
    fixture = TestBed.createComponent(Exo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
