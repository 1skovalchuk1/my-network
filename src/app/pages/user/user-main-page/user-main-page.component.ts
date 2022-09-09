import { Component, OnInit } from '@angular/core';
import { ComponentsModule } from 'src/app/components/components.module';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-user-main-page',
  templateUrl: './user-main-page.component.html',
  styleUrls: ['./user-main-page.component.css']
})
export class UserMainPageComponent implements OnInit {

  constructor(public authService:AuthService) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout()
  }

}
