import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../login/login.component';
import { Client } from '../listclients/listclients.component';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
const baseUrl = 'http://localhost:8081/clients';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  _headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this._headers = new HttpHeaders({ 'Content-Type': 'application/json' })
   }
  getAll() {
    return this.http.get<Client>(`${baseUrl}/all`);
  }

  getclient(id) {
    return this.http.get<Client>(`${baseUrl}/find/${id}`);
  }

  createclient(client : Client): Observable<any> {
    return this.http.post<Client>(baseUrl+'/save',client);
  }
  handleError(error: any) {
    throw new Error("Method not implemented.");
  }

  updateclient(id, data) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  deleteclient(id) {
    return this.http.delete(`${baseUrl}/delete/${id}`);
  }

  deleteAll() {
    return this.http.delete(baseUrl);
  }

  findByTitle(title) {
    return this.http.get(`${baseUrl}?title=${title}`);
  }
}
