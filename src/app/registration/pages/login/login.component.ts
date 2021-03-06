import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: FormGroup;
  ngOnInit() {

  }

  constructor() {
    this.login = new FormGroup({
      email: new FormControl('', [ Validators.required, Validators.pattern(/^[a-z|A-Z][a-z|A-Z|0-9|]+@virtusa.com/)]),
      password: new FormControl('', Validators.required)
    });
}
addDetails() {
  console.log(this.login.value);
}
}
