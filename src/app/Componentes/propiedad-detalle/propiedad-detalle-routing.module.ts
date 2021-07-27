import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropiedadDetalleComponent } from './propiedad-detalle.component';

const routes: Routes = [{ path: '', component: PropiedadDetalleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropiedadDetalleRoutingModule { }
