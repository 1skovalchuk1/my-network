import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-p',
  template: `
  <p
    [class]="'p ' + pClass"
  ><ng-content></ng-content></p>
  `,
  styleUrls: ['./p.component.css']
})
export class PComponent {

  constructor() { }

  @Input() pClass: string = ''

}
