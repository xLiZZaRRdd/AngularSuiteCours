import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { SharedModule } from '../shared/shared.module';
import { Demo3Component } from './demo3/demo3.component';
import { Demo4Component } from './demo4/demo4.component';
import { EnfantComponent } from './demo4/enfant/enfant.component';
import { Demo5Component } from './demo5/demo5.component';
import { Demo6Component } from './demo6/demo6.component';
import { Demo7Component } from './demo7/demo7.component';
import { CreateTrackComponent } from './demo7/create-track/create-track.component';
import { DetailTrackComponent } from './demo7/detail-track/detail-track.component';
import { UpdateTrackComponent } from './demo7/update-track/update-track.component';
import { Demo8Component } from './demo8/demo8.component';
import { HttpClientModule } from '@angular/common/http';
import { Demo9Component } from './demo9/demo9.component';
import { CreateTrackApiComponent } from './demo9/create-track-api/create-track-api.component';
import { UpdateTrackApiComponent } from './demo9/update-track-api/update-track-api.component';
import { Demo10Component } from './demo10/demo10.component'


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
    Demo7Component,
    CreateTrackComponent,
    DetailTrackComponent,
    UpdateTrackComponent,
    Demo8Component,
    Demo9Component,
    CreateTrackApiComponent,
    UpdateTrackApiComponent,
    Demo10Component,
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    // FormsModule >>> Pour pouvoir utiliser ngModel >>> Plus besoin de le mettre ici car il est dans shared
    SharedModule, //Importe tout ce qu'il y'a dans le module partagé
    HttpClientModule
  ]
})
export class DemoModule { }
