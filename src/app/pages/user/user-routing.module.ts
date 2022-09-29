import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAddPalComponent } from './user-add-pal/user-add-pal.component';
import { UserPalsComponent } from './user-pals/user-pals.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { UserPalComponent } from './user-pal/user-pal/user-pal.component';
import { UserMessageComponent } from './user-message/user-message/user-message.component';
import { UserChatComponent } from './user-chat/user-chat/user-chat.component';

const routes: Routes = [{ path: '', component: UserLayoutComponent, children: [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: UserHomeComponent },
    { path: 'pals', component: UserPalsComponent },
    { path: 'pals/pal/:id', component: UserPalComponent },
    { path: 'message', component: UserMessageComponent },
    { path: 'message/:id', component: UserChatComponent },
    { path: 'add-pal', component: UserAddPalComponent },
    { path: 'settings', component: UserSettingsComponent },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserMainPageRoutingModule { }