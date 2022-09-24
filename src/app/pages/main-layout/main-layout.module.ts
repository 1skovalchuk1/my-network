import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from 'src/app/components/components.module';
import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { MainLayoutComponent } from './main-layout.component';
import { AuthComponent } from '../auth/auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from '../registration/registration.component';

@NgModule({
  declarations: [
    MainLayoutComponent,
    AuthComponent,
    RegistrationComponent,
  ],
  imports: [
    CommonModule,
    MainLayoutRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
})
export class MainLayoutModule { }