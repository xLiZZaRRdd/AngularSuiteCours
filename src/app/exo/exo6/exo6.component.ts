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
  pokemonModel : Pokemon = {id : 0, name : "", weight : 0, height : 0, types : [], sprites : {front_default : "", back_default : ""}};
  pokemonList : Pokemon[] = [];
  offsetValue : number = 0;

constructor(private _pokeapiService : PokeApiService, private _http : HttpClient) {}

ngOnInit(): void {
  //La boring list contient 2 choses, d'abord le nom du pokémon et ensuite l'url vers sa page personnelle
  //Il a donc été nécessaire de séparer ces deux choses et de donner les valeurs dans la vraie pokemonList[]
  this._pokeapiService.getAll().subscribe((data : {results : {url : string}[]}) => 
    {
      //allo
      let obs : Observable<Pokemon>[] = [];

      data.results.forEach(elem => obs.push(this._pokeapiService.getDetails(elem.url)));
      forkJoin(obs).subscribe({
        next : (value) => {this.pokemonList = value}
      })
    });
}

  //ChangePokemon() sert à afficher les informations propres à chaque pokémon en fonction de l'id reçu
  changePokemon(id : number) : void {
    this.pokemonModel = this.pokemonList.find(element => element.id == id)?? this.pokemonModel;
  }

  //La méthode display permet d'afficher les 20 suivants ou les 20 précédents en fonction du bouton déclencheur
  display(offset : number) : void{
    this._pokeapiService.url = `https://pokeapi.co/api/v2/pokemon/?offset=${this.offsetValue+offset}&limit=20`;
    this._pokeapiService.getAll().subscribe((data : {results : any[]}) => {

      let obs : Observable<Pokemon>[] = [];
      data.results.forEach(elem => obs.push(this._pokeapiService.getDetails(elem.url)) );
      forkJoin(obs).subscribe({
        next : (value) => {this.pokemonList = value;},
        complete : () => {console.log(this.pokemonList)}
      })
    });
    this.offsetValue += offset;
  }
}