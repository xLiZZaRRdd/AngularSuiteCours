import { Component } from '@angular/core';
import { Link } from '../../models/link';
import { User } from '../../models/user';
import { FakeAuthService } from '../../services/fake-auth.service';

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
      {title : 'Demo 4 : Input/Output', url : '/demo/demo4', children : [], isVisible : true},
      {title : 'Demo 5 : Les services', url : '/demo/demo5', children : [], isVisible : true},
      {title : 'Demo 6 : Les formulaires', url : '/demo/demo6', children : [], isVisible : true},
      {title : 'Demo 7 : Crud avec le Routing', url : '/demo/demo7', children : [], isVisible : true},
      {title : 'Demo 8 : HttpClient > Requêtes API', url : '/demo/demo8', children : [], isVisible : true},
      {title : 'Demo 9 : CRUD FAKE-API', url : '/demo/demo9', children : [], isVisible : true},
      {title : 'Demo 10 : Les Interceptors & Resolvers', url : '/demo/demo10', children : [], isVisible : true}
    ], isVisible : true},


    {title : 'Les Exos', url : '', children : 
    [
      {title : 'Exo 1 : Premier Exo - Chronomètre', url : '/exo/exo1', children : [], isVisible : true},
      {title : 'Exo 2 : Deuxième Exo - Shopping List(V1)', url : '/exo/exo2', children : [], isVisible : true},
      {title : 'Exo 3 : Troisième Exo - Shopping List(V2)', url : '/exo/exo3', children : [], isVisible : true},
      {title : 'Exo 4 : Quatrième Exo - Ajouter des films', url : '/exo/exo4', children : [], isVisible : true},
      {title : 'Exo 5 : Cinquième Exo - Fan de séries', url : '/exo/exo5', children : [], isVisible : true},
      {title : 'Exo 6 : Sixième Exo - Le Pokédex', url : '/exo/exo6', children : [], isVisible : true}
    ], isVisible : true},
  ]

  connectedUser : User | undefined;

  constructor(private _fakeAuthService : FakeAuthService) {

  }

  ngOnInit(): void {
      //Méthode qui se déclenche quand le composant apparait
      console.log("INIT NAVBAR");

      // On s'abonne à notre Observable
      this._fakeAuthService.$connectedUser.subscribe({
       next : (value) => {
         //Quand l'Observable change de valeur
         this.connectedUser = value;
         console.log("NEXT IN NAVBAR : ", value);
         
       },
       error : (err) => {
         //Quand l'Observable rencontre une erreur
         //On l'utilisera surtout pour les Observables de requête API
       },
       complete : () => {
         //A la fin de vie de l'Observable
         //Pour les observables qu'on fait nous même -> Il ne sera quasi jamais appelé puisqu'on veut que notre Observable existe tout le temps de la navigation sur le site
         //Pour les oservables de requête -> La fin de vie, c'est la fin de la requête
       }
      });

      // Si juste fonction anonyme -> d'office le next
      //this._fakeAuthService.$connectedUser.subscribe( () => {}); 
      
  }

  ngOnDestroy(): void {
      //Méthode qui se déclenche quand le composant disparait
      console.log("DESTROY NAVBAR");
      
  }

 //  display(link : Link) : void {
 //     link.isVisible = !link.isVisible;
 //     this.links.forEach(l => {
 //       if(l != link) {
 //         l.isVisible = false;
 //       }
 //     });
 //  }

 display(link : Link) : void {
   let wasVisible = link.isVisible;
   for(let i=0; i< this.linksList.length; i++) {
     this.linksList[i].isVisible = false;
   }
   link.isVisible = !wasVisible;
 }

 logout() : void {
   //Avant Obs
   // this.connectedUser = this._fakeAuthService.logout();
   //Après Obs
   this._fakeAuthService.logout();
 }
}

