import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Candidate } from '../candidate';
import { CandidateService } from '../candidate.service';
import { Edudetails } from '../edudetails';
import { EdudetailsService } from '../edudetails.service';

@Component({
  selector: 'app-candidatelist',
  templateUrl: './candidatelist.component.html',
  styleUrls: ['./candidatelist.component.css']
})
export class CandidatelistComponent implements OnInit {
  p : number=1;
  candidates: Candidate[]=[];
  edudetails : Edudetails[]=[];
  nameSearch:String='';
  constructor(private candidateService :CandidateService,private router : Router) { }

  ngOnInit(): void {
    this.getCandidate();
  }
   private getCandidate()
  {
    this.candidateService.getCandidateList().subscribe(data=>{this.candidates=data});
  }
  updateCandidate(id : any)
  {
    this.router.navigate(['update',id]);
  }
  deleteCandidate(id : any)
  {
    if (confirm("Are You sure ! You want to Delete ")) {
      this.candidateService.deleteCandidateById(id).subscribe(data=>{});
      alert("Candidate Deleted Successfully!");
      this.getCandidate();
    } else {
      
    }
    
    
  }
  viewCandidate(id : any)
  {
    this.router.navigate(['view',id]);
  }

}

// Todo-on delete auto refresh
