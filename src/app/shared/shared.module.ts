import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToFahrenheitPipe } from './pipes/to-fahrenheit.pipe';
import { ConvertTempPipe } from './pipes/convert-temp.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { TrainerCardComponent } from './components/trainer-card/trainer-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ToFahrenheitPipe,
    ConvertTempPipe,
    HighlightDirective,
    TrainerCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule, //Pour utiliser le ngModel
    ReactiveFormsModule
  ],
  exports : [
    ToFahrenheitPipe,
    ConvertTempPipe,
    HighlightDirective,
    TrainerCardComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
