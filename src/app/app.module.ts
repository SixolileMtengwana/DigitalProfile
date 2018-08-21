import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './-root/-pages/home/home.component';
import { DigitalNavbarComponent } from './-root/components/digital-navbar/digital-navbar.component';
import { ProfilePage } from './-root/-pages/profile/profile.component';
import { WorkComponent } from './-root/components/work/work.component';
import { EducationComponent } from './-root/components/education/education.component';
import { ContactComponent } from './-root/components/contact/contact.component';
import { BioComponent } from './-root/-pages/bio/bio.component';
import { ProjectsComponent } from './-root/-pages/projects/projects.component';
/* This is a singleton that will be responsible
 for making sure that the necessary details are present during compilation*/
import { DigitalService } from './-services/digital.service'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DigitalNavbarComponent,
    ProfilePage,
    WorkComponent,
    EducationComponent,
    ContactComponent,
    BioComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ DigitalService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
