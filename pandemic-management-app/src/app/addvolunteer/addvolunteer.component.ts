import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder, Validators, NgForm } from '@angular/forms';
import { ApiAngularService } from '../api-angular.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-addvolunteer',
  templateUrl: './addvolunteer.component.html',
  styleUrls: ['./addvolunteer.component.css']
})
export class AddvolunteerComponent implements OnInit {
  volunteerForm: FormGroup;
  submitted = false;
  array:any = [];
  data: any;
  
  constructor( private build:FormBuilder, private api: ApiAngularService, private router:Router) { 
    this.volunteerForm = this.build.group({
      id:['',[Validators.required]],
      name:['',[Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      mobilenum: ['',[Validators.required]],
      location: ['',[Validators.required]],
      _id:[''],
      _rev:['']

   });
  }

  ngOnInit(): void {
    this.volunteerForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      email: new FormControl(''),
      mobilenum: new FormControl(''),
      location: new FormControl(''),
      
    });
  this.submitted=true;

  }
  get id() {return this.volunteerForm.get('id')!;}
  get name() {return this.volunteerForm.get('name')!;}
  get email() {return this.volunteerForm.get('email')!;}
  get mobilenum() {return this.volunteerForm.get('mobilenum')!;}
  get location() {return this.volunteerForm.get('location')!;}

  saving(Formvalue: any) {

    const date = new Date();
    const volunteer = {
      id: Formvalue.id,
      name: Formvalue.name,
      email: Formvalue.email,
      mobilenum: Formvalue.mobilenum,
      location: Formvalue.location,
      type: "volunteer",
      createdBy:date


    }
    //angular to couch POST
     this.api.add("pandemic-db", volunteer).subscribe(res => {
      console.log(res);
      alert("Your data was posted successfully!");
      
      console.log('data posted')
      this.volunteerForm.reset();

    });
        }

  onReset():void {
    this.submitted=false;
    this.volunteerForm.reset();
  }
}
