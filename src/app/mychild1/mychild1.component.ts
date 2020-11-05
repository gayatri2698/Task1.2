import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mychild1',
  templateUrl: './mychild1.component.html',
  styleUrls: ['./mychild1.component.css']
})
export class Mychild1Component implements OnInit {
  childvar:string=" This is child var Data";
  constructor() { }

  ngOnInit(): void {
  }

}
