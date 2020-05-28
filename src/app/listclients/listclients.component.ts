import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../services/clients.service';
import { User } from '../login/login.component';
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
  constructor(private  clientsservice : ClientsService) { }

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
}
