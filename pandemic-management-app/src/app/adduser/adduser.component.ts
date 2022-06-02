import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder, Validators, NgForm } from '@angular/forms';
import { ApiAngularService } from '../api-angular.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  userForm: FormGroup;
  submitted = false;
  
  array:any = [];
  data: any;
 alluser: any;
  alluserData: any;
  maxDate: string | undefined;
 
  constructor(private build:FormBuilder, private api: ApiAngularService, private router:Router) { 

    
    this.userForm = this.build.group({
      user:['',[Validators.required]],
      gender: ['',[Validators.required]],
      age: ['',[Validators.required]],
      loc: ['',[Validators.required]],
      mobile: ['',[Validators.required]],
      _id:[''],
      _rev:['']

   });
   
  }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      user: new FormControl(''),
      gender: new FormControl(''),
      age: new FormControl(''),
      loc: new FormControl(''),
      mobile: new FormControl(''),
      status: new FormControl(''),
      vaccinename: new FormControl(''),
      test: new FormControl(''),
      result: new FormControl(''),
      
    });
    
  this.submitted=true;

  }
  get user() {return this.userForm.get('user')!;}
  get gender() {return this.userForm.get('gender')!;}
  get age() {return this.userForm.get('age')!;}
  get loc() {return this.userForm.get('loc')!;}
  get mobile() {return this.userForm.get('mobile')!;}

  saving(Formvalue: any) {
    const date = new Date();
    
    const user = {
      user: Formvalue.user,
      gender: Formvalue.gender,
      age: Formvalue.age,
      loc: Formvalue.loc,
      mobile: Formvalue.mobile,
      status: Formvalue.status,
      vaccinename: Formvalue.vaccinename,
      test: Formvalue.test,
      result: Formvalue.result,
      type: "user",
      createdBy:date

    }
    
    //angular to couch POST
     this.api.add("pandemic-db", user).subscribe(res => {
      console.log(res);
      alert("Your data was posted successfully!");
      console.log('data posted')
      this.userForm.reset();
    });
    }

  onReset():void {
    this.submitted=false;
    this.userForm.reset();
  }
}
