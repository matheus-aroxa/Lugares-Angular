import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Categoria} from './categoria';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  basePath = 'http://localhost:3000/';

  constructor(private http: HttpClient) {
  }

  salvar(categoria: Categoria): Observable<Categoria>{
    let path = '/categories';
    return this.http.post<Categoria>(this.basePath + path, categoria);
  }

  findAll(): Observable<Categoria[]> {
    let path = '/categories';
    return this.http.get<Categoria[]>(this.basePath + path);
  }
}
