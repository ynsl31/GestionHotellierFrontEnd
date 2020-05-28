import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../login/login.component';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  login(login:string,pwd:string) : Observable<User> {
    const params = new HttpParams()
  .set('login', login)
  .set('pwd', pwd);
    return this.http.get<User>('http://localhost:8081/users/auth',{params});
  }
}
