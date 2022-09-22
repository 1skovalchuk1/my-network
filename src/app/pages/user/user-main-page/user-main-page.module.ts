import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserMainPageRoutingModule } from './user-main-page-routing.module';
import { UserMainPageComponent } from './user-main-page.component'
import { ComponentsModule } from 'src/app/components/components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UserSettingsComponent } from '../user-settings/user-settings.component';
import { UserHomeComponent } from '../user-home/user-home.component';
import { UserFalsComponent } from '../user-fals/user-fals.component';

@NgModule({
  declarations: [
    UserMainPageComponent,
    UserSettingsComponent,
    UserHomeComponent,
    UserFalsComponent,
  ],
  imports: [
    CommonModule,
    UserMainPageRoutingModule,
    ReactiveFormsModule,
    ComponentsModule,
  ]
})
export class UserMainPageModule { }