import { Component, OnInit } from '@angular/core';
import {  FormGroup,FormBuilder,AbstractControl,  Validators } from '@angular/forms';
import { ApiServiceService } from '../api-service.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Validation from '../validation';


@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css']
})
export class VolunteerComponent implements OnInit {
  signUpForm: FormGroup;
  submitted = false;
  
  userRecord: any ={
    fullName:'',
    Username:'',
    emailId:'',
    Password:'',
    Confirmpassword:'',

   };

  constructor(private api:ApiServiceService, private build:FormBuilder, private http:HttpClient, private router: Router) {
    this.signUpForm=this.build.group({
      fullName:[this.userRecord.fullName],
      Username :[this.userRecord.Username],
      emailId:[this.userRecord. emailId],
      Password:[this.userRecord.Password],
      Confirmpassword:[this.userRecord.Confirmpassword],
      

    });
    
    
   }

  ngOnInit(): void {
   
    this.signUpForm = this.build.group(
      {
        fullname: ['',Validators.required],
        username:[
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],
        email:['',[Validators.required,Validators.email]],
        password:[
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        confirmPassword:['',Validators.required],
        acceptTerms:[false,Validators.requiredTrue]
      },
      {
        validators:[Validation.match('password','confirmPassword')]
      }
    );
    }
    get f(): {[key:string]:AbstractControl} {
      return this.signUpForm.controls;
    }
    onSubmit(Formvalue:any): void {
      
      console.log("from form",Formvalue);
      this.api.add(Formvalue).subscribe((data) => {
        console.log("data returned from server",data);
      })
      this.router.navigate(['/login']);          
      this.signUpForm.reset();
      this.submitted=true;
      if (this.signUpForm.invalid) {
        return;
      }

      console.log(JSON.stringify(this.signUpForm.value,null,2));
      alert("data posted successfully");
      
    }
    
    onReset():void {
      this.submitted=false;
      this.signUpForm.reset();
    }
     
  }




