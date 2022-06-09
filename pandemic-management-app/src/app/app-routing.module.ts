import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { AdminComponent } from './admin/admin.component';
import { AddvolunteerComponent } from './addvolunteer/addvolunteer.component';
import { AdduserComponent } from './adduser/adduser.component';
import { VolunteerLoginComponent } from './volunteer-login/volunteer-login.component';
import { ListvolunteerComponent } from './listvolunteer/listvolunteer.component';
import { ListuserComponent } from './listuser/listuser.component';
import { AdminadduserComponent } from './adminadduser/adminadduser.component';
import { RegisterComponent } from './register/register.component';
import { ListcontactComponent } from './listcontact/listcontact.component';

const routes: Routes =[
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'register', component: RegisterComponent},
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
  {path: 'listcontact', component: ListcontactComponent},
];




@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
