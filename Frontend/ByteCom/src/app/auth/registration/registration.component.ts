import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registration = new FormGroup({
    name: new FormControl(),
    password: new FormControl(),
    password2: new FormControl(),
    email: new FormControl()
  });

  constructor() { }

  ngOnInit(): void {
  }

}
