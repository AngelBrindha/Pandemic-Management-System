import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder, Validators } from '@angular/forms';
import { ApiAngularService } from '../api-angular.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-addvolunteer',
  templateUrl: './addvolunteer.component.html',
  styleUrls: ['./addvolunteer.component.css']
})
export class AddvolunteerComponent implements OnInit {
  volunteerForm: FormGroup;
  submitted = false;
  
  constructor( private build:FormBuilder, private api: ApiAngularService, private router:Router,private toast: ToastrService) { 
    this.volunteerForm = this.build.group({
      id:['',[Validators.required]],
      name:['',[Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      mobilenum: ['',[Validators.required],[Validators.pattern("[0-9]{10}$")]],
      location: ['',[Validators.required],[Validators.pattern("[0-9]{6}$")]],
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
      this.toast.success('data updated successfully');
      this.volunteerForm.reset();

    });
        }

  onReset():void {
    this.submitted=false;
    this.volunteerForm.reset();
  }
}
