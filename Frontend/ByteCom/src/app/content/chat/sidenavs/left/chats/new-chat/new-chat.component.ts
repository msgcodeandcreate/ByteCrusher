import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import * as data from '../../../../../../../assets/contacts.json'

@Component({
  selector: 'app-new-chat',
  templateUrl: './new-chat.component.html',
  styleUrls: ['./new-chat.component.scss']
})
export class NewChatComponent implements OnInit {
  @Output() closeChatSideNav = new EventEmitter<boolean>();

  public contacts = (data as any).default;
  constructor() { }

  ngOnInit() {
    
  }

  public toggleChatSideNav() {
    this.closeChatSideNav.emit();
    // this.searchText = '';
  }
}
