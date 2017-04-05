import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/http";
import { TokenService } from "./token.service";
import { Observable } from "rxjs";
import { tokenNotExpired } from "angular2-jwt"

@Injectable()
export class AuthenticationService {

  constructor(private _http : Http, private _token: TokenService) { }


  /**
   * Login function
   *
   * @param email
   * @param password
   * @returns {Observable<R>}
   */
  login(email: string, password: string) {
    let loginInfo = {email: email, password: password}
    let headers = new Headers({'Content-Type': 'application/json'})
    let option = new RequestOptions({headers: headers})
      return this._http.post('/server/login',JSON.stringify(loginInfo), option)
          .do(response => {
            if(response) {
                this._token.setToken(response.json().token_jwt)
                localStorage.setItem("user", response.json().user)
            }
          }).catch(error => {
            return Observable.of(false)
          })
  }


  /**
   * Check weather current user is logged in or not
   *
   * @returns {boolean}
   */
  loggedIn() {
    let token = this._token.getToken();

    if(token && token.token) {
      return !token.isExpired();
    }
    return false;
  }

  getExpirationDate(): any {

    let token = this._token.getToken()
    if (token && token.token) {
      return token.getExpirationDate()
    }
    return false
  }

  isExpired() {
    let token = this._token.getToken()
    if (token && token.token) {
      return token.isExpired()
    }
  }

  logout () {
    this._token.removeToken()
    localStorage.removeItem("user")

    let headers = new Headers({'Content-Type': 'application/json'})
    let option = new RequestOptions({headers: headers})
    this._http.post('/logout',JSON.stringify({}),option)
  }

  jwtExpired() {
    return !tokenNotExpired
  }

}
