import { Component, OnInit } from '@angular/core';
import {  FormGroup,FormBuilder,AbstractControl,  Validators } from '@angular/forms';
import { ApiServiceService } from '../api-service.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Validation from '../validation';
import { ToastrService } from 'ngx-toastr';
import { ApiAngularService } from '../api-angular.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signUpForm: FormGroup;
  submitted = false;
  check=0;
  submit=false;
  objectArray: any =[]
  
  userRecord: any ={
    fullName:'',
    Username:'',
    emailId:'',
    Password:'',
    Confirmpassword:'',

   };
  allData: any;

   constructor(private api:ApiServiceService,private api1:ApiAngularService, private build:FormBuilder, private http:HttpClient, private router: Router,private toast: ToastrService) {
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
      this.toast.success('you are registered successfully');
      },
      (rej) => {
        this.toast.error('Registeration Failed',rej);
      })
      
      this.signUpForm.reset();
      this.submitted=true;
      if (this.signUpForm.invalid) {
        return;
      }

      console.log(JSON.stringify(this.signUpForm.value,null,2));
      this.router.navigate(['/login']);          

      
    }
    EmailValidity(){
      const emailValue = this.signUpForm.value['email']
      const email = {
        'email':emailValue,
        'type':'signup'
      } 
      this.api1.validate(email).subscribe((response:any)=>{
        console.log(response)
        if(response.docs.length >=1){
        this.toast.error("Email Id already exist");
        this.submit =false
        }
        else{
          this.submit =true
        }
      },(err: any)=>{
        console.error(err)
      })
    }
    
    onReset():void {
      this.submitted=false;
      this.signUpForm.reset();
    }
     
  }