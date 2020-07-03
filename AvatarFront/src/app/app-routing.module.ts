import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuHeaderComponent } from './menu-header/menu-header.component';


export const ROUTER: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: MenuHeaderComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(ROUTER)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
