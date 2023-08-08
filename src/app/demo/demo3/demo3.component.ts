import { Component } from '@angular/core';
import { Trainer } from 'src/app/shared/models/trainers';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.scss']
})
export class Demo3Component {
  //#Region Components
  //ngStyle
  favColor : string = "#7FFF00";
  width : number = 0
  timer : any = undefined;

  fill() : void{
    this.timer = setInterval(() => {
      if(this.width < 100)
      {
        this.width+=10;
      }
    }, 100)
  }

  empty() : void{
    clearInterval(this.timer);
    this.timer = undefined;
    this.width = 0;
  }

  //ngClass
  isBig : boolean = false;
  isPink : boolean = false;
  isItalic : boolean = false;
  //#endregion

  //#region Structural
  //ngIf
  isDay : boolean = true;

  //ngFor
  trainersNameList : string[] = ['Khun', 'Aude', 'Gavin'];
  
  trainersList : Trainer[] = [
    {id : 0, firstname : 'Khun', lastname : 'Ly', birthdate : new Date(1982,4,6), gender : 'm', avatar : 'assets/Images/khun.png'},
    {id : 1, firstname : 'Aude', lastname : 'Beurive', birthdate : new Date(1989,9,16), gender : 'f', avatar : 'assets/Images/aude.png'},
    {id : 2, firstname : 'Gavin', lastname : 'Chaineux', birthdate : new Date(1996,9,18), gender : 'nb', avatar : 'assets/Images/gavin.png'}
  ]

  //ngSwitch
  meteo : string|undefined = undefined;
  //#endregion

}
