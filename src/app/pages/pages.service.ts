import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  constructor() { }

  isInvalidForm(form: FormGroup): boolean {
    if (form.invalid && (form.touched || form.dirty)) {
      return true
    }
    return false
  }
}
