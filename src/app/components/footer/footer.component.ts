import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footerLinks:Array<string> = ['Info','Support', 'Privacy Policy']
  iconsData:Array<{name: string, path: string}> = [
    {name: 'facebook', path: 'https://facebook.com'},
    {name: 'twitter',  path: 'https://twitter.com'},
    {name: 'telegram', path: 'https://web.telegram.org/'},
    {name: 'google',   path: 'https://google.com'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
