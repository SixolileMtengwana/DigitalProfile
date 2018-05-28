import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './-root/-pages/home/home.component';
import { DigitalNavbarComponent } from './-root/components/digital-navbar/digital-navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DigitalNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
