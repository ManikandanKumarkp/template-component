import { Component } from '@angular/core';

@Component({
  selector: 'emp',
  templateUrl: `./employee.component.html`,
  styles: [`p{ font-style:san; } `],
})
export class EmployeeComponent { 
  code:number= 34;
  name:string="mani";
}
