import { Component, OnInit } from '@angular/core';
import { Login } from '../models/login.model';

@Component({
  selector: 'app-login-form-component',
  templateUrl: './login-form-component.component.html',
  styleUrls: ['./login-form-component.component.scss']
})
export class LoginFormComponentComponent implements OnInit {
 
  login: Login = new Login ("", "",);

  constructor() { }

  ngOnInit(): void {
  }
  
  onSubmit(): void {

    console.log(this.login)
  }
}
