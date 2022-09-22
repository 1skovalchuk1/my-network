import { Component, Input, OnInit } from '@angular/core';

export interface IAppLinks {
  imgClass: string,
  imgSrc: string,
  pagelink: string | Array<string>,
  linkActiveClass: string,
}


@Component({
  selector: 'app-links',
  template: `
    <ul>
      <li *ngFor="let link of links">
        <a [routerLink]="link.pagelink"
           [routerLinkActive]="link.linkActiveClass"
           [routerLinkActiveOptions]={exact:true}>
          <img [class]="link.imgClass" [src]="link.imgSrc" [routerLinkActive]="link.linkActiveClass">
        </a>
      </li>
    </ul>
  `,
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {

  @Input() links?:Array<IAppLinks>;

  constructor() {}

  ngOnInit(): void {

  }

}
