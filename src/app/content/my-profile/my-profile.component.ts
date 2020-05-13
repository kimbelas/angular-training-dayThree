import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GlobalService } from '../../services/global.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit, OnDestroy {
  subscriptionOnHttpGetProfile = new Subscription();
  profileForm;

  constructor(private globalService: GlobalService) { }

  ngOnInit(): void {
    this.globalService.httpGetProfile();

    this.subscriptionOnHttpGetProfile = this.globalService.onHttpGetProfile.subscribe(
      (response: any) => {
        console.log('onHttpGetProfile', response.data);
        if (response.status === 'success') {
          this.fillForm(response.data);
        }
      }
    );

    this.profileForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      alias: new FormControl('', [Validators.required]),
      jobTitle: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      mobileNumber: new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl('')
    });
  }

  fillForm(data) {
    this.profileForm.patchValue({
      firstName: data.meta.first_name,
      lastName: data.meta.last_name,
      alias: data.alias,
      jobTitle: data.meta.job_title,
      email: data.email,
      mobileNumber: data.meta.mobile_number,
    });
  }

  onUpdate() {
    if (this.profileForm.valid) {
      const formValues = this.profileForm.value;
      const anotherFormValues = {
        meta: {
          first_name: formValues.firstName
        }
      };
      console.log('onUpdate', formValues);
      
      // this.globalService.onHttpGetProfile.subscribe(
      //   (response: any) => {
      //     if (response.status === 'success') {
      //       this.profileForm.firstName = response.data.meta.first_name,
      //       this.profileForm.lastName = response.data.meta.last_name,
      //       this.profileForm.alias = response.alias,
      //       this.profileForm.jobTitle = response.data.meta.job_title,
      //       this.profileForm.email = response.email,
      //       this.profileForm.mobileNumber = response.data.meta.mobile_number
      //     }
      //   })
        this.globalService.httpUpdateProfile(anotherFormValues);
    } else {
      alert('Invalid Form');
    }
  }
  
  ngOnDestroy() {
    this.subscriptionOnHttpGetProfile.unsubscribe();
  }
}
