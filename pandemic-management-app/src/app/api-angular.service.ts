import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiAngularService {
  logOutShow: boolean=false;
  show: boolean=true;

  url='https://784ea086-d974-431c-aa48-7801aa7b2561-bluemix.cloudantnosqldb.appdomain.cloud/'
  dbUserName='apikey-v2-23epskwaoah6sy6rvo29zejnn1k4kl1llrrq1ot36mry'
  dbPassword = '69c1d2737d371d9f6b7f6009287e6ccc'
   basicAuth = 'Basic ' + btoa(this.dbUserName + ':' + this.dbPassword);
  constructor(private http:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.basicAuth
    })
  };
  add(db: string, doc: object): Observable<{}> {
    const url = this.url + db;
    return this.http.post(url, doc, this.httpOptions)
  }
  get(data:any): Observable<{}> {
    const url = this.url +'pandemic-db/_find';
    return this.http.post( url,data, this.httpOptions)

  }
  validate(user:any){
    const url =  this.url +'pandemic-db/_find';
    const basicAuth = 'Basic ' + btoa(this.dbUserName + ':' + this. dbPassword );
    const object = {
      selector: {
        type: user.type,
        email: user.email
      },
    };
  
  return this.http.post(url, object, {
    headers: { Authorization: basicAuth },
  });
}
  Delete(id: any,rev:any): Observable<{}>  {
  this.url= this.url+'pandemic-db/'+id+'?rev='+rev;
  return this.http.delete(this.url,this.httpOptions)
  }
  showOff(){
    this.logOutShow = !this.logOutShow;
    this.show = !this.show;
    console.log(this.show)
  }
}
