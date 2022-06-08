import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiAngularService } from '../api-angular.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-volunteer-login',
  templateUrl: './volunteer-login.component.html',
  styleUrls: ['./volunteer-login.component.css']
})
export class VolunteerLoginComponent implements OnInit {
  array:any = [];
 allUser: any;
  allUserData: any;

  constructor(private build:FormBuilder, private api: ApiAngularService, private router:Router) {
    console.log("login sucessfully");
    this.saving()
   }

  ngOnInit(): void {
    console.log("login sucessfully");
  }
  saving() {

    let data = {
      selector: {
        type: "user"
      },
     
      "sort": [
         {
            "createdBy": "desc"
         }
      ]
    }
    
    this.api.get(data).subscribe(res => {
      this.allUser=res;
      console.log(res);
      this.allUser = this.allUser.docs;
      this.allUserData = this.allUser
      console.log(this.allUserData[0]);
      for (const array in this.allUserData) {
        console.log(this.allUserData[array])
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
