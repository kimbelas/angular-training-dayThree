import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './content/home/home.component';
import { NotFoundComponent } from './content/not-found/not-found.component';
import { TwoPageComponent } from './two-page/two-page.component';
import { FullPageComponent } from './full-page/full-page.component';
import { MyProfileComponent } from './content/my-profile/my-profile.component';
import { MyTicketsComponent } from './content/my-tickets/my-tickets.component';
import { ContactUsComponent } from './content/contact-us/contact-us.component';

const routes: Routes = [
  { path: '', component: TwoPageComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'my-profile', component: MyProfileComponent },
      { path: 'my-tickets', component: MyTicketsComponent },
      { path: 'contact-us', component: ContactUsComponent }
    ]
  },
  { path: 'not-found', component: FullPageComponent, children: [
      { path: '', component: NotFoundComponent },
    ]
  },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
