import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import './rxjs-extensions';

import { AppComponent }  from './app.component';
import { ShowService } from './services/show.service';

@NgModule({
  imports:      [
    BrowserModule,
    HttpModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ ShowService ],
})
export class AppModule { }
