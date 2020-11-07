import { Component, OnInit } from '@angular/core';
import * as loggedUser from '../../../assets/loggedUser.json'

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  public selectedChat: boolean = true;
  public date: Date =  new Date();

  public loggedUser = (loggedUser as any).default;
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
