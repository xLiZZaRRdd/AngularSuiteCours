import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/shared/models/shoppingListCaracs';

@Component({
  selector: 'app-shopping-list-enfant',
  templateUrl: './shopping-list-enfant.component.html',
  styleUrls: ['./shopping-list-enfant.component.scss']
})

export class ShoppingListEnfantComponent {
  //Note de Aude : Les input on en aura beaucoup pour balancer des infos, mais les Output on en aura généralement deux
  @Input() listToShow : Product[] = [] //Si jamais pas fournie alors elle est vide ( =[] )

  @Output() onDownQty : EventEmitter<Product> = new EventEmitter<Product>();
  @Output() onUpQty : EventEmitter<Product> = new EventEmitter<Product>();
  @Output() onDeleteProduct : EventEmitter<Product> = new EventEmitter<Product>();

  // Si le bouton s'occupe juste d'émettre, on a pas besoin de faire ceci en dessous
  // Par contre si le bouton faisait autre chose, il aurait fallu faire ça
  // Ou si l'output était en private aussi

  // sendDownQty(product : Product) : void
  // {
  //   this.onDownQty.emit(product);
  // }
}