import { Component, OnInit } from '@angular/core';
import { Client } from '../listclients/listclients.component';

@Component({
  selector: 'app-clientform',
  templateUrl: './clientform.component.html',
  styleUrls: ['./clientform.component.css']
})
export class ClientformComponent implements OnInit {

  constructor() { }
  client  = new Client ();
  ngOnInit(): void {
  }
  
  onSubmit(){
    
  }

}
