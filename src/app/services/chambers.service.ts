import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Chambre } from '../chefrep/chambers/chamberlist/chamberlist.component';
import { Observable } from 'rxjs';
const baseUrl = 'http://localhost:8081/chambres/';
@Injectable({
  providedIn: 'root'
})
export class ChambersService {

  constructor(private http: HttpClient) {

   }
  getAll() {
    return this.http.get<Chambre>(`${baseUrl}/all`);
  }

  getChambre(id) {
    return this.http.get<Chambre>(`${baseUrl}/${id}`);
  }

  createChambre(Chambre : Chambre): Observable<any> {
    return this.http.post<Chambre>(baseUrl+'/save',Chambre);
  }
  handleError(error: any) {
    throw new Error("Method not implemented.");
  }

  updateChambre(id, data) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  deleteChambre(id) {
    return this.http.delete(`${baseUrl}/delete/${id}`);
  }

  deleteAll() {
    return this.http.delete(baseUrl);
  }

  findByTitle(title) {
    return this.http.get(`${baseUrl}?title=${title}`);
  }
}
