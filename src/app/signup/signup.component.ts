import { Component, OnInit } from '@angular/core';
import { Order } from '../models/model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  model: Order = new Order("", "", "", "");

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {

    console.log(this.model);

}

}
