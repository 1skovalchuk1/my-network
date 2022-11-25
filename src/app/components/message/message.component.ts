import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IParseMessage, IUser } from 'src/app/interfaces';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  currentUser: IUser | null = null
  isMessageToolsOpen: boolean = false
  isEditMessage: boolean = false
  newEditText: string = ''

  @Input() message: IParseMessage | null = null
  @Output() fnRemoveMessage: EventEmitter<void> = new EventEmitter()
  @Output() fnEditOkMessage: EventEmitter<string> = new EventEmitter()

  constructor() {}

  ngOnInit(): void {
    if (this.message) {
      this.newEditText = this.message.text
    }
  }

  _fnRemoveMessage() {
    this.fnRemoveMessage.emit()
  }

  _fnEditOkMessage() {
    this.isEditMessage = false
    this.fnEditOkMessage.emit(this.newEditText)
  }

  messageToolsToggle() {
    this.isMessageToolsOpen = !this.isMessageToolsOpen
  }

  editMessage() {
    this.isEditMessage = true
  }

  editCancelMessage() {
    this.isEditMessage = false
  }

}

