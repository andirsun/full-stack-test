import { Injectable } from '@angular/core';
// Angular dependencies
import { HttpHeaders, HttpClient } from '@angular/common/http';
// Enviroment variables
import { environment } from 'src/environments/environment';
// Interfaces
import { IGetReservationsResponse } from '../domain/reservation.interface';


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
export class ReservationService {

  constructor(
    private http: HttpClient,
  ) { }

  getReservations(){
    return this.http.get<IGetReservationsResponse>(`${URL}/reservations/all`);
  }
}
