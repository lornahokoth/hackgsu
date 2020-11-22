import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './tab/about/about.component';
import { HomeComponent } from './tab/home/home.component';
import { RUWComponent } from './tab/ruw/ruw.component';
import { StartcComponent } from './tab/startc/startc.component';
import { NetComponent } from './tab/net/net.component';
import { InspirComponent } from './tab/inspir/inspir.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    RUWComponent,
    StartcComponent,
    NetComponent,
    InspirComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
