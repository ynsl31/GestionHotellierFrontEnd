import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reservation } from './factures.service';
import { Observable } from 'rxjs';
const baseUrl = 'http://localhost:8081/reservations';
@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  
  constructor(private http: HttpClient) {

  }
 getAll() {
   return this.http.get<Reservation>(`${baseUrl}/all`);
 }

 getReservation(id) {
   return this.http.get<Reservation>(`${baseUrl}/find/${id}`);
 }

 createReservation(Reservation : Reservation): Observable<any> {
   return this.http.post<Reservation>(baseUrl+'/save',Reservation);
 }
 handleError(error: any) {
   throw new Error("Method not implemented.");
 }

 updateReservation(id, data) {
   return this.http.put(`${baseUrl}/${id}`, data);
 }

 deleteReservation(id) {
   return this.http.delete(`${baseUrl}/delete/${id}`);
 }

 deleteAll() {
   return this.http.delete(baseUrl);
 }

 findByTitle(title) {
   return this.http.get(`${baseUrl}?title=${title}`);
 }

}
