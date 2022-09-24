import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-button',
  template: `
    <button [type]="buttonType"
            [class]="btnClass"
            [ngClass]="form?.invalid && buttonType === 'submit' ? 'disable-icon' : ''">
      <img
        [routerLink]="link ? link : null"
        [src]="imgSrc"
        [class]="imgClass"
      />
    </button>
  `,
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {

  @Input() link?:Array<string> | string;
  @Input() imgClass?:string;
  @Input() btnClass:string = '';
  @Input() buttonType?:string;
  @Input() imgSrc?:string;
  @Input() form?:FormGroup;


  constructor() {}

  ngOnInit(): void {}
}
