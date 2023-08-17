import { Component } from '@angular/core';
import { Track } from 'src/app/shared/models/track';
import { TrackService } from 'src/app/shared/services/track.service';

@Component({
  selector: 'app-demo7',
  templateUrl: './demo7.component.html',
  styleUrls: ['./demo7.component.scss']
})
export class Demo7Component {
  trackList : Track[] = [];

  constructor(private _trackService : TrackService){
    this.trackList = this._trackService.getAll()
  }

  delete(id: number) : void {
    this._trackService.delete(id);
    this.trackList = this._trackService.getAll();
  }
}
