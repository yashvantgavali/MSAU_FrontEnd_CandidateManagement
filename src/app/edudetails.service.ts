import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Edudetails } from './edudetails';

@Injectable({
  providedIn: 'root'
})
export class EdudetailsService {

  private baseurl="http://localhost:8080/edudetails";
  str4:string='trends4';

  constructor(private httpClient :HttpClient) { }

  createEdudetails(edudetails : Edudetails):Observable<any>
  {
    return this.httpClient.post(`${this.baseurl}`,edudetails);
  }
  getEdudetailsById(id : any) : Observable<Edudetails>
  {
    return this.httpClient.get<Edudetails>(`${this.baseurl}/${id}`);
  }
  updateEdudetails(edudetails : Edudetails):Observable<any>
  {
    return this.httpClient.put(`${this.baseurl}`,edudetails);
  }
  getcountPerCourse() : Observable<any>
  {
    return this.httpClient.get(`${this.baseurl}/${this.str4}`);
  }
}
