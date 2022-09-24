import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonComponent } from './items/button/button.component';
import { HintComponent } from './hint/hint.component';
import { LinksComponent } from './items/links/links.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    HintComponent,
    LinksComponent,
    FormComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    HintComponent,
    LinksComponent,
    FormComponent,
  ]
})
export class ComponentsModule { }
