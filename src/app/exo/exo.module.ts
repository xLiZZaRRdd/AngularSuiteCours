import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExoRoutingModule } from './exo-routing.module';
import { ExoComponent } from './exo.component';
import { Exo1Component } from './exo1/exo1.component';
import { Exo2Component } from './exo2/exo2.component';
import { ShoppingListEnfantComponent } from './exo2/shopping-list-enfant/shopping-list-enfant.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { Exo3Component } from './exo3/exo3.component';
import { ShoppingListComponent } from './exo3/shopping-list/shopping-list.component';
import { Exo4Component } from './exo4/exo4.component';
import { Exo5Component } from './exo5/exo5.component';
import { CreateFanComponent } from './exo5/create-fan/create-fan.component';
import { DetailsFanComponent } from './exo5/details-fan/details-fan.component';
import { UpdateFanComponent } from './exo5/update-fan/update-fan.component';


@NgModule({
  declarations: [
    ExoComponent,
    Exo1Component,
    Exo2Component,
    ShoppingListEnfantComponent,
    Exo3Component,
    ShoppingListComponent,
    Exo4Component,
    Exo5Component,
    CreateFanComponent,
    DetailsFanComponent,
    UpdateFanComponent
  ],
  imports: [
    CommonModule,
    ExoRoutingModule,
    SharedModule
  ]
})
export class ExoModule { }
