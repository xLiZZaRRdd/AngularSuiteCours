import { Component } from '@angular/core';
import { ShoppingListCaracs } from 'src/app/shared/models/shoppingListCaracs';

@Component({
  selector: 'app-exo2',
  templateUrl: './exo2.component.html',
  styleUrls: ['./exo2.component.scss']
})
export class Exo2Component {

  shoppingList : ShoppingListCaracs[] = [
    {name : 'Patate', quantity : 12},
    {name : 'Salade', quantity : 27},
    {name : 'Haricot', quantity : 4},
    {name : 'Carotte', quantity : 66},
  ]

  addProductQuantity() : void{

  }  

  removeProductQuantity() : void{
    
  }

  deleteProduct() : void{
    
  }
}
