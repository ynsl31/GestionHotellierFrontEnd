import { Component, OnInit } from '@angular/core';
import { Facture, FacturesService } from 'src/app/services/factures.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-facturelist',
  templateUrl: './facturelist.component.html',
  styleUrls: ['./facturelist.component.css']
})
export class FacturelistComponent implements OnInit {
  tslist: Facture[];
  message: string;
  constructor(private route: Router, private ts: FacturesService) { }

  retrievetslist() {
    this.ts.getAll()
      .subscribe(
        data => {
          this.tslist = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  ngOnInit(): void {
    this.retrievetslist();
  }

  updatets(t) {
    this.route.navigate(['/chefreceptionBoared/tarifsaisons/add', t])
  }
  deletets(t) {
    this.ts.deleteFacture(t).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of tarif ${t} Successful !`;
        this.retrievetslist();
      });
  }
}
