import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLogged = false;
  constructor(private globalService : GlobalService) { }

  ngOnInit(): void {
    this.globalService.isLogged
    .subscribe((logged: boolean)=>{
      this.isLogged = logged;
    });
    this.globalService.checkLogStatus();
  }

}
