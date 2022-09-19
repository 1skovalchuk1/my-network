import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonComponent } from './items/button/button.component';
import { HintComponent } from './hint/hint.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    HintComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    HintComponent,
  ]
})
export class ComponentsModule { }
