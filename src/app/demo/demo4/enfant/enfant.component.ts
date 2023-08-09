import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.scss']
})
export class EnfantComponent {
  @Input() prenomParent : string = '[Pas de prénom]';
  @Input() hobbiesParent : string[] = [];

  //Vu que c'est un event, très souvent commencer par "on" le nommage
  @Output() onNeedSelect : EventEmitter<string>;

  constructor()
  {
    this.onNeedSelect = new EventEmitter<string>(); //Instanciation de EventEmitter
  }

  sendNeed(besoin : string)
  {
    this.onNeedSelect.emit(besoin);
  }
}
