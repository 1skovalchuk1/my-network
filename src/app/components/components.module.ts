import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonComponent } from './items/button/button.component';
import { HintComponent } from './hint/hint.component';
import { LinksComponent } from './links/links.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { MessageComponent } from './message/message/message.component';
import { InputComponent } from './items/input/input.component';
import { TextareaComponent } from './items/textarea/textarea.component';
import { PComponent } from './items/p/p.component';
import { ImgComponent } from './items/img/img.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    HintComponent,
    LinksComponent,
    FormComponent,
    MessageComponent,
    InputComponent,
    TextareaComponent,
    PComponent,
    ImgComponent,
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
    MessageComponent,
    InputComponent,
    TextareaComponent,
    PComponent,
    ImgComponent,
  ]
})

export class ComponentsModule { }
