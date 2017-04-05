import { Injectable } from '@angular/core';
import {AuthHttp} from "../authentication/auth.http";
import {Observable} from "rxjs";
@Injectable()
export class ComputerService {

  constructor( private http : AuthHttp) {

  }

  all() : any {
    return this.http.get('/server/computers').map(res => {
      return res.json()
    })
  }
}
