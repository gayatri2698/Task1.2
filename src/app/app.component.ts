import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  title = 'Project3';
  @ViewChildren("firstName")firstName: QueryList<ElementRef>

  ShowName()
  {
    this.firstName.forEach((item)=>{
    alert(item.nativeElement.value);
    })
  }
}
