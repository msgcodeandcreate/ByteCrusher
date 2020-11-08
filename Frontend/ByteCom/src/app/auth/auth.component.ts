import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  public Submit()
  {
    const formValue = this.login.value;
    this.route.navigate(['/chat', {name: "Nina"}]);
  }

}
