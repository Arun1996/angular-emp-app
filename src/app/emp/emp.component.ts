import { Component, OnInit } from '@angular/core';
import { Emp } from '../emp';
import { UserService } from '../emp-list'
@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {

  name: string="";
  lastname: string="";
  project:string="";
  emp:Emp;



  constructor(private user:UserService) { }

  ngOnInit() {
  }


  additem(){
    this.user.EMPLY.push({fname:this.name,lname:this.lastname,projec:this.project})
    this.name="";
    this.lastname="";
    this.project="";
   }

   removeEmp(i){
    this.user.EMPLY.splice(i,1);
  }

  editItem(i){
    this.name =  i.fname;
    this.lastname =  i.lname;
    this.project =  i.projec;
  }

  Reset()
  {
    this.name="";
    this.lastname="";
    this.project="";
  }

}
