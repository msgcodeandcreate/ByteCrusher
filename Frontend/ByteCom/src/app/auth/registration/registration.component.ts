import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { ChatBackendService } from 'src/app/services/chat-backend.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registration = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    password: new FormControl(),
    password2: new FormControl(),
    email: new FormControl()
  });

  public username = [];

  constructor(private chatService: ChatBackendService, private route: Router) { }

  ngOnInit(): void {
  }

  public async CreateUser() {

  const formValue = this.registration.value;

   const user: User = {
     Password: formValue.password,
     E_Mail: formValue.email,
     FirstName: formValue.firstname,
     LastName: formValue.lastname
   }

    this.chatService.addUser(user).subscribe(data => {
      console.log(data);     
    });
    
    this.route.navigate(['/chat', {name: formValue.firstname}]);
    // console.log(this.username, 'reg comp')
  }


}
