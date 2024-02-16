import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: "root"
})
export class TestAPIService {

  constructor(private http: HttpClient) { }
  get400Error() {
    return this.http.get(`${environment.apiUrl}/buggy/bad-request`);
  }
  get401Error() {
    return this.http.get(`${environment.apiUrl}/buggy/unauthorized`);
  }
  get404Error() {
    return this.http.get(`${environment.apiUrl}/buggy/not-found`);
  }
  get500Error() {
    return this.http.get(`${environment.apiUrl}/buggy/server-error`);
  }
  getValidationError() {
    return this.http.get(`${environment.apiUrl}/buggy/validation-error`);
  }
}