import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-button',
  template: `
    <button [type]="buttonType"
            [class]="'button ' + btnClass"
            [ngClass]="form?.invalid ? 'disable-icon' : ''">
      <app-img
        [routerLink]="link ? link : null"
        [imgNameSrc]="imgNameSrc"
        [imgClass]="'img-button ' + imgClass"></app-img>
    </button>
  `,
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {

  @Input() link?:Array<string> | string;
  @Input() imgClass:string = ''
  @Input() btnClass:string = 'button'
  @Input() buttonType:string = 'button'
  @Input() imgNameSrc:string = ''
  @Input() form?:FormGroup;


  constructor() {}

  ngOnInit(): void {}
}
