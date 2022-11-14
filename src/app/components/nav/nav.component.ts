import { Component, Input } from '@angular/core';

export interface IAppNav {
  imgClass: string,
  imgSrc: string,
  pagelink: string | Array<string>,
  linkActiveClass: string,
  isNewMessage?: boolean
}

@Component({
  selector: 'app-nav',
  template: `
    <ul class="user-navigate">
      <li *ngFor="let link of userNavNav">
        <a [routerLink]="link.pagelink" [routerLinkActive]="link.linkActiveClass"
           [class]="link.pagelink === 'chats' && isNewMessage ? 'nav--new-message' : ''">
          <app-img
            routerLinkActive #rla="routerLinkActive"
            [imgClass]="rla.isActive ? link.imgClass + ' ' + link.linkActiveClass : link.imgClass"
            [imgNameSrc]="link.imgSrc"
          ></app-img>
        </a>
      </li>
    </ul>
  `,
  styleUrls: ['./nav.component.css']
})

export class NavComponent {

  @Input() isNewMessage: boolean = false

  constructor() {}

  userNavNav:Array<IAppNav> = [
    {
      imgClass: 'nav--img',
      imgSrc: 'home',
      pagelink: 'home',
      linkActiveClass: 'nav--img-active',
    },
    {
      imgClass: 'nav--img',
      imgSrc: 'chats',
      pagelink: 'chats',
      linkActiveClass: 'nav--img-active',
    },
    {
      imgClass: 'nav--img',
      imgSrc: 'add-pal',
      pagelink: 'add-pal',
      linkActiveClass: 'nav--img-active',
    },
    {
      imgClass: 'nav--img',
      imgSrc: 'pals',
      pagelink: 'pals',
      linkActiveClass: 'nav--img-active',
    },
    {
      imgClass: 'nav--img',
      imgSrc: 'settings',
      pagelink: 'settings',
      linkActiveClass: 'nav--img-active',
    },
    {
      imgClass: 'nav--img-logout',
      imgSrc: 'logout',
      pagelink: '/',
      linkActiveClass: '',
    },
  ]

}
