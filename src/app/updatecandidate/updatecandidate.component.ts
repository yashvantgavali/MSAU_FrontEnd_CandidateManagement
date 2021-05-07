import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidate } from '../candidate';
import { CandidateService } from '../candidate.service';
import { Edudetails } from '../edudetails';
import { EdudetailsService } from '../edudetails.service';
import { Joiningdetails } from '../joiningdetails';
import { JoiningdetailsService } from '../joiningdetails.service';

@Component({
  selector: 'app-updatecandidate',
  templateUrl: './updatecandidate.component.html',
  styleUrls: ['./updatecandidate.component.css']
})
export class UpdatecandidateComponent implements OnInit {

  id?: Number;
  candidate: Candidate = new Candidate();
  edudetails : Edudetails=new Edudetails();
  joiningdetails : Joiningdetails=new Joiningdetails();
  constructor(private candidateService: CandidateService,private edudetailsservice : EdudetailsService,private joiningdetailsservice : JoiningdetailsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.defaultValue();
  }
  defaultValue() {
    this.id = this.route.snapshot.params['id'];
    this.candidateService.getCandidateById(this.id).subscribe(data => { 
      this.candidate = data ;
      this.edudetailsservice.getEdudetailsById(this.id).subscribe(data =>{
       this.edudetails=data;
       this.joiningdetailsservice.getJoiningdetailsById(this.id).subscribe(data=>{
         this.joiningdetails=data;
       },
       error => console.log(error)
       );
      },
      error => console.log(error)
      );
    
    },
      error => console.log(error)
    );
  }

  onSubmit() {
    this.saveAllDetails();
  }
  private saveAllDetails() {
    this.candidateService.updateCandidate(this.candidate).subscribe(data => {
      console.log(data);
      this.edudetailsservice.updateEdudetails(this.edudetails).subscribe(data=>{
        console.log(data);
      this.joiningdetailsservice.updateJoiningdetails(this.joiningdetails).subscribe(data =>{
        console.log(data);
        alert("Candidate Details Updated SuccessFully");
        this.gotoHomePage();
      },
      error => console.log(error)
      );

      },
      error => console.log(error)
      );
      
    },
      error => console.log(error)
    );
  }
  private gotoHomePage() {
    this.router.navigate(['/home']);
  }

}
