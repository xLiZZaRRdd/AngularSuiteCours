import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { Demo1Component } from './demo1/demo1.component';
import { FormsModule } from '@angular/forms';
import { Demo2Component } from './demo2/demo2.component';
import { ToFahrenheitPipe } from '../shared/pipes/to-fahrenheit.pipe';
import { SharedModule } from '../shared/shared.module';
import { Demo3Component } from './demo3/demo3.component';
import { Demo4Component } from './demo4/demo4.component';
import { EnfantComponent } from './demo4/enfant/enfant.component';
import { Demo5Component } from './demo5/demo5.component';
import { Demo6Component } from './demo6/demo6.component';


@NgModule({
  declarations: [
    DemoComponent,
    Demo1Component,
    Demo2Component,
    Demo3Component,
    Demo4Component,
    EnfantComponent,
    Demo5Component,
    Demo6Component,
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    // FormsModule >>> Pour pouvoir utiliser ngModel >>> Plus besoin de le mettre ici car il est dans shared
    SharedModule //Importe tout ce qu'il y'a dans le module partagé
  ]
})
export class DemoModule { }
