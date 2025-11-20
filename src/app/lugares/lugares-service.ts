import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Lugar} from './lugar';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LugaresService {
  basePath = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  salvar(lugar: any) {
    let path = 'lugares';
    this.http.post(this.basePath + path, lugar).subscribe(response => {
      console.log(response);
    });
  }

  findAll(): Observable<Lugar[]> {
    let path = 'lugares';
    return this.http.get<Lugar[]>(this.basePath + path);
  }

  filtrar(nome: string, categoria: string): Observable<Lugar[]> {
    let params = new HttpParams();

    if(nome){
      params = params.append('nome_like', nome);
    }
    if(categoria && categoria !== "all"){
      params = params.append('categoria', categoria);
    }

    return this.http.get<Lugar[]>(this.basePath + 'lugares', {
      params: params
    });
  }
}
