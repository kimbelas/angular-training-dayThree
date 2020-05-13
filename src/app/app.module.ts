import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { TwoPageComponent } from './two-page/two-page.component';
import { FullPageComponent } from './full-page/full-page.component';
import { HomeComponent } from './content/home/home.component';
import { NotFoundComponent } from './content/not-found/not-found.component';
import { MyProfileComponent } from './content/my-profile/my-profile.component';
import { MyTicketsComponent } from './content/my-tickets/my-tickets.component';
import { WelcomeComponent } from './content/home/welcome/welcome.component';
import { LoginComponent } from './content/home/login/login.component';
import { ContactUsComponent } from './content/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ContentComponent,
    TwoPageComponent,
    FullPageComponent,
    HomeComponent,
    NotFoundComponent,
    MyProfileComponent,
    MyTicketsComponent,
    WelcomeComponent,
    LoginComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
