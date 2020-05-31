import { Component, OnInit } from '@angular/core';
import { Client } from '../listclients/listclients.component';
import { NgForm } from '@angular/forms';
import { ClientsService } from '../services/clients.service';
import { Router, ActivatedRoute } from '@angular/router';


 function  makeRandom(lengthOfCode: number, possible: string) {
  let text = "";
  for (let i = 0; i < lengthOfCode; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
    return text;
}


@Component({
  selector: 'app-clientform',
  templateUrl: './clientform.component.html',
  styleUrls: ['./clientform.component.css']
})
export class ClientformComponent implements OnInit {
  possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890*&^%$#@";
   lengthOfCode = 8;
   client  :Client
   id ;
  constructor(private cls : ClientsService,private router :Router,private route :ActivatedRoute ) { }
  ngOnInit(): void {
    console.log(this.route.snapshot.params['id'])
    this.id =this.route.snapshot.params['id']
    this.client = new Client()
    console.log(this.id)
    if(this.id != -1){
      this.cls.getclient(this.id).subscribe(
        data => this.client=data
      );
    }
    this.client.pwd=makeRandom(this.lengthOfCode,this.possible)
  }
  
  onSubmit(clientModelForm:NgForm){
    console.log(clientModelForm.form, clientModelForm.value);
    if(this.id === -1){ 
    this.cls.createclient(this.client)
    .subscribe(data=> { 
      console.log(data);

      });
      this.router.navigate(['../receptionistBoared/clients']);
    }else {
      this.cls.createclient(this.client)
    .subscribe(data=> { 
      console.log(data);
      this.router.navigate(['../receptionistBoared/clients']);

      });

    }
  }

 
  

}
