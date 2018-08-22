import { Component } from '@angular/core';
import { DigitalService } from './-services/digital.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private digitalService:DigitalService){
    console.log(this.digitalService.sixolileMtengwana.toString())
  }
}
