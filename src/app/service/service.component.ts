import { Component , OnInit } from '@angular/core';
import {EmployeService} from './employe.service';


import {Employe} from '../shareed/employe';
import { ServiceService } from './service.service';
import { Service } from '../shareed/service';
import { FormGroup,FormBuilder,Validators,FormsModule} from '@angular/forms';


@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})

export class ServiceComponent implements OnInit{
      employes : Employe[];
      services:Service;
      service:Service;
     
      operation :string='add';
 
      selected: string="0" ;
      constructor(private serviceService:ServiceService){
        
        
      }


      ngOnInit(){
        
       this. loadService();
      
     this. loadEmploye();
      }
      selectOption(id: string) {
        
         console.log(id);
         this.loadEmploye();
      }
     
     

      loadEmploye(){
        this.serviceService.getEmpnoParServices(this.selected).subscribe(
          data =>{this.employes =  data;
          console.log(data)},
          
          error  =>{console.log(error.message)},

          ()=>{console.log('Chargement Employe effectuer')}
        );
      }

     

      loadService(){
        this.serviceService.getServices().subscribe(
          data =>{this.services =  data;
          console.log(data);},
          error  =>{console.log('erreur')},

          ()=>{console.log('Chargement service effectuer')}
        );
      }
      

     

      
}
