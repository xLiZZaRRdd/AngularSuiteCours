import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { YearRangeValidator } from 'src/app/shared/validators/correctMovie.Validator';

@Component({
  selector: 'app-exo4',
  templateUrl: './exo4.component.html',
  styleUrls: ['./exo4.component.scss']
})
export class Exo4Component {
  movieForm : FormGroup;

  constructor(private _fb : FormBuilder) {
    this.movieForm = this._fb.group({
      movieTitle : [null, [Validators.required, Validators.maxLength(255)]],
      movieSynopsis : [null, [Validators.required]],
      movieReleaseYear : [null, [Validators.required, YearRangeValidator]],
      movieTrailer : [null],
      actors : this._fb.array([])
    })
  }

   get actors() : FormArray {
    return this.movieForm.get('actors') as FormArray;
  }

  addActor() : void {
    this.actors.push(this._fb.control(null, [Validators.required]))
  }

  removeActor(indice : number) : void {
    this.actors.removeAt(indice);
  }

  addMovie() {
    if(this.movieForm.valid){
      console.log(this.movieForm.value);
      console.log("Formulaire valide ❤");
    } else {
      this.movieForm.markAllAsTouched();
      console.log("Formulaire invalide 😢")
    }
  }

  confirmAndAddMovie() {
    if (window.confirm('Êtes-vous sûr de vouloir ajouter ce film ?')) {
      this.addMovie();
    }
  }
}
