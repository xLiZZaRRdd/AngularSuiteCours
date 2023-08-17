import { Injectable } from '@angular/core';
import { Track } from '../models/track';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private _tracks : Track[] = [
    { id: 1, title : 'Art of Dying', duration : 595, cover : 'https://i.ytimg.com/vi/iJqVjglvnoc/maxresdefault.jpg', artists : ['Gojira'], genre : 'Metal'},
    { id: 2, title : 'Californication', duration : 322, cover : 'https://upload.wikimedia.org/wikipedia/en/d/df/RedHotChiliPeppersCalifornication.jpg', artists : ['Red Hot Chili Peppers'], genre : 'Rock'},
  ]

  constructor() { }

  getAll() : Track[] {
    return this._tracks;
  }

  getById(id: number) : Track | undefined{
    return this._tracks.find(track => track.id === id)
  }

  create(track : Track) : void {
    // this._tracks.map(track => track.id)     > Transforme le tableau de track en un tableau d'id [1,2,4,6]
    // ...tableau  > ... : Spread operator => Déstructure le tableau (ici [1,2,4,6] deviendrait 1,2,4,6)
    Math.max(...this._tracks.map(track => track.id)) + 1;
    this._tracks.push(track);
  }

  update(id : number, track : Track) : void {
    let trackToUpdate : Track | undefined = this._tracks.find(track => track.id === id);
    // Seulement si elle existe, on peut la modif
    if(trackToUpdate){
      trackToUpdate.title = track.title;
      trackToUpdate.duration = track.duration;
      trackToUpdate.genre = track.genre;
      trackToUpdate.cover = track.cover;
      trackToUpdate.artists = track.artists;
    }
  }

  delete(id : number) : void {
    this._tracks = this._tracks.filter(track => track.id != id)
  }
}
