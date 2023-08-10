import { Component } from '@angular/core';
import { Link } from '../../models/link';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent
{

  //ngFor
  linksList : Link[] = [
    {title : 'Accueil', url : '/', children : [], isVisible : true},

    {title : 'Les Demos', url : '', children : 
    [
      {title : 'Demo 1 : Les Bindings', url : '/demo/demo1', children : [], isVisible : true},
      {title : 'Demo 2 : Les Pipes', url : '/demo/demo2', children : [], isVisible : true},
      {title : 'Demo 3 : Les Directives', url : '/demo/demo3', children : [], isVisible : true},
      {title : 'Demo 4 : Input/Output', url : '/demo/demo4', children : [], isVisible : true}
    ], isVisible : true},


    {title : 'Les Exos', url : '', children : 
    [
      {title : 'Exo 1 : Premier Exo - Chronomètre', url : '/exo/exo1', children : [], isVisible : true},
      {title : 'Exo 2 : Deuxième Exo - Shopping List(V1)', url : '/exo/exo2', children : [], isVisible : true}
    ], isVisible : true},
  ]

  display(parent : Link) : void{
    
    let wasVisible = parent.isVisible

    for(let i = 0; i < this.linksList.length; i++)
    {
        this.linksList[i].isVisible = false
    }
    parent.isVisible = !wasVisible
  }
}


