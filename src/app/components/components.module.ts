import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonComponent } from './items/button/button.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
  ]
})
export class ComponentsModule { }
