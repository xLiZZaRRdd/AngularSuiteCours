import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HomeComponent } from './shared/components/home/home.component';

import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFrBe from '@angular/common/locales/fr-BE';
import { ToFahrenheitPipe } from './shared/pipes/to-fahrenheit.pipe';

registerLocaleData(localeFrBe);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  exports : [],
  providers: [
    { provide : LOCALE_ID, useValue : "fr-BE"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
