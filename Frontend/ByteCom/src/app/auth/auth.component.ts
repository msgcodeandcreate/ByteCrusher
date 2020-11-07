import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  login = new FormGroup({
    name: new FormControl(),
    password: new FormControl()
  });

  constructor() { }

  ngOnInit(): void {
  }

  public GoRegistration()
  {
      console.log("Hi !");
  }

}
