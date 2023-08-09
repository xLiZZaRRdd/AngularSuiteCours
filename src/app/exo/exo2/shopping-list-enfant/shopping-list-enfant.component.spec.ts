import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListEnfantComponent } from './shopping-list-enfant.component';

describe('ShoppingListEnfantComponent', () => {
  let component: ShoppingListEnfantComponent;
  let fixture: ComponentFixture<ShoppingListEnfantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingListEnfantComponent]
    });
    fixture = TestBed.createComponent(ShoppingListEnfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
