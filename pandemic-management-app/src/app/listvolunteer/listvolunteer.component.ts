import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiAngularService } from '../api-angular.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-listvolunteer',
  templateUrl: './listvolunteer.component.html',
  styleUrls: ['./listvolunteer.component.css']
})
export class ListvolunteerComponent implements OnInit {
  array:any = [];
  data: any;
  allVolunteer: any;
  allVolunteerData: any;
  boolean = true;
  

  constructor( private build:FormBuilder, private api: ApiAngularService, private router:Router) { 
  this.saving()

  
  }

  ngOnInit(): void {
    console.log('listvolunteer');
  }
  
  saving() {

    let data = {
      selector: {
        type: "volunteer"
      },
      "sort": [
         {
            "createdBy": "desc"
         }
      ]
    }
    
    this.api.get(data).subscribe(res => {
      this.allVolunteer=res;
      console.log(res);
      this.allVolunteer = this.allVolunteer.docs;
      this.allVolunteerData = this.allVolunteer
      console.log(this.allVolunteerData[0]);
      for (const array in this.allVolunteerData) {
        console.log(this.allVolunteerData[array])
      }
      
    });
    
    }
    delete(id:any,rev:any){
      if (confirm("Do you really want to delete ?") === true) {
        this.api.Delete(id,rev).subscribe(res=>{
          console.log(res);
          window. location. reload();

        })
      } else {
        window. location. reload();
      }
     
       
    }
    }
  


