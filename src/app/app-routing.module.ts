import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './Componentes/inicio/inicio.component';

const routes: Routes = [
  { path: 'publicacion', loadChildren: () => import('./Componentes/publicacion/publicacion.module').then(m => m.PublicacionModule) },
  {path: '', component:InicioComponent},
  { path: 'propiedad', loadChildren: () => import('./Componentes/propiedad/propiedad.module').then(m => m.PropiedadModule) },
  { path: 'propietario', loadChildren: () => import('./Componentes/propietario/propietario.module').then(m => m.PropietarioModule) },
  { path: 'propiedad-detalle', loadChildren: () => import('./Componentes/propiedad-detalle/propiedad-detalle.module').then(m => m.PropiedadDetalleModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
