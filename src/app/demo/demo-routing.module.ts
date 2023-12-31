import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { Demo3Component } from './demo3/demo3.component';
import { Demo4Component } from './demo4/demo4.component';
import { Demo5Component } from './demo5/demo5.component';
import { Demo6Component } from './demo6/demo6.component';
import { Demo7Component } from './demo7/demo7.component';
import { CreateTrackComponent } from './demo7/create-track/create-track.component';
import { DetailTrackComponent } from './demo7/detail-track/detail-track.component';
import { UpdateTrackComponent } from './demo7/update-track/update-track.component';
import { Demo8Component } from './demo8/demo8.component';
import { Demo9Component } from './demo9/demo9.component';
import { CreateTrackApiComponent } from './demo9/create-track-api/create-track-api.component';
import { UpdateTrackApiComponent } from './demo9/update-track-api/update-track-api.component';
import { connectedGuard } from '../shared/guards/connected.guard';
import { Demo10Component } from './demo10/demo10.component';
import { trackResolver } from '../shared/resolvers/track.resolver';

const routes: Routes = [
  //Liste de tous les liens enfants de Demo
  { path : "demo1" , component : Demo1Component },
  { path : "demo2", component : Demo2Component},
  { path : "demo3", component : Demo3Component},
  { path : "demo4", component : Demo4Component},
  { path : "demo5", component : Demo5Component},
  { path : "demo6", component : Demo6Component, canActivate : [connectedGuard] },
  { path : "demo7", component : Demo7Component},
  { path : "demo7/create", component : CreateTrackComponent},
  { path : "demo7/detail/:id", component : DetailTrackComponent}, //le :id indique que la valeur sera dynamique
  { path : "demo7/update/:id", component : UpdateTrackComponent}, //le :id indique que la valeur sera dynamique
  { path : "demo8", component : Demo8Component},
  { path : "demo9", component : Demo9Component, resolve : { tracks : trackResolver } },
  { path : "demo9/create", component : CreateTrackApiComponent},
  { path : "demo9/update/:id", component : UpdateTrackApiComponent},
  { path : "demo10", component : Demo10Component},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
