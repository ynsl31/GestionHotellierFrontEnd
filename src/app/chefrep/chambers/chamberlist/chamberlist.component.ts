import { Component, OnInit } from '@angular/core';
import { ChambersService } from 'src/app/services/chambers.service';
import { Router } from '@angular/router';
import { Etage } from 'src/app/services/etages.service';
import { CategorieChambre } from 'src/app/services/categoriechambre.service';

export class Chambre {
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
  etage : Etage;
  categorieChambre : CategorieChambre;
  ligneResChambres: any[];
}

@Component({
  selector: 'app-chamberlist',
  templateUrl: './chamberlist.component.html',
  styleUrls: ['./chamberlist.component.css']
})
export class ChamberlistComponent implements OnInit {
chambres  ;
message ;
  constructor(private  chservice : ChambersService ,private route :Router ) { }

  ngOnInit(): void {
    this.retrieveChambres();
  }
  retrieveChambres() {
    this.chservice.getAll()
      .subscribe(
        data => {
          this.chambres = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });  
  }
  updatechambre(id){
    this.route.navigate(['/chefreceptionBoared/chembers/add',id])
  }
  deletechambre(id){
    this.chservice.deleteChambre(id).subscribe(
      response => {console.log(response);
      this.message=`Delete of chambre ${id} Successful !`;
      this.retrieveChambres();
    } );
  }
}
