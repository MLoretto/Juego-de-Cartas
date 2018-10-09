import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { CartasComponent } from './cartas/cartas.component';
import { CartaComponent } from './carta/carta.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CartasComponent,
    CartaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
