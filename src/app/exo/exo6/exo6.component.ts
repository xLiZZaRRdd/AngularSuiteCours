import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { Pokemon } from 'src/app/shared/models/pokemon';
import { PokeApiService } from 'src/app/shared/services/poke-api.service';

@Component({
  selector: 'app-exo6',
  templateUrl: './exo6.component.html',
  styleUrls: ['./exo6.component.scss']
})
export class Exo6Component {

  boringList : any[] =  [];
  pokemonModel : Pokemon = {id : 0, name : "", weight : 0, height : 0, types : [], sprites : {front_default : "", back_default : ""}};
  pokemonList : Pokemon[] = [];
  offsetValue : number = 0;

constructor(private _pokeapiService : PokeApiService, private _http : HttpClient) {}

ngOnInit(): void {
  //La boring list contient 2 choses, d'abord le nom du pokémon et ensuite l'url vers sa page personnelle
  //Il a donc été nécessaire de séparer ces deux choses et de donner les valeurs dans la vraie pokemonList[]
  this._pokeapiService.getAll().subscribe(data => 
    {
      this.boringList = data.results;
      let obs : Observable<Pokemon>[] = [];

      this.boringList.forEach(elem => obs.push(this._pokeapiService.getDetails(elem.url)));
      forkJoin(obs).subscribe({
        next : (value) => {this.pokemonList = value},
        complete : () => {console.log(this.pokemonList)}
      })
    });
}


  //ChangePokemon() sert à afficher les informations propres à chaque pokémon en fonction de l'id reçu
  changePokemon(id : number) : void {
    let listTemp = this.pokemonList.filter(element => element.id == id);
    let pokemonTemp = listTemp[0];
    this.pokemonModel = {id : pokemonTemp.id, name : pokemonTemp.name, weight : pokemonTemp.weight, height : pokemonTemp.height, types : pokemonTemp.types, sprites : pokemonTemp.sprites};
  }


  //Les méthodes displayBefore() et displayAfter() prennent le même code, à la différence de l'url qui sera
  //incrémenté ou décrémenté de 20 pour naviguer dans les pokémons
  //Ces méthodes servent à afficher les 20 précédents ou les 20 suivants
  displayBefore() : void{
    this._pokeapiService.url = `https://pokeapi.co/api/v2/pokemon/?offset=${this.offsetValue - 20}&limit=20`;
    this._pokeapiService.getAll().subscribe(data => {
      this.boringList = data.results;
      let obs : Observable<Pokemon>[] = [];
      this.boringList.forEach(elem => obs.push(this._pokeapiService.getDetails(elem.url)) );
      forkJoin(obs).subscribe({
        next : (value) => {this.pokemonList = value;},
        complete : () => {console.log(this.pokemonList)}
      })
    });
    this.offsetValue -= 20;
  }

  displayAfter() : void 
  {
    this._pokeapiService.url = `https://pokeapi.co/api/v2/pokemon/?offset=${this.offsetValue + 20}&limit=20`
    this._pokeapiService.getAll().subscribe(data => {
      this.boringList = data.results;
      let obs : Observable<Pokemon>[] = [];
      this.boringList.forEach(elem => obs.push(this._pokeapiService.getDetails(elem.url)));

      forkJoin(obs).subscribe({
        next : (value) => {this.pokemonList = value;},
        complete : () => {console.log(this.pokemonList);}})
      })
    this.offsetValue += 20;
  }
}