import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators, FormBuilder, FormControl} from '@angular/forms';
import { ApiServiceService } from '../api-service.service';
import { ApiAngularService } from '../api-angular.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.css']
})
export class  DashboardsComponent implements OnInit {
  adminForm: FormGroup;
  submitted = false;
  userRecord: any ={
    Username:'',
    Password:''

   };
  constructor(private fb:FormBuilder,private api:ApiServiceService, private http:HttpClient, private router:Router, private api1: ApiAngularService,private toast: ToastrService) { 
    this.adminForm = this.fb.group({
      username:['',[Validators.required]],
      password: ['',[Validators.required]]
   });
    
  }

  ngOnInit(): void {
    this.adminForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });

    this.adminForm = this.fb.group(
      {
        username:[
          '',
          [
            Validators.required
          ]
        ],
        password:[
          '',
          [
            Validators.required
          ]
        ],
       
      },

    );
    }
  get username() {return this.adminForm.get('username')!;}
  get password() {return this.adminForm.get('password')!;}

    
      onReset():void {
      this.submitted=false;
      this.adminForm.reset();
    }

    saving(Formvalue: any) {
      console.log("from form", Formvalue);
      this.api.adminGet(Formvalue.username).subscribe((data) => {
        if(data.docs[0].username == Formvalue.username && data.docs[0].password == Formvalue.password){
         this.api1.showOff();
      this.toast.success('login successfully');
          this.router.navigate(['/admin']);          
          }
          else {
        this.toast.error('Invalid  Password');      
            }
     this.submitted=true;
      
      })

    }
  
}