import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplaysongComponent } from './listsong/displaysong.component';
import { PlaysongComponent } from './playsong/playsong.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplaysongComponent,
    PlaysongComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
