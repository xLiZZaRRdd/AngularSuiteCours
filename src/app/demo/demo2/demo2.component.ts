import { Component } from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.scss']
})
export class Demo2Component {
  fullname: string = 'MiChEl polNaRefF';
  birthdate : Date = new Date(1975, 5, 12);
  price : number = 10.14578954;
  celciusTemp : number = 16;
}
