import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeComponent } from './Employe/employe.component';
import { ServiceComponent } from "./Service/service.component";
import { ChartComponent } from './chart/chart.component';

const routes: Routes = [
  { path : 'employe' , component :EmployeComponent},
  { path : 'service' , component :ServiceComponent},
  { path : 'chart' , component :ChartComponent},
  { path : '' ,redirectTo:'/employe' ,pathMatch :'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
