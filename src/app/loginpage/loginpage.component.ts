import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from 'angularx-social-login';
import {SocialUser,GoogleLoginProvider} from 'angularx-social-login';
import { AuthorizationserviceService } from '../Authorization/authorizationservice.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  constructor(private router : Router,private authservice : AuthService,private authorizationService: AuthorizationserviceService) { }

  ngOnInit(): void {
   
    }
  
  loginWithGoogle(): void{
    this.authservice.signIn(GoogleLoginProvider.PROVIDER_ID).then((data) =>{ 
      this.authorizationService.checkLogin();
    }, (err) =>{
      console.log(err);
      alert("Please login through correct account and check password");
    }
    );
  }
  

}
