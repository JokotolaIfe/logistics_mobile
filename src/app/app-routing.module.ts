import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
// import { redirectUnauthorizedTo, redirectLoggedInTo, canActivate } from '@angular/fire/auth-guard';
// import { OnboardingComponent } from "./onboarding/onboarding.component";


// const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
// const redirectLoggedInToDashboard = () => redirectLoggedInTo(['p/dashboard']);

const routes: Routes = [
  { path: '', loadChildren: () => import('./onboarding/onboarding.module').then(m => m.OnboardingModule) },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
