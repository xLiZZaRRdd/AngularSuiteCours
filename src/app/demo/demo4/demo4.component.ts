import { Component } from '@angular/core';

@Component({
  selector: 'app-demo4',
  templateUrl: './demo4.component.html',
  styleUrls: ['./demo4.component.scss']
})
export class Demo4Component {
  prenom : string = 'Robert';
  besoinEnfant : string = '[Mon enfant n\'a besoin de rien]'

  receiveNeed(besoin : string) : void
  {
    this.besoinEnfant = `Mon enfant a besoin de ${besoin}`;
  }
}
