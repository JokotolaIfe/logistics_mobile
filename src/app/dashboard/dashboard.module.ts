import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FormsModule } from '@angular/forms';
import { MDBBootstrapModule, MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/users.component';
import { EventsComponent } from './pages/events/events.component';
import { SupportComponent } from './pages/support/support.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ProfileComponent } from './pages/settings/pages/profile/profile.component';
import { GeneralComponent } from './pages/settings/pages/general/general.component';
import { ManagementComponent } from './pages/settings/pages/management/management.component';
import { AboutComponent } from './pages/settings/pages/general/about/about.component';
import { AccessComponent } from './pages/settings/pages/general/access/access.component';


@NgModule({
  declarations: [DashboardComponent, HomeComponent, UsersComponent, EventsComponent, SupportComponent, SettingsComponent, ProfileComponent, GeneralComponent, ManagementComponent, AboutComponent, AccessComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    MDBBootstrapModulesPro.forRoot(),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class DashboardModule { }
