import { Component, Input } from '@angular/core';
import { NgControl, AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  template: `
  <textarea [formControl]="toControl(ngControl.control)"
            [class]="'textarea ' + textareaClass"
            [placeholder]="textareaPlaceholder"
            spellcheck="false"></textarea>
  `,
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent {

  @Input() textareaClass:       string = ''
  @Input() textareaPlaceholder: string = ''

  constructor (public ngControl: NgControl) {}

  toControl(control: AbstractControl | null): FormControl {
    return control as FormControl;
  }

}
