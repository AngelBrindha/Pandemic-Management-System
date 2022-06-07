import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder, Validators } from '@angular/forms';
import { ApiAngularService } from '../api-angular.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-adminadduser',
  templateUrl: './adminadduser.component.html',
  styleUrls: ['./adminadduser.component.css']
})
export class AdminadduserComponent implements OnInit {
  userForm: FormGroup;
  submitted = false;

  constructor(private build:FormBuilder, private api: ApiAngularService, private router:Router,private toast: ToastrService) {
    this.userForm = this.build.group({
      user:['',[Validators.required]],
      gender: ['',[Validators.required]],
      age: ['',[Validators.required]],
      loc: ['',[Validators.required],[Validators.pattern("[1-9]{1}[0-9]{5}$")]],
      mobile: ['',[Validators.required],[Validators.pattern("[0-9]{10}$")]],
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
    
     this.api.add("pandemic-db", user).subscribe(res => {
      console.log(res);
      this.toast.success('data updated successfully');
      this.userForm.reset();
    });
    }

  onReset():void {
    this.submitted=false;
    this.userForm.reset();
  }
}
