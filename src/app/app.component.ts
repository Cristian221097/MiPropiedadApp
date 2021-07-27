import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'miPropiedadApp';
  Mostrar:boolean;

  constructor(){
    this.Mostrar = false;
  }

  mostrarMenu(){
    if(this.Mostrar == false){
      this.Mostrar = true;
    }else{
      this.Mostrar = false;
    }
    
  }
}
