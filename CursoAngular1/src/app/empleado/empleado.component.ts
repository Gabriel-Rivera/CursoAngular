import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  title_empleado="Titulo empleado";
  empleado:Empleado;
  trabajadores:Array<Empleado>;
  trabajador_externo:boolean;
  color:string;
  color_seleccionado:string;

  constructor() { 
    this.empleado = new Empleado('gabo',28,'programador',true);
    this.trabajadores = [new Empleado('jorge',27,'cocinero',false),
                         new Empleado('alfons',26,'albañil',true),
                         new Empleado('abril',25,'chofer',false)
  ];
  this.trabajador_externo =  true;
  this.color = 'blue';
  this.color_seleccionado="#ccc"
}

cambiarValor(){
  this.trabajador_externo=!this.trabajador_externo;
}

  ngOnInit() {
    
  }

}
