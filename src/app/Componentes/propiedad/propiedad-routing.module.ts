import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropiedadDetalleComponent } from '../propiedad-detalle/propiedad-detalle.component';
import { PropiedadComponent } from './propiedad.component';

const routes: Routes = [
  { path: '', component: PropiedadComponent },
  {path:'detalle/:id',component:PropiedadDetalleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropiedadRoutingModule { }
