import { Component, OnInit } from '@angular/core';
import { Tarifsaison, Saison, TarifSaisonPK, TarifsaisonsService } from 'src/app/services/tarifsaisons.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Tarif, TarifService } from 'src/app/services/tarif.service';
import { SaisonsService } from 'src/app/services/saisons.service';

@Component({
  selector: 'app-tarifform',
  templateUrl: './tarifform.component.html',
  styleUrls: ['./tarifform.component.css']
})
export class TarifformComponent implements OnInit {
  tarifs : Tarifsaison
  tariflist : Tarif[]
  saisonlist : Saison[]
  constructor(private tsservice: TarifsaisonsService, private router: Router, private route: ActivatedRoute,private sservice: SaisonsService,private tservice: TarifService) { }

  ngOnInit(): void {
    this.tarifs = new Tarifsaison();
    this.tarifs.saison = new Saison();
    this.tarifs.tarif = new Tarif();
    this.tarifs.tarifSaisonPK = new TarifSaisonPK();
    this.sservice.getAll().subscribe(
      data => {  this.saisonlist=data ;
        console.log(data);
        // this.router.navigate(['/chefreceptionBoared/arifs']);

      
      
        // this.router.navigate(['/chefreceptionBoared/arifs']);

      }
    ); 
    this.tservice.getAll().subscribe(
      data => {  this.tariflist=data ;
        console.log(data);
        // this.router.navigate(['/chefreceptionBoared/arifs']);
        // this.router.navigate(['/chefreceptionBoared/arifs']);

      }
    ); }
  onSubmit(){
    this.tarifs.tarifSaisonPK.tarif = this.tarifs.tarif.id
    this.tarifs.tarifSaisonPK.saison = this.tarifs.saison.id
    this.tsservice.createTarifsaison(this.tarifs).subscribe(
      data => {
        console.log(data);
         this.router.navigate(['/chefreceptionBoared/tarifs']);

      }

    );
  }
}
