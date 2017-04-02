import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {RouterModule} from "@angular/router";
import {AuthenticationRoute} from "./authentication-route";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthenticationRoute)
  ],
  declarations: [LoginComponent]
})
export class AuthenticationModule { }
