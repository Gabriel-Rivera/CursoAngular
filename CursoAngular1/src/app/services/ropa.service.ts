import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RopaService {

  nombre_prenda='pantalones vaqueros';
  coleccion_ropa=['pantalones blancos','camiseta roja'];

  constructor() { }

  prueba(nombre){
    return nombre;
  }
  addRopa(namePrenda:string):Array<string>{
    this.coleccion_ropa.push(namePrenda);
    return this.getRopa();
  }
  getRopa():Array<string>{
    return this.coleccion_ropa;
  }
  deleteRopa(index:number){
    this.coleccion_ropa.splice(index,1);
    return this.getRopa();
  }

}
