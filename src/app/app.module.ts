import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidatelistComponent } from './candidatelist/candidatelist.component';
import { from } from 'rxjs';
import { CreatecandidateComponent } from './createcandidate/createcandidate.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { UpdatecandidateComponent } from './updatecandidate/updatecandidate.component';
import { ViewcandidateComponent } from './viewcandidate/viewcandidate.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { FilterbynamePipe } from './filterbyname.pipe';
import { TrendsComponent } from './trends/trends.component';
import { ChartsModule } from 'ng2-charts';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { NavbarComponent } from './navbar/navbar.component';
import {SocialLoginModule,GoogleLoginProvider} from 'angularx-social-login';
import {AuthServiceConfig} from 'angularx-social-login';

const config =new AuthServiceConfig(
  [
    {
    id :GoogleLoginProvider.PROVIDER_ID,
    provider : new GoogleLoginProvider(
      '854172026369-dgk5uihbcbpohksfmijjgrladhdapc5h.apps.googleusercontent.com'
      )
    }
  ]
 );
 export function provideconfig()
{
  return config;
}


@NgModule({
  declarations: [
    AppComponent,
    CandidatelistComponent,
    CreatecandidateComponent,
    UpdatecandidateComponent,
    ViewcandidateComponent,
    FilterbynamePipe,
    TrendsComponent,
    LoginpageComponent,
    NavbarComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    ChartsModule,
    SocialLoginModule,
    ReactiveFormsModule,
  ],
  exports :[NavbarComponent],
  providers: [
    {
      provide :AuthServiceConfig,
      useFactory :provideconfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
