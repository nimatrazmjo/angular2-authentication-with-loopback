import { Component, OnInit } from '@angular/core';
import { ComputerService } from "./computer.service";

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.css']
})
export class ComputerComponent implements OnInit {
  all : any
  constructor(private computer : ComputerService) { }

  ngOnInit() {
    this.all = this.computer.all().subscribe(res => {
    })
  }

}
