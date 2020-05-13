import { Component, OnInit } from '@angular/core';
import { GlobalService } from './services/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'DayThree';

  constructor(private globalService : GlobalService){

  }

  ngOnInit() {
    // this.globalService.checkLogStatus();
  }
}
