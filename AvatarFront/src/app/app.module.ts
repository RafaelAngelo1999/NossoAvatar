import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, ROUTER } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent, Opcao, Usuario } from './list/list.component';
import { AvatarComponent } from './avatar/avatar.component';
import { LoginComponent } from './login/login.component';
import { GlobalService } from '../app/global.service';

@NgModule({
   declarations: [
      AppComponent,
      MenuHeaderComponent,
      HomeComponent,
      ListComponent,
      AvatarComponent,
      LoginComponent,
   ],
   imports: [
      BrowserModule,
      FormsModule,
      RouterModule.forRoot(ROUTER),
      ReactiveFormsModule,
      HttpClientModule,
   ],
   providers: [
      FormBuilder,
      ListComponent,
   ],
   bootstrap: [
      AppComponent
   ],
   exports: [LoginComponent]
})
export class AppModule { }
