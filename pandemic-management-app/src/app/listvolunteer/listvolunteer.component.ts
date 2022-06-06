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
  allvolunteer: any;
  allvolunteerData: any;
  

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
      this.allvolunteer=res;
      console.log(res);
      this.allvolunteer = this.allvolunteer.docs;
      this.allvolunteerData = this.allvolunteer
      console.log(this.allvolunteerData[0]);
      for (const array in this.allvolunteerData) {
        console.log(this.allvolunteerData[array])
      }
      
    });
    
    }
    delete(id:any,rev:any){
      this.api.Delete(id,rev).subscribe(res=>{
        console.log(res);
        alert("Deleted sucessfully");
        window. location. reload();

      })
    }
    }
  


