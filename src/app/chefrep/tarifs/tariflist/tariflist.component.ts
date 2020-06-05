import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TarifsaisonsService, Tarifsaison } from 'src/app/services/tarifsaisons.service';

@Component({
  selector: 'app-tariflist',
  templateUrl: './tariflist.component.html',
  styleUrls: ['./tariflist.component.css']
})
export class TariflistComponent implements OnInit {
  tslist: Tarifsaison;
  message: string;

  constructor(private route: Router, private ts: TarifsaisonsService) { }
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

  updatets(t, s) {
    this.route.navigate(['/chefreceptionBoared/tarifsaisons/add', t, s])
  }
  deletets(t, s) {
    this.ts.deleteTarifsaison(t, s).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of tarif ${t} of saison ${s} Successful !`;
        this.retrievetslist();
      });
  }

}
