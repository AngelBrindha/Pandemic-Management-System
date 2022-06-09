import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder, Validators } from '@angular/forms';
import { ApiAngularService } from '../api-angular.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  userForm: FormGroup;
  submitted = false;
  isThirdInputFieldVisible: boolean = false;
  isInputFieldVisible: boolean = false;
 
  constructor(private build:FormBuilder, private api: ApiAngularService, private router:Router,private toast: ToastrService) { 

    
    this.userForm = this.build.group({
      user:['',[Validators.required]],
      gender: ['',[Validators.required]],
      dob: ['',[Validators.required]],
      loc: ['',[Validators.required],[Validators.pattern("[1-9]{1}[0-9]{5}$")]],
      mobile: ['',[Validators.required],[Validators.pattern("[0-9]{10}$")]],
      status: [''],
      vaccinename: [''],
      test: [''],
      result: [''],
      _id:[''],
      _rev:['']

   });
   
  }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      user: new FormControl(''),
      gender: new FormControl(''),
      dob: new FormControl(''),
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
  get dob() {return this.userForm.get('dob')!;}
  get loc() {return this.userForm.get('loc')!;}
  get mobile() {return this.userForm.get('mobile')!;}
  get status() {return this.userForm.get('status')!;}
  get vaccinename() {return this.userForm.get('vaccinename')!;}
  get test() {return this.userForm.get('test')!;}
  get result() {return this.userForm.get('result')!;}

  saving(Formvalue: any) {
    const date = new Date();
    
    const user = {
      user: Formvalue.user,
      gender: Formvalue.gender,
      dob: Formvalue.dob,
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
    },
    (_rej) => {
      this.toast.error('Unable to update');
    });
    }

  onReset():void {
    this.submitted=false;
    this.userForm.reset();
  }
  onChangeSecondInputField(value: any) {
    if (value == 'Yes') {
    this.isThirdInputFieldVisible = true;
    } else if (value == 'No') {
    this.isThirdInputFieldVisible = false;
  }
 }
 onChangeInputField(value: any) {
  if (value == 'yes') {
  this.isInputFieldVisible = true;
  } else if (value == 'no') {
  this.isInputFieldVisible = false;
}
}
}
