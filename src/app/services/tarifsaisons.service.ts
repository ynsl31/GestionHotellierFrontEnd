import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
const baseUrl = 'http://localhost:8081/tarifsaisons';

export class Tarifsaison {
  tarifSaisonPK: TarifSaisonPK;
  prixFinal:     number;
  tarif:         Tarif;
  saison:        Saison;
}

export class Saison {
  id:           number;
  saison:       string;
  reference:    string;
  dateDebut:    Date;
  dateFin:      Date;
  reduction:    number;
  augmentation: number;
}

export class Tarif {
  id:          number;
  reference:   string;
  prix:        number;
  description: string;
  services:    any[];
  salles:      any[];
}

export class TarifSaisonPK {
  tarif:  number;
  saison: number;
}



@Injectable({
  providedIn: 'root'
})
export class TarifsaisonsService {
  params: HttpParams;
  constructor(private http: HttpClient) {

  }


  getAll() {
    return this.http.get<Tarifsaison>(`${baseUrl}/all`);
  }

  getTarifsaison(id) {
    return this.http.get<Tarifsaison>(`${baseUrl}/find/${id}`);
  }

  createTarifsaison(Tarifsaison : Tarifsaison): Observable<any> {
    return this.http.post<Tarifsaison>(baseUrl+'/save',Tarifsaison);
  }
  handleError(error: any) {
    throw new Error("Method not implemented.");
  }

  updateTarifsaison(t,s, data) {
   this.params = new HttpParams();
   this.params.append('tarif', t);
   this.params.append('saison', s);
    return this.http.put(`${baseUrl}/`,this.params, data);
  }

  deleteTarifsaison(t,s) {
    let options = { params: this.params };
    this.params.append('tarif', t);
    this.params.append('saison', s);
    return this.http.delete(`${baseUrl}/delete`,options);
  }

  deleteAll() {
    return this.http.delete(baseUrl);
  }

  findByTitle(title) {
    return this.http.get(`${baseUrl}?title=${title}`);
  }
}
