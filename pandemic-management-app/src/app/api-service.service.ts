import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:HttpClient) { }
  add(formobject:any){
      return this.http.post("http://localhost:8000/signup",formobject)

  }
  
  add1(formobject:any){
    return this.http.post("http://localhost:8000/contact",formobject)
}

  test_get(id:any)
  {
    return this.http.get<any>('http://localhost:8000/getdata/'+id);
  }
  admin_get(id:any)
  {
    return this.http.get<any>('http://localhost:8000/getadmindata/'+id);
  }
  
}