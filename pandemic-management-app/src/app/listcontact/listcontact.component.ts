import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiAngularService } from '../api-angular.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listcontact',
  templateUrl: './listcontact.component.html',
  styleUrls: ['./listcontact.component.css']
})
export class ListcontactComponent implements OnInit {
  array:any = [];
  data: any;
  allContact: any;
  allContactData: any;

  constructor( private build:FormBuilder, private api: ApiAngularService, private router:Router) { 
    this.saving()
  }

  ngOnInit(): void {
    console.log('listcontact');

  }
  saving() {

    let data = {
      selector: {
        type: "contact"
      },
      "sort": [
         {
            "createdBy": "desc"
         }
      ]
    }
    
    this.api.get(data).subscribe(res => {
      this.allContact=res;
      console.log(res);
      this.allContact = this.allContact.docs;
      this.allContactData = this.allContact
      console.log(this.allContactData[0]);
      for (const array in this.allContactData) {
        console.log(this.allContactData[array])
      }
      
    });
    
    }

}
