import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs';
import "rxjs/add/operator/map";


@Injectable({
  providedIn: 'root'
})
export class PeticionesService {

  constructor() { }

  getPrueba(){
    return 'Hola mundo desde el rervicio'
  }
}
