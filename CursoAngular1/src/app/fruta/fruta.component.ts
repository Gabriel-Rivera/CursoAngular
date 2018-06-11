import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruta',
  templateUrl: './fruta.component.html',
  styleUrls: ['./fruta.component.css']
})
export class FrutaComponent implements OnInit {

  constructor() { 
  }

  name_component="fruta";
  listado_frutas=["sandia"," piña"," guayaba"];
  hola: string = "";

  ngOnInit() {
  }

  holaMundo(){
    alert('hola');
  }
}
