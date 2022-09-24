import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserMainPageRoutingModule } from './user-layout-routing.module';
import { UserLayoutComponent } from './user-layout.component'
import { ComponentsModule } from 'src/app/components/components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UserSettingsComponent } from '../user-settings/user-settings.component';
import { UserHomeComponent } from '../user-home/user-home.component';
import { UserFalsComponent } from '../user-fals/user-fals.component';

@NgModule({
  declarations: [
    UserLayoutComponent,
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
export class UserLayoutModule { }