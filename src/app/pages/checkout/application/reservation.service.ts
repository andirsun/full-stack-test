import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
// Interfaces
import { IRoom, IAditional } from 'src/app/tab1/domain/responses.interface';
import { IReservationResponse } from '../domain/response.interface';

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
  
  /*
    Use the api to make a reservation
  */
  makeReservation(room: IRoom, aditionals){
    room.aditionals = aditionals;
    // Quick Fix, calculate all other values if needed
    let body = {
      idHotel : "5f2c7b981cd03216ace0ffd8",
      date : "2020-08-06",
      name : "Anderson Laverde",
      document : "1143879488", 
      totalPrice : 320000,
      checkIn : "2020-09-06",
      checkOut : "2020-09-10",
      days : 4,
      rooms : [room]
    }
    // Making the request to api
    return this.http.post<IReservationResponse>(`${URL}/reservations/new`, body);
  }
}
