import { Component, OnInit } from '@angular/core';
import { RopaService } from '../services/ropa.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  
  fecha;
  title="HOME";
  listado_ropa:Array<string>;
  prenda_nueva:string;
  

  constructor(
      private _ropaService:RopaService
  ) {
    this.fecha = new Date(2018,5,8);
   }

  guardarPrenda(){
    this._ropaService.addRopa(this.prenda_nueva);
    this.prenda_nueva = null;
  }

  eliminarPrenda(index:number){
    this._ropaService.deleteRopa(index);
    alert(index);
  }

  ngOnInit() {
    this.listado_ropa = this._ropaService.getRopa();
  // console.log(this._ropaService.prueba('camisa'));
  // console.log(this.listado_ropa);
  }

}
