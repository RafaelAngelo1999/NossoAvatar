import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, ROUTER } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './list/list.component';

@NgModule({
   declarations: [
      AppComponent,
      MenuHeaderComponent,
      HomeComponent,
      ListComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      RouterModule.forRoot(ROUTER),
      ReactiveFormsModule,
      HttpClientModule
   ],
   providers: [
      FormBuilder,
      ListComponent
   ],
   bootstrap: [
      AppComponent
   ],
   exports: []
})
export class AppModule { }
