import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from './login/login.component';
import {AuthenticationRoute} from "./authentication-route";
import {AuthenticationService} from "./authentication.service";
import {TokenService} from "./token.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(AuthenticationRoute)
  ],
  declarations: [LoginComponent],
  providers: [
        AuthenticationService,
        TokenService,

    ]
})
export class AuthenticationModule { }
