import { NgModule } from '@angular/core';

import { CounterModule } from './counter/counter.module';import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeroModule } from './heroes/hero.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeroModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }