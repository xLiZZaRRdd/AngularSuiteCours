import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToFahrenheitPipe } from './pipes/to-fahrenheit.pipe';
import { ConvertTempPipe } from './pipes/convert-temp.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { TrainerCardComponent } from './components/trainer-card/trainer-card.component';



@NgModule({
  declarations: [
    ToFahrenheitPipe,
    ConvertTempPipe,
    HighlightDirective,
    TrainerCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    ToFahrenheitPipe,
    ConvertTempPipe,
    HighlightDirective,
    TrainerCardComponent
  ]
})
export class SharedModule { }
