import { Service } from './Service';

export class Employe{
    constructor(public id?: number,
                public nom?: string,
                public prenom?: string,
                public email?: string,
                public tel?: String,
                public service?:Service
  
    ){
  
    }
  }
  