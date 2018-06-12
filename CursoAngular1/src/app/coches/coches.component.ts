import { Component, OnInit } from '@angular/core';
import { Coche } from './coche';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html',
  styleUrls: ['./coches.component.css']
})
export class CochesComponent implements OnInit {

  coche: Coche;
  coches: Array<Coche>;
  articulos;

  constructor(
    private _peticiones: PeticionesService) {
    this.coches = [
      new Coche('Seat', 234, 'Azul'),
      new Coche('Fiesta', 234, 'Verde')
    ]
    this.coche = new Coche('', 0, '');

  }

  ngOnInit() {
    this._peticiones.getArticulos().subscribe(
      result => {
        this.articulos = result;
      },
      error => {
        var errorMessage = <any>error;
        console.log(errorMessage)
      }
    )
  }

  onSubmit() {
    this.coches.push(this.coche);
    this.coche = new Coche('', 0, '');
  }
}
