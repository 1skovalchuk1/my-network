import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hint',
  templateUrl: './hint.component.html',
  styleUrls: ['./hint.component.css']
})
export class HintComponent implements OnInit {

  @Input() message: string | null = ''

  constructor() { }

  ngOnInit(): void {
  }

}
