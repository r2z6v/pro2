import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { FristprogetComponent } from './fristproget-component/fristproget-component.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from "@angular/fire"; 
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { UsercreatComponent } from './usercreat/usercreat.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UserComponent,
    FristprogetComponent,
    NavbarComponent,
    FooterComponent,
    UsercreatComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase), 
    AngularFirestoreModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }