import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import "rxjs/add/operator/map";


@Injectable({
  providedIn: 'root'
})
export class PeticionesService {

  URL: string;

  constructor(
    private http: Http
  ) {
    this.URL = "https://jsonplaceholder.typicode.com/posts";
  }

  getPrueba() {
    return 'Hola mundo desde el rervicio'
  }
  getArticulos(){
    return this.http.get(this.URL)
    .map(res => res.json());
  }
}
