import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
; 




import { EmployeComponent } from './Employe/employe.component';
import { EmployeService } from './Employe/employe.service';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { ServiceComponent } from "./Service/service.component";
import { ServiceService } from './Service/service.service';
import { ChartComponent } from './chart/chart.component';


@NgModule({
  declarations: [
    AppComponent,
    ServiceComponent,
    
    EmployeComponent,
    ChartComponent,
    NavbarComponent,
    
    ContentComponent

  ],
  imports: [
    
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
    
    
  
   

  ],
  providers: [EmployeService,ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
