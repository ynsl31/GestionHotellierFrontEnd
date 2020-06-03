import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chambre } from '../chefrep/chambers/chamberlist/chamberlist.component';
import { Tarif } from './tarif.service';

const baseUrl = 'http://localhost:8081/categoriechambres';
export class CategorieChambre {
  id:          number;
  reference:   string;
  libelle:     string;
  description: string;
  chambres:    Chambre[];
  tarif:       Tarif;
}
@Injectable({
  providedIn: 'root'
})
export class CategoriechambreService {

 
  constructor( private http: HttpClient) { }


  getAll() {
    return this.http.get<CategorieChambre[]>(`${baseUrl}/all`);
  }

  getCategorieChambre (id) {
    return this.http.get<CategorieChambre >(`${baseUrl}/find/${id}`);
  }

  createCategorieChambre (CategorieChambre  : CategorieChambre ): Observable<any> {
    return this.http.post<CategorieChambre >(baseUrl+'/save',CategorieChambre );
  }
  handleError(error: any) {
    throw new Error("Method not implemented.");
  }

  updateCategorieChambre (id, data) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  deleteCategorieChambre (id) {
    return this.http.delete(`${baseUrl}/delete/${id}`);
  }

  deleteAll() {
    return this.http.delete(baseUrl);
  }

  findByTitle(title) {
    return this.http.get(`${baseUrl}?title=${title}`);
  }
}
