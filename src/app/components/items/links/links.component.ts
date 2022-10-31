import { Component, Input } from '@angular/core';

export interface IAppLinks {
  imgClass: string,
  imgSrc: string,
  pagelink: string | Array<string>,
  linkActiveClass: string,
  isNewMessage?: boolean
}

@Component({
  selector: 'app-links',
  template: `
    <ul class="user-navigate">
      <li *ngFor="let link of userNavLinks"
           [routerLinkActive]="link.linkActiveClass"
           [class]="isNewMessage && link.pagelink === 'message'
                    ? 'new-message'
                    : ''">
        <a [routerLink]="link.pagelink">
          <img
            [class]="link.imgClass"
            [src]="link.imgSrc"
            [routerLinkActive]="link.linkActiveClass"
            [routerLinkActiveOptions]="link.pagelink === 'home' ? {exact:true} : {exact:false}">
        </a>
      </li>
    </ul>
  `,
  styleUrls: ['./links.component.css']
})

export class LinksComponent {

  @Input() isNewMessage: boolean = false

  constructor() {}

  userNavLinks:Array<IAppLinks> = [
    {
      imgClass: 'link-icon',
      imgSrc: '/assets/icons/home.svg',
      pagelink: 'home',
      linkActiveClass: 'link-icon-active',
    },
    {
      imgClass: 'link-icon new-message',
      imgSrc: '/assets/icons/chat.svg',
      pagelink: 'chats',
      linkActiveClass: 'link-icon-active',
    },
    {
      imgClass: 'link-icon',
      imgSrc: '/assets/icons/add-pal-success.svg',
      pagelink: 'add-pal',
      linkActiveClass: 'link-icon-active',
    },
    {
      imgClass: 'link-icon',
      imgSrc: '/assets/icons/pals.svg',
      pagelink: 'pals',
      linkActiveClass: 'link-icon-active',
    },
    {
      imgClass: 'link-icon',
      imgSrc: '/assets/icons/settings.svg',
      pagelink: 'settings',
      linkActiveClass: 'link-icon-active',
    },
    {
      imgClass: 'link-icon-logout',
      imgSrc: '/assets/icons/logout.svg',
      pagelink: '/',
      linkActiveClass: '',
    },
  ]

}
