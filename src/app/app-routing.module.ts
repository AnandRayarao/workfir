import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResponseTimeComponent } from './response-time/response-time.component';
import { LocationComponent } from './location/location.component';
import { FemaleComponent } from './female/female.component';
import { MaleComponent } from './male/male.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'location',component:LocationComponent},
  {path:'response-time',component:ResponseTimeComponent},
  {path:'male',component:MaleComponent},
  {path:'female',component:FemaleComponent},

   ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
