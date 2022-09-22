import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button [type]="buttonType" [class]="btnClass">
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

  @Input() link?:Array<string>;
  @Input() imgClass?:string;
  @Input() btnClass?:string;
  @Input() buttonType?:string = 'button';
  @Input() imgSrc?:string;


  constructor() {}

  ngOnInit(): void {}
}
