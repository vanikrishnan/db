import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,AbstractControl,ValidationErrors} from '@angular/forms';
import {Http} from '@angular/http';
@Component({
  selector: 'app-adminregistration',
  templateUrl: './adminregistration.component.html',
  styleUrls: ['./adminregistration.component.css']
})
export class AdminregistrationComponent implements OnInit {
  id:FormGroup;
  list : string[]=[
'Hyderabad',
  'Pune',
  'Chennai',
'Bangalore'];
  


  constructor(private httpservice : Http) {
this.id =new FormGroup({

name : new FormControl('',[Validators.required,Validators.pattern(/^[a-z]|[A-Z]$/)]),

mail : new FormControl('',[Validators.required,Validators.pattern(/^([a-z]|[A-Z]|[0-9]_\.\-])+\@gmail.com+$/)]),
// pswdmatch : new FormGroup({
// pswd: new FormControl('',[Validators.required,Validators.pattern(/^([a-z]|[A-Z]|[0-9]_\.\-])$/)]),
// cnfmpswd: new FormControl('',[Validators.required,Validators.pattern(/^([a-z]|[A-Z]|[0-9]_\.\-])$/)])
// },this.checkPswdMatch),

pwd: new FormControl('',[Validators.required,Validators.pattern(/^[a-z]|[A-Z][0-9]$/)]),


mobileno: new FormControl('',[Validators.required,Validators.pattern(/^[1-9][0-9]{9}$/),Validators.minLength(10)]),

loc : new FormControl('Hyderabad',Validators.required)

})

}
// checkPswdMatch(ac : AbstractControl) : ValidationErrors {
// const pswd=ac.get('pwd');
// const cnfmpswd=ac.get('cnfmpwd');
// if(pswd != cnfmpswd){
//   return {
//     'pwdnotmatch':true
//   }
 //}
//}
  ngOnInit() {
  }

clear(){
  this.id.reset();
}


}