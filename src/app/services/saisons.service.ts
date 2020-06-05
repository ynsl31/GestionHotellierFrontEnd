import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Saison } from './tarifsaisons.service';
import { Observable } from 'rxjs';
const baseUrl = 'http://localhost:8081/saisons';

@Injectable({
  providedIn: 'root'
})
export class SaisonsService {

  constructor( private http: HttpClient) { }


  getAll() {
    return this.http.get<Saison[]>(`${baseUrl}/all`);
  }

  getSaison(id) {
    return this.http.get<Saison>(`${baseUrl}/find/${id}`);
  }

  createSaison(Saison : Saison): Observable<Saison> {
    return this.http.post<Saison>(baseUrl+'/save',Saison);
  }
  handleError(error: any) {
    throw new Error("Method not implemented.");
  }

  updateSaison(id, data) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  deleteSaison(id) {
    return this.http.delete(`${baseUrl}/delete/${id}`);
  }

  deleteAll() {
    return this.http.delete(baseUrl);
  }

  findByTitle(title) {
    return this.http.get(`${baseUrl}?title=${title}`);
  }
}
