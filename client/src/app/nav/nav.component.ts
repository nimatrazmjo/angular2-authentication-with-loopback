import { Component, OnInit } from '@angular/core';
import {TokenService} from "../authentication/token.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  token
  constructor(private _token : TokenService) { }

  ngOnInit() {

  }

}
