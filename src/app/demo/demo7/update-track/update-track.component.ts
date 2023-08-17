import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TrackService } from 'src/app/shared/services/track.service';
import { Track } from 'src/app/shared/models/track';

@Component({
  selector: 'app-update-track',
  templateUrl: './update-track.component.html',
  styleUrls: ['./update-track.component.scss']
})
export class UpdateTrackComponent {
  trackForm : FormGroup;
  trackId : number;

  constructor(private _fb : FormBuilder, 
    private _trackService : TrackService, 
    private _router : Router, 
    private _activeRoute : ActivatedRoute) {

      //Construction formulaire
    this.trackForm = this._fb.group({
      title : [null],
      duration : [null],
      genre : [''],
      cover : [null],
      artists : this._fb.array([]),
    })

    //Récupération id
    this.trackId = +this._activeRoute.snapshot.params['id'];

    //Récupérer la track et mettre à jour le formulaire
    let track : Track | undefined = this._trackService.getById(this.trackId);
    if(!track){
      this._router.navigateByUrl('/notfound')
    }

    //Pour recréer tous les inputs artists : 
    track?.artists.forEach(a => this.addArtist())
    //On met ensuite à jour le forumulaire avec patchValue
    this.trackForm.patchValue({
      title : track?.title,
      duration : track?.duration,
      genre : track?.genre,
      cover : track?.cover,
      artists : track?.artists
    })
  }

  get artists() : FormArray {
    return this.trackForm.get('artists') as FormArray;
  }

  addArtist() : void {
    this.artists.push(this._fb.control(null));
  }

  removeArtist(indice : number) : void {
    this.artists.removeAt(indice);
  }

  updateTrack() : void{
    //Normalement on vérifie si tout valide mais ici osef
    this._trackService.update( this.trackId , this.trackForm.value);
    //Après ajout dans la liste
    this._router.navigateByUrl('/demo/demo7');
  }
}