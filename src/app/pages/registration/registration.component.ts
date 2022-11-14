import { Component, OnInit } from '@angular/core';
import { RegistrationService } from './service/registration.service';
import { Store } from '@ngrx/store';
import { HintService } from 'src/app/hint/services/hint.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
})
export class RegistrationComponent implements OnInit {

  constructor(
    public registrationService: RegistrationService,
    public hintService: HintService,
  ) { }

  ngOnInit(): void {
    localStorage.clear()
    this.registrationService.registrationForm.reset()
  }
}
