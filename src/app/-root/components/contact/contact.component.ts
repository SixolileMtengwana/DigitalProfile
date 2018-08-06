import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'digital-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  submit():void{
    console.log('sent!');
  }

}
