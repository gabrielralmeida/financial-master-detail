import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Categoria } from './categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private apiPath: string = "api/categorias";

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Categoria[]> {
    return this.http.get(this.apiPath).pipe(
      catchError(this.handleError), map(this.jsonDataToCategorias)
    )
  }

  getById(id: number): Observable<Categoria> {
    const url = `${this.apiPath}/${id}`;

    return this.http.get(url).pipe(
      catchError(this.handleError), map(this.jsonDataToCategoria)
    )
  }

  create(categoria: Categoria): Observable<Categoria> {
    return this.http.post(this.apiPath, categoria).pipe(
      catchError(this.handleError), map(this.jsonDataToCategoria)
    )
  }

  update(categoria: Categoria): Observable<Categoria> {
    const url = `${this.apiPath}/${categoria.id}`;

    return this.http.post(url, categoria).pipe(
      catchError(this.handleError), map(this.jsonDataToCategoria)
    )
  }

  private jsonDataToCategorias(jsonData: any[]): Categoria[] {
    const categorias: Categoria[] = [];
    jsonData.forEach(element => categorias.push(element as Categoria));
    return categorias;
  }

  private jsonDataToCategoria(jsonData: any): Categoria {
    return jsonData as Categoria;

  }

  private handleError(error: any[]): Observable<any> {
    console.log("error na requisicao: ", error);
    return throwError(error);
  }
}
