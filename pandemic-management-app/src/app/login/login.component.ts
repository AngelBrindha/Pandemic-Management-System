import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder, Validators } from '@angular/forms';
import { ApiServiceService } from '../api-service.service';
import { ApiAngularService } from '../api-angular.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;

  constructor(private api:ApiServiceService, private build:FormBuilder, private router: Router, private api1: ApiAngularService) {
    this.myForm = this.build.group({
       email:['',[Validators.required,Validators.email]],
       password: ['',[Validators.required]]
    });
    
   }
   ngOnInit(): void {
    this.myForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }
  get email() {return this.myForm.get('email')!;}
  get password() {return this.myForm.get('password')!;}

  login(Formvalue:any)
  {
    console.log(Formvalue.email);
    this.api.testGet(Formvalue.email).subscribe((data)=>{
       if(data.docs[0].email == Formvalue.email && data.docs[0].password == Formvalue.password){
         this.api1.showOff();
      this.router.navigate(['/volunteerlogin']);      
      }
      else {
      alert("please check your password");
      }
    }
    )}
}
