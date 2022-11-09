import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-img',
  template: `
  <img
    [src]="isUserPic ? '/assets/icons/user/' + imgNameSrc + '.svg' : '/assets/icons/' + imgNameSrc + '.svg'"
    [class]="imgClass">
  `,
  styleUrls: ['./img.component.css']
})
export class ImgComponent {

  @Input() imgClass: string = ''
  @Input() imgNameSrc: string = ''
  @Input() isUserPic?: boolean = false

  constructor() { }

}
