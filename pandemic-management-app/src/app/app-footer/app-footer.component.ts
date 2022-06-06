import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.css']
})
export class AppFooterComponent implements OnInit {

  constructor() { 
    console.log("footer");
   }

  ngOnInit(): void {
    console.log("footer");
  }

}
