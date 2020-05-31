import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../services/clients.service';
import { User } from '../login/login.component';
import { Router } from '@angular/router';
export class Client extends User{
  reference : string;
  nationnalite: string;
}
@Component({
  selector: 'app-listclients',
  templateUrl: './listclients.component.html',
  styleUrls: ['./listclients.component.css']
})
export class ListclientsComponent implements OnInit {
clients ;
message;
  constructor(private  clientsservice : ClientsService,private route :Router ) { }

  ngOnInit(): void {
    this.retrieveClints();
  }
  retrieveClints() {
    this.clientsservice.getAll()
      .subscribe(
        data => {
          this.clients = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });  
  }
  deleteClient(id){
    console.log(`delete client ${id}`);
    this.clientsservice.deleteclient(id).subscribe(
      response=> {console.log(response);
        this.message=`Delete of todo ${id} Successful !`;
        this.retrieveClints();
  });
 
}

updateClient(id){
  this.route.navigate(['/receptionistBoared/clients/add',id])
}




}
