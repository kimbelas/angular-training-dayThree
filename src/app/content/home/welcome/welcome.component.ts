import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../../services/global.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  userName;
  constructor(private globalService : GlobalService) { }

  ngOnInit(): void {
    this.userName = '';
    this.globalService.httpGetProfile();

    this.globalService.onHttpGetProfile.subscribe(
      (response: any) => {
        if (response.status === 'success') {
          this.userName = response.data.alias
        }
    })
  }

  logout() {
    this.globalService.deleteToken();
  }
}
