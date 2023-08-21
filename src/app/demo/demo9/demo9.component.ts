import { Component, OnInit } from '@angular/core';
import { Track } from 'src/app/shared/models/track';
import { TrackAPIService } from 'src/app/shared/services/track-api.service';

@Component({
  selector: 'app-demo9',
  templateUrl: './demo9.component.html',
  styleUrls: ['./demo9.component.scss']
})
export class Demo9Component implements OnInit {
  trackList : Track[] = [];

  constructor(private _trackApiServ : TrackAPIService) {

  }

  ngOnInit() : void{
    this._trackApiServ.getAll().subscribe({
      next : ( value ) => {
        this.trackList = value;
      }
    })
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