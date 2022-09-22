import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFalsComponent } from '../user-fals/user-fals.component';
import { UserHomeComponent } from '../user-home/user-home.component';
import { UserSettingsComponent } from '../user-settings/user-settings.component';
import { UserMainPageComponent } from './user-main-page.component';

const routes: Routes = [{ path: '', component: UserMainPageComponent, children: [
    { path: '', redirectTo: 'id', pathMatch: 'full'},
    { path: 'id', component: UserHomeComponent},
    { path: 'fals', component: UserFalsComponent},
    { path: 'settings', component: UserSettingsComponent},
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserMainPageRoutingModule { }