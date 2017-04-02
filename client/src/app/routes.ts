

import { Routes } from "@angular/router";
import  { HomeComponent } from "./home/home.component";
export  const appRoute:Routes = [
    { path : 'home' , component:  HomeComponent },
    { path : 'authentication', loadChildren : './authentication/authentication.module#AuthenticationModule' },
    { path : '', redirectTo: '/home', pathMatch: 'full' }
]