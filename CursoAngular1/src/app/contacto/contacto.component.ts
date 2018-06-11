import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';  

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  title="CONTACTO";
  parametro;
  
  constructor(
    private _route:ActivatedRoute,
    private _router:Router) { }

  ngOnInit() {
    this._route.params.forEach((params:Params)=>{
      this.parametro=params['page'];
      console.log(this.parametro)
    });
  }

  redirigir(){
    this._router.navigate(['/contacto','gabo']);
  }
  redirigirDos(){
    this._router.navigate(['/home']);
  }
}
