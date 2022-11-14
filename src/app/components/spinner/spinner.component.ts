import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  template: `
    <ng-container *ngIf="isLoading">
      <app-p pClass="spinner--p">{{waitingText}}</app-p>
      <app-img imgNameSrc="spinner" imgClass="spinner--img"></app-img>
    </ng-container>
  `,
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent {

  @Input() isLoading: boolean = false
  @Input() waitingText?: string;

  constructor() { }

}
