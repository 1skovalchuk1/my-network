import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserMainPageRoutingModule } from './user-layout-routing.module';
import { UserLayoutComponent } from './user-layout.component'
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserSettingsComponent } from '../user-settings/user-settings.component';
import { UserHomeComponent } from '../user-home/user-home.component';
import { UserPalsComponent } from '../user-pals/user-pals.component';
import { UserAddPalComponent } from '../user-add-pal/user-add-pal.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { UserPalComponent } from '../user-pal/user-pal/user-pal.component';

@NgModule({
  declarations: [
    UserLayoutComponent,
    UserSettingsComponent,
    UserHomeComponent,
    UserPalsComponent,
    UserAddPalComponent,
    UserPalComponent,
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