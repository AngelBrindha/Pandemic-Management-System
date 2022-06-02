import { Component, OnInit } from '@angular/core';
import { ApiAngularService } from '../api-angular.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  constructor(public api1: ApiAngularService, private router: Router) { }

  ngOnInit(): void {
    console.log('header');
  }
  logout(){
    this.api1.logoutshow=false;
    this.api1.show=true;
    this.router.navigate(['/login'])

  }
  dashboard(){
    this.api1.logoutshow=false;
    this.api1.show=true;
    this.router.navigate(['/dashboard'])

  }

}
