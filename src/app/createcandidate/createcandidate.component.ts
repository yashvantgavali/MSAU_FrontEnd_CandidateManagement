import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Candidate } from '../candidate';
import { CandidateService } from '../candidate.service';
import { Edudetails } from '../edudetails';
import { EdudetailsService } from '../edudetails.service';
import { Joiningdetails } from '../joiningdetails';
import { JoiningdetailsService } from '../joiningdetails.service';

@Component({
  selector: 'app-createcandidate',
  templateUrl: './createcandidate.component.html',
  styleUrls: ['./createcandidate.component.css']
})
export class CreatecandidateComponent implements OnInit {
  
  
  

  
  candidate : Candidate =new Candidate();
  edudetails :Edudetails=new Edudetails();
  joiningdetails :Joiningdetails=new Joiningdetails();
  constructor(private candidateservice : CandidateService,private edudetailsservice :EdudetailsService,private joiningdetailsservice :JoiningdetailsService,private router :Router) { }



  ngOnInit(): void {
  }
  onSubmit()
  {
    

    this.saveAllDetails();
  }
  private saveAllDetails()
  {
    console.log(this.candidate);

    this.candidateservice.createCandidate(this.candidate).subscribe(data=>{
      console.log(data);
      this.edudetails.id=this.candidate.id;
      this.edudetailsservice.createEdudetails(this.edudetails).subscribe(data=>{
        console.log(data);
        this.joiningdetails.id=this.candidate.id;
        this.joiningdetailsservice.createJoiningdetails(this.joiningdetails).subscribe(data =>{
          console.log(data);
          alert("Candidate Added SuccessFully");
          this.gotoHomePage();

        },
        error =>console.log(error)
        );
        
      },
      error =>console.log(error)
      );
      
    },
    error =>console.log(error)
    );
  }
  private gotoHomePage()
  {
    this.router.navigate(['/home']);
  }

 


}
