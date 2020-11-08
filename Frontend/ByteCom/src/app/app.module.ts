import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatComponent } from './content/chat/chat.component';
import { ChatsComponent } from './content/chat/sidenavs/left/chats/chats.component';
import { ChatStartComponent } from './content/chat/chat-start/chat-start.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { NewChatComponent } from './content/chat/sidenavs/left/chats/new-chat/new-chat.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ProfileDialogComponent } from './content/chat/profile-dialog/profile-dialog.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import {MatGridListModule} from '@angular/material/grid-list';
import { ChatViewComponent } from './content/chat/chat-view/chat-view.component';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    RegistrationComponent,
    ChatComponent,
    ChatsComponent,
    ChatStartComponent,
    NewChatComponent,
    ProfileDialogComponent,
    ChatViewComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatExpansionModule,
    MatDialogModule,
    HttpClientModule,
    MatGridListModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
