import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import * as loggedUser from '../../../assets/loggedUser.json'

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  public selectedChat: boolean = false;
  public date: Date =  new Date();

  public loggedUser = (loggedUser as any).default;
  public userName: string;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.forEach(param =>
      this.userName = param['name']);
  }

  public LogOut() {
    this.router.navigate(['/auth']);
  }

}
