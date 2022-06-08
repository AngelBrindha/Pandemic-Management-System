import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { AddvolunteerComponent } from './addvolunteer/addvolunteer.component';
import { AdduserComponent } from './adduser/adduser.component';
import { VolunteerLoginComponent } from './volunteer-login/volunteer-login.component';
import { ListvolunteerComponent } from './listvolunteer/listvolunteer.component';
import { ListuserComponent } from './listuser/listuser.component';
import { TabComponent } from './tab/tab.component';
import { HttpCallInterceptor } from './interceptor';
import { ToastrModule } from 'ngx-toastr';
import { AdminadduserComponent } from './adminadduser/adminadduser.component';

const routes: Routes =[
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'volunteer', component: VolunteerComponent},
  {path: 'dashboard', component: DashboardsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'addvolunteer', component: AddvolunteerComponent},
  {path: 'adduser', component: AdduserComponent},
  {path: 'adminadduser', component: AdminadduserComponent},
  {path: 'volunteerlogin', component: VolunteerLoginComponent},
  {path: 'listvolunteer', component: ListvolunteerComponent},
  {path: 'listuser', component: ListuserComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppHeaderComponent,
    AboutComponent,
    VolunteerComponent,
    ContactComponent,
    LoginComponent,
    AppFooterComponent,
    DashboardsComponent,
    AdminComponent,
    AddvolunteerComponent,
    AdduserComponent,
    VolunteerLoginComponent,
    ListvolunteerComponent,
    ListuserComponent,
    TabComponent,
    AdminadduserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    ToastrModule.forRoot()

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpCallInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
