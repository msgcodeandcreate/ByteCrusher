import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProfileDialogComponent } from '../../../profile-dialog/profile-dialog.component';
import * as data from '../../../../../../assets/test.json'

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit {

  public userChatList = (data as any).default;
  public chat: any;

  searchText = '';

  constructor(public dialog: MatDialog) {

   }

  ngOnInit() {
  }

  public openProfile(chat) {
    const dialog = this.dialog.open(ProfileDialogComponent, {
      panelClass: 'profile-dialog',
      data: {
        firstname: chat.name,
        lastname: chat.lastname,
        bio: chat.bio,
        mail: chat.mail
      }
    });

    

  }
}
