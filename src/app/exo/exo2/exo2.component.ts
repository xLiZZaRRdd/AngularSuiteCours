import { Component } from '@angular/core';
import { Product } from 'src/app/shared/models/shoppingListCaracs';

@Component({
  selector: 'app-exo2',
  templateUrl: './exo2.component.html',
  styleUrls: ['./exo2.component.scss']
})
export class Exo2Component 
{
  productsList : Product[] = [
    {name : 'Patate', quantity : 12},
    {name : 'Salade', quantity : 27},
    {name : 'Haricot', quantity : 4},
    {name : 'Carotte', quantity : 66},
  ]

  productName : string = '';

  addProduct() : void
  {
    //Si le produit n'est pas vide : (trim enlève les espaces à gauche et à droite dans l'input, attention n'enlève pas les espaces au milieu d'une chaine de caractères)
    if(this.productName.trim().length > 0)
    {

      //Si le produit est déjà dans la liste
      //La méthode find, renvoie le produit si il est trouvé, sinon il renvoie undefined
      let foundProduct : Product | undefined = this.productsList.find(p => p.name.trim().toLowerCase() === this.productName.trim().toLowerCase());
      //Si le produit n'est pas undefined
      if(foundProduct)
      {
        foundProduct.quantity++
      }
      //Sinon, on l'ajoute dans la liste
      else
      {
        this.productsList.push( {name : this.productName.trim(), quantity : 1});
      }
      //Une fois le produit ajouté, l'input html se vide
      this.productName = ''; 
    }
  }  

  downProductQty(product : Product) : void
  {
    product.quantity--;
    if(product.quantity === 0)
    {
      this.deleteProduct(product);
    }
  }

  upProductQty(product : Product) : void
  {
    product.quantity++;
  }

  deleteProduct(product : Product) : void
  {
    //On remplace la liste par notre liste filtrée (sans le produit qui est égal à celui reçu en param)
    this.productsList = this.productsList.filter(p => p !== product)
  }
}
