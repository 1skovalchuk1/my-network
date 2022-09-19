import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

type HintControl = [string, Array<[string, string]>]
type HintForm = [string, string]

@Injectable({
  providedIn: 'root'
})
export class HintService {

  constructor() { }

  getFormHintMessage(form: FormGroup, controlsData: Array<HintControl>, formData: Array<HintForm>=[]):string {
    const [control, validators] = controlsData.find(
      ([control, ]) => form.controls[control].errors) || ['',[['','']]]

    if (control) {
      const [, message] = validators?.find(
        ([validator, ]) => form.controls[control].errors?.[validator]) || ['','']
      return message
    }
    
    if (formData) {
      const [, message] = formData.find(([validator, ]) => form.errors?.[validator]) || ['','']
      return message
    }
    return ''
  }
}
