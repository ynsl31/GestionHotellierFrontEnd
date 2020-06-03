import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class Etage{
  id : number;
  num : number
}
const baseUrl = 'http://localhost:8081/etages';
@Injectable({
  providedIn: 'root'
})
export class EtagesService {

  constructor( private http: HttpClient) { }


  getAll() {
    return this.http.get<Etage[]>(`${baseUrl}/all`);
  }

  getEtage(id) {
    return this.http.get<Etage>(`${baseUrl}/find/${id}`);
  }

  createEtage(Etage : Etage): Observable<any> {
    return this.http.post<Etage>(baseUrl+'/save',Etage);
  }
  handleError(error: any) {
    throw new Error("Method not implemented.");
  }

  updateEtage(id, data) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  deleteEtage(id) {
    return this.http.delete(`${baseUrl}/delete/${id}`);
  }

  deleteAll() {
    return this.http.delete(baseUrl);
  }

  findByTitle(title) {
    return this.http.get(`${baseUrl}?title=${title}`);
  }
}

