// Angular dependencies
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
/* Enviroment object */
import { environment } from 'src/environments/environment';
// Interfaces
import { GetHotelsResponse } from '../domain/responses.interface';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
/* Global API URL */
const URL = environment.url;
@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  constructor(
    private http: HttpClient,
  ) { }

  getHotels(){
    return this.http.get<GetHotelsResponse>(`${URL}/hotels/all`);
  }
}
