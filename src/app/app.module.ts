import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashfooterComponent } from './dashfooter/dashfooter.component';
import { DashReceptionistComponent } from './dashboareds/dash-receptionist/dash-receptionist.component';
import { DashChefreceptionistComponent } from './dashboareds/dash-chefreceptionist/dash-chefreceptionist.component';
import { LoginService } from './services/login.service';
import {FormsModule} from"@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { StatisticsComponent } from './statistics/statistics.component';
import { ListclientsComponent } from './listclients/listclients.component';
import { ClientsService } from './services/clients.service';
import { ClientformComponent } from './clientform/clientform.component';
import { ChamberlistComponent } from './chefrep/chambers/chamberlist/chamberlist.component';
import { ChamberformComponent } from './chefrep/chambers/chamberform/chamberform.component';
import { ChamberviewComponent } from './chefrep/chambers/chamberview/chamberview.component';
import { TarifformComponent } from './chefrep/tarifs/tarifform/tarifform.component';
import { TariflistComponent } from './chefrep/tarifs/tariflist/tariflist.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    IndexComponent,
    LoginComponent,
    NavbarComponent,
    SidebarComponent,
    DashfooterComponent,
    DashReceptionistComponent,
    DashChefreceptionistComponent,
    StatisticsComponent,
    ListclientsComponent,
    ClientformComponent,
    ChamberlistComponent,
    ChamberformComponent,
    ChamberviewComponent,
    TarifformComponent,
    TariflistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LoginService,ClientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
