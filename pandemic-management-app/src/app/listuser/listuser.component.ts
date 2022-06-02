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
 alluser: any;
  alluserData: any;
  
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
      
      //get the all datapppppp
      this.api.get(data).subscribe(res => {
        this.alluser=res;
        console.log(res);
        this.alluser = this.alluser.docs;
        this.alluserData = this.alluser
        console.log(this.alluserData[0]);
        for (const array in this.alluserData) {
          console.log(this.alluserData[array])
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


