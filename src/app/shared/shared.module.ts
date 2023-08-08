import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToFahrenheitPipe } from './pipes/to-fahrenheit.pipe';
import { ConvertTempPipe } from './pipes/convert-temp.pipe';
import { HighlightDirective } from './directives/highlight.directive';



@NgModule({
  declarations: [
    ToFahrenheitPipe,
    ConvertTempPipe,
    HighlightDirective
  ],
  imports: [
    CommonModule
  ],
  exports : [
    ToFahrenheitPipe,
    ConvertTempPipe,
    HighlightDirective
  ]
})
export class SharedModule { }
