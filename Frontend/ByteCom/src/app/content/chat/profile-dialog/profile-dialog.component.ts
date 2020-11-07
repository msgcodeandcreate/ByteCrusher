import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-profile-dialog',
  templateUrl: './profile-dialog.component.html',
  styleUrls: ['./profile-dialog.component.scss']
})
export class ProfileDialogComponent implements OnInit {

  public selectedChatName: string;
  public selectedChatLastName: string;
  public selectedChatBio: string;
  public selectedChatMail: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any
  ) { 
    if(data) {
      console.log(data.name, 'data')
      // this.selectedChatName = data.name;
      console.log(this.selectedChatName)
    }

    
  }

  ngOnInit(): void {
    // console.log(this.data.selectedChat, "profile dialog");
  }

}
