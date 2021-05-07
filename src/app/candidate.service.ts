import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidate } from './candidate';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  private baseurl="http://localhost:8080/user";
  constructor(private httpClient :HttpClient) { }

  getCandidateList():Observable<Candidate[]>{
    return this.httpClient.get<Candidate[]>(`${this.baseurl}`);
  }
  createCandidate(candidate : Candidate) :Observable<any>
  {
    return this.httpClient.post(`${this.baseurl}`,candidate);
  }
  getCandidateById(id : any) : Observable<Candidate>
  {
    return this.httpClient.get<Candidate>(`${this.baseurl}/${id}`);
  }
  updateCandidate(candidate : Candidate) :Observable<any>
  {
    return this.httpClient.put(`${this.baseurl}`,candidate);
    
  }
  deleteCandidateById(id : any) :Observable<any>
  {
     return this.httpClient.delete(`${this.baseurl}/${id}`);
  }
}
