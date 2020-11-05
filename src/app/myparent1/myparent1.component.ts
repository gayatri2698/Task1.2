import { Component, OnInit,ViewChild, AfterViewInit} from '@angular/core';
import { Mychild1Component } from '../mychild1/mychild1.component';

@Component({
  selector: 'app-myparent1',
  templateUrl: './myparent1.component.html',
  styleUrls: ['./myparent1.component.css']
})
export class Myparent1Component implements OnInit,AfterViewInit {
  @ViewChild(Mychild1Component) childdata;
  message:string;
  constructor() { }

  ngOnInit(): void {
  }
ngAfterViewInit()
{
  this.message=this.childdata.childvar;
}
}
