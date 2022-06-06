import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder, NgForm, Validators } from '@angular/forms';
import { ApiServiceService } from '../api-service.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  submitted = false;
  constructor(private api:ApiServiceService, private build:FormBuilder) {
    
    this.contactForm = this.build.group({
      firstname: ['',[Validators.required,Validators.minLength(3)]],
      lastname: [''],
      address: [''],
       email:['',[Validators.required,Validators.email]],
       mobile: ['',[Validators.required]],
       help: [''],
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
  get email() {return this.contactForm.get('email')!;}
  get mobile() {return this.contactForm.get('mobile')!;}
   
 
  onSubmit(form: FormGroup) {
    this.submitted = true;
    console.log('Valid?', form.valid);
    console.log('firstname', form.value.firstname);
    console.log('lastname', form.value.lastname);
    console.log('address', form.value.address);
    console.log('email', form.value.email);
    console.log('mobile', form.value.mobile);
    console.log('help', form.value.help);
    console.log('information', form.value.information);
  }
  onReset() {
    this.submitted = false;
    this.contactForm.reset();
}
  postUser(Formvalue:NgForm){
    console.log(Formvalue);
    this.api.add1(Formvalue).subscribe(data=>{
      console.log(data);
    })
  }
  }


  
  
 
 