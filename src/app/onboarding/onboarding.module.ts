import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnboardingRoutingModule } from './onboarding-routing.module';
import { OnboardingComponent } from './onboarding.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FormsModule } from '@angular/forms';
import { MDBBootstrapModule, MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';


@NgModule({
  declarations: [OnboardingComponent, LoginComponent, RegisterComponent],
  imports: [
    FormsModule,
    // MDBBootstrapModule,
    CommonModule,
    MDBBootstrapModulesPro.forRoot(),
    OnboardingRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class OnboardingModule { }
