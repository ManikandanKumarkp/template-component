import { Component } from '@angular/core';

@Component({
  selector: 'emp',
  templateUrl:'./employee.component.html',
  styleUrls:['./employee.component.css']
})
export class EmployeeComponent { 
  Code:number=1 ;
  Name:string="Manikandan ";
  Age:number=25;
  Dob:string="19/12/1996";

  onclick (): void {
    console.log('clicked ');
  }
  constructor(){
    this.employee=[{code:"2",Name:"sas", Age:23, Dob: "15/6/1998"}]
  }

}
