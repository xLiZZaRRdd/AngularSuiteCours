import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Track } from 'src/app/shared/models/track';
import { TrackAPIService } from 'src/app/shared/services/track-api.service';

@Component({
  selector: 'app-demo9',
  templateUrl: './demo9.component.html',
  styleUrls: ['./demo9.component.scss']
})
export class Demo9Component implements OnInit {
  trackList : Track[] = [];

  constructor(private _trackApiServ : TrackAPIService, private _activeRoute : ActivatedRoute) {

  }

  ngOnInit() : void{
    //Après le Resolver, on va chercher les tracks dans les datas de la route
    this.trackList = this._activeRoute.snapshot.data['tracks']

    //Avant le Resolver :
    // this._trackApiServ.getAll().subscribe({
    //   next : ( value ) => {
    //     this.trackList = value;
    //   }
    // })
  }

  delete(id: number) : void 
  {
    this._trackApiServ.delete(id).subscribe(
    {
      complete : () => {
        //Quand le delete est fini, on remet à jour la liste
        this._trackApiServ.getAll().subscribe({
          next : ( value ) => {
            this.trackList = value;
          }
        });
      }
    })
  }
}