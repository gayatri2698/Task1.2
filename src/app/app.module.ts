import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Myparent1Component } from './myparent1/myparent1.component';
import { Mychild1Component } from './mychild1/mychild1.component';

@NgModule({
  declarations: [
    AppComponent,
    Myparent1Component,
    Mychild1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
