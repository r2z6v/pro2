import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FristprogetComponent } from './fristproget-component/fristproget-component.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { UsercreatComponent } from './usercreat/usercreat.component';

const routes: Routes = [{ path: "", redirectTo: "login", pathMatch: "full" },
{ path: "login", component: LoginComponent },
{
  path: "pro2", component: FristprogetComponent, children: [
    { path: "create", component: UsercreatComponent },
    { path: "home", component: HomeComponent },
    { path: "user", component: UserComponent }
  ]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
