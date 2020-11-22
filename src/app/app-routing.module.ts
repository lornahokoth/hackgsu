import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './tab/about/about.component';
import { HomeComponent } from './tab/home/home.component';
import { InspirComponent } from './tab/inspir/inspir.component';
import { NetComponent } from './tab/net/net.component';
import { RUWComponent } from './tab/ruw/ruw.component';
import { StartcComponent } from './tab/startc/startc.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'inspir', component: InspirComponent },
  { path: 'net', component: NetComponent },
  { path: 'ruw', component: RUWComponent },
  { path: 'startc', component: StartcComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
