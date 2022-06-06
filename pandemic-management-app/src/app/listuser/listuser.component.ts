import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiAngularService } from '../api-angular.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {
  array:any = [];
 allUser: any;
  allUserData: any;
  
  constructor(private build:FormBuilder, private api: ApiAngularService, private router:Router) { 
   this.saving()

  }
 

  ngOnInit(): void {
    console.log('listuser');
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
        this.api.Delete(id,rev).subscribe(res=>{
          console.log(res);
        alert("Deleted sucessfully");
        window. location. reload();
        })
      }
      }


