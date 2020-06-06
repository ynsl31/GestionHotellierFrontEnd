import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FacturesService, Facture } from 'src/app/services/factures.service';
import { ClientsService } from 'src/app/services/clients.service';
import { ReservationService } from 'src/app/services/reservation.service';
import { Client } from 'src/app/listclients/listclients.component';
import { ThrowStmt } from '@angular/compiler';
import * as jsPDF from 'jspdf';  

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {
  facture;
  client;
  id;
  total: number;
  date;
  totaldays;
  ts ;
  service ;


  constructor(private route: Router, private router: ActivatedRoute, private fa: FacturesService, private cl: ClientsService, private rs: ReservationService) { }

  ngOnInit(): void {
    this.total = 0;

 this.totaldays = 0;
    this.ts = 0 ;
    this.id = this.router.snapshot.params['id']
    this.facture = new Facture();
    this.client = new Client();
    this.date = new Date().toLocaleDateString();
    this.fa.getFactureByIdClient(this.id).subscribe(
      data => {
      this.facture = data;
        console.log(data);
        // this.router.navigate(['/chefreceptionBoared/arifs']);
        // this.router.navigate(['/chefreceptionBoared/arifs']);

      }
    );
    this.cl.getclient(this.id).subscribe(data => {
    this.client = data;
      console.log(data);
      // this.router.navigate(['/chefreceptionBoared/arifs']);
      // this.router.navigate(['/chefreceptionBoared/arifs']);

    }
    );
    this.fa.getTotalPrixParClient(this.id).subscribe(data => {
    this.total = data;
      console.log(data);
      // this.router.navigate(['/chefreceptionBoared/arifs']);
      // this.router.navigate(['/chefreceptionBoared/arifs']);

    }
    );
 this.fa.gettotalDaysByIdClient(this.id).subscribe(data => {
  this.totaldays = data;
    console.log(data);
    // this.router.navigate(['/chefreceptionBoared/arifs']);
    // this.router.navigate(['/chefreceptionBoared/arifs']);

  }
  );
  this.service = Math.floor(Math.random()*(1000-150+1)+150)
  this.ts = this.service +this.total
  }
  @ViewChild('pay') content: ElementRef; 
  Onprint(){
    let content=this.content.nativeElement;  
    let doc = new jsPDF('p', 'pt', 'a4', 1);  
    let _elementHandlers =  
    {  
      '#editor':function(element){  
        return true;  
      }  
    };  
    doc.fromHTML(content.innerHTML, 15, 15, {
      'width': 500, // max width of content on PDF
      'elementHandlers': _elementHandlers
    },
      function (bla) { doc.output('saveInCallback.pdf'); },
      0);

}}
