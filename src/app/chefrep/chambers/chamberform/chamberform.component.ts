import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Chambre } from '../chamberlist/chamberlist.component';
import { ChambersService } from 'src/app/services/chambers.service';
import { Router, ActivatedRoute } from '@angular/router';
import { EtagesService, Etage } from 'src/app/services/etages.service';
import { CategorieChambre, CategoriechambreService } from 'src/app/services/categoriechambre.service';

@Component({
  selector: 'app-chamberform',
  templateUrl: './chamberform.component.html',
  styleUrls: ['./chamberform.component.css']
})
export class ChamberformComponent implements OnInit {
  etage: Etage;
  chembre: Chambre;
  id;
  fileToUpload: File
  filepath
  items: any[] = [
    { id : 1 ,vue:  "beach" },
    { id: 2 ,vue: "city" }
  ];
  etats: any[] = [
    { name: 'en service', etat: true },
    { name: 'hors service', etat: false }
  ];
  etages: Etage[];
  categories: CategorieChambre[];
  

  constructor(private chservice: ChambersService, private router: Router, private route: ActivatedRoute, private etageservice: EtagesService, private categorieService: CategoriechambreService) { }

  ngOnInit(): void {
    this.chembre = new Chambre();
    this.chembre.etage= new Etage();
    this.chembre.categorieChambre=new CategorieChambre();
    this.id = this.route.snapshot.params['id']
    this.etageservice.getAll().subscribe(
      data => this.etages = data
    );
    this.categorieService.getAll().subscribe(
      data => this.categories = data
    )
    if (this.id != -1) {
      this.chservice.getChambre(this.id).subscribe(
        data => this.chembre = data
      );
      console.log(this.chembre);
    }
  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);

  }
  onSubmit(chembreModelForm: NgForm) {
    
    this.chembre.image = '/assets/img/paris-france-hotel-chambre-79468-1600-950-auto.jpg'
    if (this.id === -1) {
      this.chservice.createChambre(this.chembre)
        .subscribe(data => {
          console.log(data);

        });
      this.router.navigate(['/chefreceptionBoared/chambres']);
    } else {
      this.chservice.createChambre(this.chembre)
        .subscribe(data => {
          console.log(data);
          this.router.navigate(['/chefreceptionBoared/chambres']);

        });


    }

  }
}