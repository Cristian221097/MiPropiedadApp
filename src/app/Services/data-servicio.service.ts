import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../Interfaces/response';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url:string ="https://localhost:44335/api/propiedad";
  fotoUrl:string ="https://localhost:44335/api/Foto";

  constructor(private _http:HttpClient) { }

  getPropiedaedes():Observable<Response>{
    return this._http.get<Response>(this.url);
  }

  getPropiedadById(id:any):Observable<Response>{
    return this._http.get<Response>(this.url + "/" + id);
  }

  getFotos():Observable<Response>{
    return this._http.get<Response>(this.fotoUrl);
  }
}
