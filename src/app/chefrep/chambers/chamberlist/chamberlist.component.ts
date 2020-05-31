import { Component, OnInit } from '@angular/core';

export interface Chambre {
  id: number;
  refrence : any;
  nbLit: number;
  etat: boolean;
  telephone: boolean;
  wifi: boolean;
  television: boolean;
  douche: boolean;
  terrasse: boolean;
  superficie : string;
  vue : string;
  image : string;
  etage : any;
  categorieChambre : any;
  ligneResChambres: any[];
}

@Component({
  selector: 'app-chamberlist',
  templateUrl: './chamberlist.component.html',
  styleUrls: ['./chamberlist.component.css']
})
export class ChamberlistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
