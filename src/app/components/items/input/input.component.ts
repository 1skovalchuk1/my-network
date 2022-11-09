import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl, NgControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  template: `
  <input [formControl]="toControl(ngControl.control)"
         [class]="'input ' + inputClass"
         [attr.id]="inputId"
         [attr.type]="inputType ? inputType : null"
         [placeholder]="inputPlaceholder"
         spellcheck="false">
  `,
  styleUrls: ['./input.component.css'],

})

// add textarea component

export class InputComponent {

  @Input() inputClass:       string = ''
  @Input() inputPlaceholder: string = ''
  @Input() inputType:        string = ''
  @Input() inputId:          string = ''

  constructor (public ngControl: NgControl) {}

  toControl(control: AbstractControl | null): FormControl {
    return control as FormControl;
  }

}
