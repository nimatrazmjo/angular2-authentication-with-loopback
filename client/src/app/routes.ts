

import { Routes } from "@angular/router";
import  { HomeComponent } from "./home/home.component";
import {ComputerComponent} from "./computer/computer.component";
export  const appRoute:Routes = [
    { path : 'home' , component:  HomeComponent },
    { path : 'authentication', loadChildren : './authentication/authentication.module#AuthenticationModule' },
    { path : 'computer', component : ComputerComponent },
    { path : '', redirectTo: '/home', pathMatch: 'full' }
]
