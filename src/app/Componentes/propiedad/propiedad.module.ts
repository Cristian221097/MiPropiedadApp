import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropiedadRoutingModule } from './propiedad-routing.module';
import { PropiedadComponent } from './propiedad.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PropiedadComponent
  ],
  imports: [
    CommonModule,
    PropiedadRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class PropiedadModule { }
