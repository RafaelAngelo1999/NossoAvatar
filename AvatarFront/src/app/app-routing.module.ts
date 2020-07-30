import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { AvatarComponent } from './avatar/avatar.component';
import { LoginComponent } from './login/login.component';


export const ROUTER: Routes = [
  { path: '', component: AvatarComponent },
  { path: 'home', component: HomeComponent },
  { path: 'avatar', component: AvatarComponent },
  { path: 'menu', component: MenuHeaderComponent },
  { path: 'login', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(ROUTER)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
