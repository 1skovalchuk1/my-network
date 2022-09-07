import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button [attr.type]="buttonType ? buttonType : null">
      <img
        [routerLink]="link"
        [src]="imgSrc"
        class="page-icon"
      />
    </button>
  `,
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {

  @Input() link?:string;
  @Input() imgClass?:string;
  @Input() buttonType?:string | null = null;
  @Input() imgSrc?:string;


  constructor() {}

  ngOnInit(): void {}
}
