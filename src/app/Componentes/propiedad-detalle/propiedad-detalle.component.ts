import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { DataService } from 'src/app/Services/data-servicio.service';
import { Foto } from 'src/app/Interfaces/foto';


@Component({
  selector: 'app-propiedad-detalle',
  templateUrl: './propiedad-detalle.component.html',
  styleUrls: ['./propiedad-detalle.component.css']
})
export class PropiedadDetalleComponent implements OnInit {


  propiedad:any;
  constructor(private dataSvc:DataService, private router:Router,private route:ActivatedRoute) {}

  ngOnInit(): void {
    
      this.route.paramMap.subscribe((params:ParamMap) =>{
        const id = params.get('id');
        this.getPropiedadById(id);
        this.getFotos(id);
      });
  }


  


  getPropiedadById(id:any):void{
    this.dataSvc.getPropiedadById(id).subscribe(response=>{
      this.propiedad = response.data;
    });
  }

  getFotos(id:any){
    this.dataSvc.getFotos().pipe(map(x => x.data.filter((foto:Foto) => foto.idPropiedad == id))).subscribe(response =>{
      console.log(response);
     
      if(response.length == 10){

         this.imageObject = [
          {
            image:"https://localhost:44335/Recursos/imagenes/"+response[0].imagen,
            thumbImage:"https://localhost:44335/Recursos/imagenes/"+response[0].imagen
          },
          {
            image:"https://localhost:44335/Recursos/imagenes/"+response[1].imagen,
            thumbImage:"https://localhost:44335/Recursos/imagenes/"+response[1].imagen
          },
          {
            image:"https://localhost:44335/Recursos/imagenes/"+response[2].imagen,
            thumbImage:"https://localhost:44335/Recursos/imagenes/"+response[2].imagen
          },
          {
            image:"https://localhost:44335/Recursos/imagenes/"+response[3].imagen,
            thumbImage:"https://localhost:44335/Recursos/imagenes/"+response[3].imagen
          },
          {
            image:"https://localhost:44335/Recursos/imagenes/"+response[4].imagen,
            thumbImage:"https://localhost:44335/Recursos/imagenes/"+response[4].imagen
          },
          {
            image:"https://localhost:44335/Recursos/imagenes/"+response[5].imagen,
            thumbImage:"https://localhost:44335/Recursos/imagenes/"+response[5].imagen
          },
          {
            image:"https://localhost:44335/Recursos/imagenes/"+response[6].imagen,
            thumbImage:"https://localhost:44335/Recursos/imagenes/"+response[6].imagen
          },
          {
            image:"https://localhost:44335/Recursos/imagenes/"+response[7].imagen,
            thumbImage:"https://localhost:44335/Recursos/imagenes/"+response[7].imagen
          },
          {
            image:"https://localhost:44335/Recursos/imagenes/"+response[8].imagen,
            thumbImage:"https://localhost:44335/Recursos/imagenes/"+response[8].imagen
          },
          {
            image:"https://localhost:44335/Recursos/imagenes/"+response[9].imagen,
            thumbImage:"https://localhost:44335/Recursos/imagenes/"+response[9].imagen
          }
        ];

      }

    });
  };



  imageObject:Array<object> = [
    {
      image: "",
      thumbImage:""
    }
  ];




}
