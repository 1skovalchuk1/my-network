import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-two-buttons',
  template: `
  <app-button
    (click)="_fnFirstButton()"
    [buttonType]="buttonTypes[0]"
    [imgNameSrc]="imgNamesSrc[0]"
    [imgClass]="imgClass"
    [link]="links?.[0]"
  ></app-button>
  <ng-content></ng-content>
  <app-button
    (click)="_fnSecondButton()"
    [buttonType]="buttonTypes[1]"
    [imgNameSrc]="imgNamesSrc[1]"
    [imgClass]="imgClass"
    [link]="links?.[1]"
    [form]="form"
  ></app-button>
  `,
  styleUrls: ['./two-buttons.component.css']
})
export class TwoButtonsComponent {

  constructor() { }

  @Input() buttonTypes: Array<string> = ['button', 'button']
  @Input() imgNamesSrc: Array<string> = []
  @Input() imgClass: string = 'img-button'
  @Input() form?:FormGroup;
  @Input() links?:Array<Array<string> | string>;

  @Output() fnFirstButton: EventEmitter<void> = new EventEmitter()
  @Output() fnSecondButton: EventEmitter<void> = new EventEmitter()

  _fnFirstButton() {
    this.fnFirstButton.emit()
  }

  _fnSecondButton() {
    this.fnSecondButton.emit()
  }

}
