import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { NgForm } from '@angular/forms';

export class User {
   id : number;
  login : string ;
	 pwd :string;
	  nom :string;
	  prenom : string ;
	  mail  : string;
	  adresse : string ;
    tel : string  ;
    profile : string  ;

}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:string
  pwd : string
  user : User
  constructor(private route : Router,
    private logservice : LoginService)
     {

     }
    
  ngOnInit(): void {
  }
  onSubmit(loginForm : NgForm){
  this.logservice.login(this.login,this.pwd) .subscribe(
    data=>this.user=data
    );
    if (this.user!=null){
      localStorage.setItem('username', this.user.login);
      localStorage.setItem('pwd', this.user.pwd);
      localStorage.setItem('role', this.user.profile);
     if(this.user.profile=="receptioniste"){
      this.route.navigate(["/receptionistBoared"]);
     }  if(this.user.profile=="chefreception"){
      this.route.navigate(["/chefreceptionBoared"]);
     }
    }


}
}
