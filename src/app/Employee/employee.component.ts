import { Component } from '@angular/core';

@Component({
  selector: 'emp',
  templateUrl:`./employee.component.html`,
  styles: []
})
export class EmployeeComponent { 
  Code:number=1 ;
  Name:string="Manikandan ";
  Age:number=25;
  Dob:string="19/12/1996";
}
