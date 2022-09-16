import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button [type]="buttonType">
      <img
        [routerLink]="link ? link : null"
        [src]="imgSrc"
        class="page-icon"
      />
    </button>
  `,
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {

  @Input() link?:Array<string>;
  @Input() imgClass?:string;
  @Input() buttonType?:string = 'button';
  @Input() imgSrc?:string;


  constructor() {}

  ngOnInit(): void {}
}
