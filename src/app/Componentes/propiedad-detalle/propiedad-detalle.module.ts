import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropiedadDetalleRoutingModule } from './propiedad-detalle-routing.module';
import { PropiedadDetalleComponent } from './propiedad-detalle.component';
import { NgImageSliderModule } from 'ng-image-slider';


@NgModule({
  declarations: [
    PropiedadDetalleComponent
  ],
  imports: [
    CommonModule,
    PropiedadDetalleRoutingModule,
    NgImageSliderModule
  ]
})
export class PropiedadDetalleModule { }
