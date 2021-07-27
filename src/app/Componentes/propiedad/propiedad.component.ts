import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data-servicio.service';
import {map} from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { Propiedad } from 'src/app/Interfaces/propiedad';


@Component({
  selector: 'app-propiedad',
  templateUrl: './propiedad.component.html',
  styleUrls: ['./propiedad.component.css']
})
export class PropiedadComponent implements OnInit {

  propiedades:any;
  private PropiedadesSubject = new BehaviorSubject<Propiedad[]>([]);
   Propiedades$ = this.PropiedadesSubject.asObservable();
   busqueda:string="";
   filtro:any="";

  constructor(private dataSvc:DataService) { 
    
  }

  ngOnInit(): void {
    this.getPropidedades();
  }

  getPropidedades():void{
     this.dataSvc.getPropiedaedes().subscribe(response =>{
       this.Propiedades$ = response.data;
       this.propiedades = this.Propiedades$;
    });
  }

  EnVenta():void{
   this.dataSvc.getPropiedaedes().pipe(map(p => p.data.filter((busqueda:Propiedad) => busqueda.operacion == "venta"))).subscribe(response=>{
   this.propiedades = response;
  });
  }

  EnAlquiler():void{
    this.dataSvc.getPropiedaedes().pipe(map(p => p.data.filter((busqueda:Propiedad) => busqueda.operacion == "alquiler"))).subscribe(response =>{
      this.propiedades = response;
    });

   }

   todasPropiedades():void{
    this.dataSvc.getPropiedaedes().subscribe(response =>{
      this.propiedades = response.data;
    });
   }

   BuscarPropiedad():void{
    if(this.busqueda =="precio"){
       this.dataSvc.getPropiedaedes().pipe(map(p => p.data.filter((busqueda:Propiedad)=> busqueda.precio == this.filtro))).subscribe(response =>{
        this.propiedades = response;
       });
    }
    else if(this.busqueda == "habitaciones"){
      this.dataSvc.getPropiedaedes().pipe(map(p => p.data.filter((busqueda:Propiedad)=> busqueda.habitaciones == this.filtro))).subscribe(response =>{
        this.propiedades = response;
       });
    }
    else if(this.busqueda == "baños"){
      this.dataSvc.getPropiedaedes().pipe(map(p => p.data.filter((busqueda:Propiedad)=> busqueda.banos == this.filtro))).subscribe(response =>{
        this.propiedades = response;
       });
    }
    else if(this.busqueda =="sector"){
      this.dataSvc.getPropiedaedes().pipe(map(p => p.data.filter((busqueda:Propiedad)=> busqueda.sector == this.filtro))).subscribe(response =>{
        this.propiedades = response;
       });
    }
   }

}
