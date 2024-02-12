import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../types/product/product';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: "root"
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiUrl}/Products`);
  }

  get(id: any): Observable<Product> {
    return this.http.get<Product>(`${environment.apiUrl}/Products/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(environment.apiUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${environment.apiUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(environment.apiUrl);
  }

  findByTitle(title: any): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiUrl}?title=${title}`);
  }
}