import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'digital-navbar',
  templateUrl: './digital-navbar.component.html',
  styleUrls: ['./digital-navbar.component.css']
})
export class DigitalNavbarComponent implements OnInit {
  // Class Handler
  isNavbarActive: boolean;
  showSideBar:boolean;

  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  adjust(evt) {
    this.isNavbarActive = evt.path[1].scrollY > 10;
  }
  get imgSrc():string{
    return (!this.isNavbarActive)? './assets/img/userlogo.png':'./assets/img/userlogoBlue.png';
  }
   sideMenu():void{
     this.showSideBar = !this.showSideBar;
  }
  
}
