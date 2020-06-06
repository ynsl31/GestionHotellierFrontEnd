import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../listclients/listclients.component';
import { Etage } from './etages.service';
import { CategorieChambre } from './categoriechambre.service';
import { Chambre } from '../chefrep/chambers/chamberlist/chamberlist.component';
import { Observable } from 'rxjs';
const baseUrl = 'http://localhost:8081/factures';

export class Facture {
  id:           number;
  reference:    string;
  dateFacture:  Date;
  modePaiement: ModePaiement;
  reservations: Reservation[];
}

export class ModePaiement {
  id:        number;
  reference: string;
  type:      string;
}
export class LigneReservChambrePK {
  chambre:     number;
  reservation: number;
}


export class LigneReschambre {
  ligneReservChambrePK: LigneReservChambrePK;
  dateArrivee:          Date;
  dateSortie:           Date;
  chambre:             Chambre;
  reservation:          Reservation;
}

export class Reservation {
  id:                number;
  reference:         string;
  nbPersonne:        number;
  etat:              boolean;
  dateReservation:   Date;
  regime:            null;
  client:            Client;
  services:          any[];
  ligneReschambres?: LigneReschambre[];
  ligneRessalles:    any[];
}


@Injectable({
  providedIn: 'root'
})
export class FacturesService {

  constructor( private http: HttpClient) { }


  getAll() {
    return this.http.get<Facture[]>(`${baseUrl}/all`);
  }

  getFacture(id) {
    return this.http.get<Facture>(`${baseUrl}/find/${id}`);
  }

  createFacture(Facture : Facture): Observable<Facture> {
    return this.http.post<Facture>(baseUrl+'/save',Facture);
  }
  handleError(error: any) {
    throw new Error("Method not implemented.");
  }

  updateFacture(id, data) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  deleteFacture(id) {
    return this.http.delete(`${baseUrl}/delete/${id}`);
  }

  deleteAll() {
    return this.http.delete(baseUrl);
  }

  findByTitle(title) {
    return this.http.get(`${baseUrl}?title=${title}`);
  }


  getTotalPrixParFacture(id) {
    return this.http.get<number>(`${baseUrl}/totalprix/${id}`);
  }
  getTotalPrixParClient(id) {
    return this.http.get<number>(`${baseUrl}/client/totalprix/${id}`);
  }
  getFactureByIdClient(id) {
    return this.http.get<Facture>(`${baseUrl}/client/${id}`);
  }
  gettotalDaysByIdClient(id) {
    return this.http.get<number>(`${baseUrl}/totaldays/${id}`);
  }
}
