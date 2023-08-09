import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ShoppingListCaracs } from 'src/app/shared/models/shoppingListCaracs';

@Component({
  selector: 'app-shopping-list-enfant',
  templateUrl: './shopping-list-enfant.component.html',
  styleUrls: ['./shopping-list-enfant.component.scss']
})
export class ShoppingListEnfantComponent {

  @Input() shoppingListFromParent : ShoppingListCaracs[] = []

  @Output() onAddProductQtt  = new EventEmitter<number>();
  @Output() onRemoveProductQtt = new EventEmitter<number>();
  @Output() onDeleteProduct = new EventEmitter<undefined>();

  addProductQtt() : void
  {
    this.shoppingListFromParent.emit(shoppingListFromParent.quantity)
  } 
  
  removeProductQtt() : void
  {
    this.shoppingListFromParent.emit(shoppingListFromParent.quantity)
  } 
  
  deleteProduct() : void
  {
    this.shoppingListFromParent.emit(shoppingListFromParent.quantity)
  }
}
