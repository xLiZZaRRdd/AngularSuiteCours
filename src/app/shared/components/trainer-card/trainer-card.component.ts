import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Trainer } from '../../models/trainers';

@Component({
  selector: 'app-trainer-card',
  templateUrl: './trainer-card.component.html',
  styleUrls: ['./trainer-card.component.scss']
})
export class TrainerCardComponent {

  //Le "!" autorise le fait que potentiellement la propriété trainer soit undefined
  @Input() trainer! : Trainer;

  //Le new event en dessous permet de pas faire un constructeur
  @Output() onSelectTrainer : EventEmitter<Trainer> = new EventEmitter<Trainer>();

  sendTrainer() : void
  {
    this.onSelectTrainer.emit(this.trainer)
  }
}
