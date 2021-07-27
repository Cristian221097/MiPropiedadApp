import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { PropiedadDetalleModule } from './Componentes/propiedad-detalle/propiedad-detalle.module';
import { PropiedadModule } from './Componentes/propiedad/propiedad.module';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PropiedadModule,
    PropiedadDetalleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
