import { Component, OnInit } from '@angular/core';
import { Facture, ModePaiement } from 'src/app/services/factures.service';

@Component({
  selector: 'app-factureform',
  templateUrl: './factureform.component.html',
  styleUrls: ['./factureform.component.css']
})
export class FactureformComponent implements OnInit {
facture : Facture
modes : ModePaiement
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){}


}
