import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { ButtonComponent } from './items/button/button.component';
import { HintComponent } from '../hint/hint.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { MessageComponent } from './message/message.component';
import { InputComponent } from './items/input/input.component';
import { TextareaComponent } from './items/textarea/textarea.component';
import { PComponent } from './items/p/p.component';
import { ImgComponent } from './items/img/img.component';
import { TwoButtonsComponent } from './two-buttons/two-buttons.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { UserInfoComponent } from './user-info/user-info.component';


@NgModule({
  declarations: [
    FooterComponent,
    ButtonComponent,
    HintComponent,
    NavComponent,
    FormComponent,
    MessageComponent,
    InputComponent,
    TextareaComponent,
    PComponent,
    ImgComponent,
    TwoButtonsComponent,
    SpinnerComponent,
    UserInfoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    FooterComponent,
    ButtonComponent,
    HintComponent,
    NavComponent,
    FormComponent,
    MessageComponent,
    InputComponent,
    TextareaComponent,
    PComponent,
    ImgComponent,
    TwoButtonsComponent,
    SpinnerComponent,
    UserInfoComponent,
  ]
})

export class ComponentsModule { }
