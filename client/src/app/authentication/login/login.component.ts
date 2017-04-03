import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginStatus = true
  constructor(private _auth : AuthenticationService, private router : Router) { }

  ngOnInit() {
  }

  login (formValue) {


    this._auth.login (formValue.email, formValue.password)
      .subscribe( response => {
        console.log();

        if(!response) {
          this.loginStatus = false
        } else {
          this.loginStatus = true

          this.router.navigate(['/'])
        }
      })
  }

  cancel ()
  {
     this.router.navigate(['/'])
  }

}
