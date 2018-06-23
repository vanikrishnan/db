import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,AbstractControl,ValidationErrors} from '@angular/forms';
import {Http} from '@angular/http';
@Component({
  selector: 'app-interviewerregistration',
  templateUrl: './interviewerregistration.component.html',
  styleUrls: ['./interviewerregistration.component.css']
})
export class InterviewerregistrationComponent implements OnInit {
  id:FormGroup;
  list =[
'Angular',
  'Java Script',
  'React',
'.Net'];

  constructor( private httpservice:Http) { 
    this.id=new FormGroup({
      name : new FormControl('',[Validators.required,Validators.pattern(/^[a-z]|[A-Z]$/)]),
      
      mail : new FormControl('',[Validators.required,Validators.pattern(/^([a-z]|[A-Z]|[0-9]_\.\-])+\@virtusa.com+$/)]),
      
      mobileno: new FormControl('',[Validators.required,Validators.pattern(/^[1-9][0-9]{9}$/),Validators.minLength(10)]),
      
      pwd: new FormControl('',[Validators.required,Validators.pattern(/^[a-z]|[A-Z][0-9]$/)]),
      
      skill : new FormControl('S',Validators.required)
    
      })
      
      }
      

  ngOnInit() {
  }
  clear(){
    this.id.reset();
  }
  
  
}
