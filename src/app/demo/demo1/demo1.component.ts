import { Component } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.scss']
})
export class Demo1Component {
  //Property Binding
  prenom : string = 'Michel';
  nom : string = 'Polnareff';

  //Atribute Binding
  monImage : string = "https://img.freepik.com/photos-gratuite/photo-gratuite-fond-vendredi-saint-jesus-christ-croix_1340-28462.jpg";
  isNotAvailable : boolean = true;

  //Event Binding
  message : string = "...[En attente d'une salutation]...";

  direBonjour(langue : string) : void{
    switch(langue){
      case 'fr':
        this.message = "Coucou beauté";
        break;
      case 'en':
        this.message = "Hello lady";
        break;
      case 'nl':
        this.message = "Pazoppe Oostende Gouda";
        break;
      default:
        this.message = "? g pa kompri";
        break;
    }
  }
}
