import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../../services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData = {
    username: '',
    password: ''  
  };

  constructor(private globalService : GlobalService) { }

  ngOnInit(): void {
    this.globalService.onHttpLogin
    .subscribe((response: any)=>{
      console.log(response);
      if (response.status === 'success') {
        this.globalService.storeToken(response.data.token);
        
        this.globalService.isLogged.next(true);
      }
    })
  }

  onSubmit() {
    console.log('value', this.loginData);
    this.globalService.subjectUsername.next(this.loginData.username);
    this.globalService.httpLogin(this.loginData);
  }

}
