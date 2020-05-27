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
    DashChefreceptionistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
