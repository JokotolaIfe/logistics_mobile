import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { EventsComponent } from './pages/events/events.component';
import { HomeComponent } from './pages/home/home.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { SupportComponent } from './pages/support/support.component';
import { UsersComponent } from './pages/users/users.component';
import { ProfileComponent } from './pages/settings/pages/profile/profile.component';
import { GeneralComponent } from './pages/settings/pages/general/general.component';
import { ManagementComponent } from './pages/settings/pages/management/management.component';
import { AboutComponent } from './pages/settings/pages/general/about/about.component';
import { AccessComponent } from './pages/settings/pages/general/access/access.component';

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: 'home', component: HomeComponent },
      { path: 'users', component: UsersComponent },
      { path: 'events', component: EventsComponent },
      { path: 'support', component: SupportComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'settings/about', component: AboutComponent },
      { path: 'settings/access', component: AccessComponent },
      { path: 'settings/profile', component: ProfileComponent },
      { path: 'settings/general', component: GeneralComponent },
      { path: 'settings/management', component: ManagementComponent },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
