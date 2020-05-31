import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  username:string 
  role :string 
  constructor() { }
  
  ngOnInit(): void {
    this.username  = localStorage.getItem('username');
    this.role=localStorage.getItem('role');
  }
  
}
