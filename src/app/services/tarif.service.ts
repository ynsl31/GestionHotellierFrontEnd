import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategorieChambre } from './categoriechambre.service';
import { Observable } from 'rxjs';
const baseUrl = 'http://localhost:8081/tarifs';

export class Tarif {
  id:           number;
  reference:    string;
  prix:         number;
  description:  string;
  services:     any[];
  categories:   CategorieChambre[];
  salles:       any[];
  tarifSaisons: any[];
}

@Injectable({
  providedIn: 'root'
})
export class TarifService {

  constructor( private http: HttpClient) { }


  getAll() {
    return this.http.get<Tarif[]>(`${baseUrl}/all`);
  }

  getTarif(id) {
    return this.http.get<Tarif>(`${baseUrl}/find/${id}`);
  }

  createTarif(tarif : Tarif): Observable<Tarif> {
    return this.http.post<Tarif>(baseUrl+'/save',tarif);
  }
  handleError(error: any) {
    throw new Error("Method not implemented.");
  }

  updateTarif(id, data) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  deleteTarif(id) {
    return this.http.delete(`${baseUrl}/delete/${id}`);
  }

  deleteAll() {
    return this.http.delete(baseUrl);
  }

  findByTitle(title) {
    return this.http.get(`${baseUrl}?title=${title}`);
  }
}
