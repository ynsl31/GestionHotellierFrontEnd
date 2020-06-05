import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashReceptionistComponent } from './dashboareds/dash-receptionist/dash-receptionist.component';
import { IndexComponent } from './index/index.component';
import { ListclientsComponent } from './listclients/listclients.component';
import { ClientformComponent } from './clientform/clientform.component';
import { ChamberlistComponent } from './chefrep/chambers/chamberlist/chamberlist.component';
import { ChamberformComponent } from './chefrep/chambers/chamberform/chamberform.component';
import { ChamberviewComponent } from './chefrep/chambers/chamberview/chamberview.component';
import { TariflistComponent } from './chefrep/tarifs/tariflist/tariflist.component';
import { TarifformComponent } from './chefrep/tarifs/tarifform/tarifform.component';


const routes: Routes = [
  {path: 'login',component : LoginComponent},
  {path: 'receptionistBoared',component : DashReceptionistComponent},
  {path: 'receptionistBoared/clients',component : ListclientsComponent},
  {path: 'receptionistBoared/clients/add/:id',component : ClientformComponent},
  {path: 'chefreceptionBoared',component : DashReceptionistComponent},
  {path: 'chefreceptionBoared/chambres',component : ChamberlistComponent},
  {path: 'chefreceptionBoared/chembers/add/:id',component : ChamberformComponent},
  {path: 'chefreceptionBoared/chembers/:id',component : ChamberviewComponent},
  {path: 'chefreceptionBoared/factures',component : ChamberlistComponent},
  {path: 'chefreceptionBoared/factures/add/:id',component : ChamberformComponent},
  {path: 'chefreceptionBoared/factures/:id',component : ChamberviewComponent},
  {path: 'chefreceptionBoared/tarifs',component : TariflistComponent},
  {path: 'chefreceptionBoared/tarifs/add/:id',component :TarifformComponent},
  {path: 'chefreceptionBoared/tarifs/:id',component : TariflistComponent},

  {path: '',component : IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
