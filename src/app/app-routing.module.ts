import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashReceptionistComponent } from './dashboareds/dash-receptionist/dash-receptionist.component';


const routes: Routes = [
  {path: 'login',component : LoginComponent},
  {path: 'receptionistBoared',component : DashReceptionistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
