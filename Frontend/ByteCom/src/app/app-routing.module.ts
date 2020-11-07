import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { ChatComponent } from './content/chat/chat.component';


const routes: Routes = [
   { path: 'auth', component: AuthComponent},
   { path: 'registration', component: RegistrationComponent},
   { path: 'chat', component: ChatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
