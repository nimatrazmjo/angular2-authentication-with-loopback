import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../authentication/authentication.service";
import {TokenService} from "../authentication/token.service";

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  auth_id :any
  constructor( private _auth: AuthenticationService, private _token : TokenService ) { }

  ngOnInit() {
    this._auth.logout()
    this.auth_id = JSON.stringify(localStorage)
  }

}
