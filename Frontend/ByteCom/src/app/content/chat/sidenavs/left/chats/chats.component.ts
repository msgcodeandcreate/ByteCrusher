import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProfileDialogComponent } from '../../../profile-dialog/profile-dialog.component';
import * as data from '../../../../../../assets/contacts.json'

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit {

  //Commented if userChatList.length > 0
  // public userChatList = ["test"]; 

  //Commented if userchatListLength === 0
  // public userChatList = [];s

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
