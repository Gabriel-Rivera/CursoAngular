import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plantillas',
  templateUrl: './plantillas.component.html',
  styleUrls: ['./plantillas.component.css']
})
export class PlantillasComponent implements OnInit {

  titulo;
  administrador;

  constructor() {
    this.titulo = "Plantilla ngTemplate en Angular";
    this.administrador = true;
  }

  ngOnInit() {
  }

  cambiar(){
    this.administrador=!this.administrador;
  }
}
