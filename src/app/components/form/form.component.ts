import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormService } from './services/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @Input() form: FormGroup = new FormGroup({});
  @Input() name: string = '';

  @Output() fnInput: EventEmitter<void> = new EventEmitter();
  @Output() fnSubmit: EventEmitter<void> = new EventEmitter();

  _fnInput() {
    this.fnInput.emit()
  }
  _fnSubmit() {
    this.fnInput.emit()
  }

  constructor(public formService: FormService) { }

}

