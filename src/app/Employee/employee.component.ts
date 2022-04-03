import { Component } from '@angular/core';

@Component({
  selector: 'emp',
  templateUrl:`./employee.component.html`,
  styles: []
})
export class EmployeeComponent { 
  code:number=1 ;
  Name:string="Manikandan ";
  age:number=25;
  dob:string="19/12/1996";
}
