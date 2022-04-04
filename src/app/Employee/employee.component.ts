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


function click (){
document.getelementbyid("submit").innerhtml=click('button clicked' );
}

}
