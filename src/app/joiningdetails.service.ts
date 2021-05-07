import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Joiningdetails } from './joiningdetails';

@Injectable({
  providedIn: 'root'
})
export class JoiningdetailsService {

  private baseurl="http://localhost:8080/joining";
  str1:string='trends1';
  str2:string='trends2';
  str3:string='trends3';
  constructor(private httpClient :HttpClient) { }

  createJoiningdetails(joiningdetails : Joiningdetails) : Observable<any>{
    return this.httpClient.post(`${this.baseurl}`,joiningdetails);
  }
  getJoiningdetailsById(id : any): Observable<Joiningdetails>
  {
    return this.httpClient.get<Joiningdetails>(`${this.baseurl}/${id}`);
  }
  updateJoiningdetails(joiningdetails : Joiningdetails):Observable<any>{
    return this.httpClient.put(`${this.baseurl}`,joiningdetails);
  }
  getcountPerYear():Observable<any>
  {
    return this.httpClient.get(`${this.baseurl}/${this.str1}`);
  }
  getcountPerLocation():Observable<any>
  {
    return this.httpClient.get(`${this.baseurl}/${this.str2}`);
  }
  getcountPerTechnology() : Observable<any>
  {
    return this.httpClient.get(`${this.baseurl}/${this.str3}`);
  }

}
