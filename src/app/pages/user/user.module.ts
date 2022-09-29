import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserMainPageRoutingModule } from './user-routing.module';
import { UserLayoutComponent } from './user-layout/user-layout.component'
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserPalsComponent } from './user-pals/user-pals.component';
import { UserAddPalComponent } from './user-add-pal/user-add-pal.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { UserPalComponent } from './user-pal/user-pal/user-pal.component';
import { UserMessageComponent } from './user-message/user-message/user-message.component';
import { UserChatComponent } from './user-chat/user-chat/user-chat.component';

@NgModule({
  declarations: [
    UserLayoutComponent,
    UserSettingsComponent,
    UserHomeComponent,
    UserPalsComponent,
    UserAddPalComponent,
    UserPalComponent,
    UserMessageComponent,
    UserChatComponent,
  ],
  imports: [
    CommonModule,
    UserMainPageRoutingModule,
    ReactiveFormsModule,
    ComponentsModule,
    PipesModule,
    FormsModule,
  ]
})
export class UserLayoutModule { }