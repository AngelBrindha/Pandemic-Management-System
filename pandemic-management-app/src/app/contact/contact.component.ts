import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder, Validators } from '@angular/forms';
import { ApiAngularService } from '../api-angular.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  submitted = false;
  constructor(private api:ApiAngularService, private build:FormBuilder,private toast: ToastrService) {
    
    this.contactForm = this.build.group({
      firstname: ['',[Validators.required,Validators.minLength(3)]],
      lastname: ['',[Validators.required,Validators.minLength(3)]],
      address: ['',[Validators.required]],
       email:['',[Validators.required,Validators.email]],
       mobile: ['',[Validators.required],[Validators.pattern("[0-9]{10}$")]],
       help: ['',[Validators.required]],
       information: ['']
    });
    
   }
  ngOnInit(): void { 
    this.contactForm = new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      address: new FormControl(''),
      email: new FormControl(''),
      mobile: new FormControl(''),
      help: new FormControl(''),
      information: new FormControl(''),
    });
  }
  get f(){
    return this.contactForm.controls;
  }


  get firstname() {return this.contactForm.get('firstname')!;} 
  get lastname() {return this.contactForm.get('lastname')!;} 
  get address() {return this.contactForm.get('address')!;} 
  get email() {return this.contactForm.get('email')!;}
  get mobile() {return this.contactForm.get('mobile')!;}
  get help() {return this.contactForm.get('help')!;} 
  get information() {return this.contactForm.get('information')!;} 

   
  onReset() {
    this.submitted = false;
    this.contactForm.reset();
}
  // postUser(Formvalue:NgForm){
  //   console.log(Formvalue);
  //   this.api.add1(Formvalue).subscribe(data=>{
  //     console.log(data);
  //     this.toast.success('data updated successfully');
  //     this.contactForm.reset();

  //   })
  // }
  saving(Formvalue: any) {

    const date = new Date();
    const contact = {
      firstname: Formvalue.firstname,
      lastname: Formvalue.lastname,
      address: Formvalue.address,
      email: Formvalue.email,
      mobile: Formvalue.mobile,
      help: Formvalue.help,
      information: Formvalue.information,
      type: "contact",
      createdBy:date


    }
    //angular to couch POST
     this.api.add("pandemic-db", contact).subscribe(res => {
      console.log(res);
      this.toast.success('data updated successfully');
      this.contactForm.reset();

    });
        }
  }


  
  
 
 