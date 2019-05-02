import { Component , OnInit } from '@angular/core';
import {EmployeService} from './employe.service';


import {Employe} from '../shareed/employe';
import { ServiceService } from '../Service/service.service';
import { Service } from '../shareed/service';
import { FormGroup,FormBuilder,Validators,FormsModule} from '@angular/forms';


@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})

export class EmployeComponent implements OnInit{
      employes : Employe[];
      services:Service;
      service:Service;
      employeForm: FormGroup;
      selectedEmploye: Employe;
      operation :string='add';
 
      selected: string="0" ;
      constructor(private employeService : EmployeService,private serviceService:ServiceService,private fb :FormBuilder){
        this.createForm();
        
      }


      ngOnInit(){
        
       this. loadService();
        this. loadEmploye();
      }
      selectOption(id: string) {
        
         console.log(id);
         this.loadEmploye();
      }
     
      createForm(){
        this.employeForm = this.fb.group({
          id:['',Validators.required],
          nom :'',
          prenom :'',
          email :'',
          telephone:'',
          idService:''

        });
      }

      addEmploye(){
        const p= this.employeForm.value;
        this.employeService.addEmploye(p).subscribe(
          res => {
            
            this.initEmploye();
            
            this. loadService();
          }
        );
      }

      updateEmploye(){
        this.employeService.updateEmploye(this.selectedEmploye).subscribe(
          res => {
            
            this.initEmploye();
            this. loadEmploye();
          }
        );
      }
    

      deleteEmploye()
      {
        this.employeService.deleteEmploye(this.selectedEmploye.id).subscribe(
          res =>{
            this.selectedEmploye =new Employe();
            this.loadEmploye();
          }
        );
      }

      

      loadEmploye(){
        this.employeService.getEmployes().subscribe(
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
      

      initEmploye(){
        this.selectedEmploye = new Employe();
        this.createForm();
       
      }
      findServiceById(id:any)
      {
        this.serviceService.findServiceById(id).subscribe(
          data =>{this.service =  data;
          console.log(data);},
          error  =>{console.log('erreur')},

          ()=>{console.log('Chargement service effectuer'+this.service.nom)}
        );
      }

      
}
