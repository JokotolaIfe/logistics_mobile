import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
// import { StoreModule } from '@ngrx/store';
import {MDBSpinningPreloader, ToastModule, MDBBootstrapModulesPro} from 'ng-uikit-pro-standard';
// import {AgmCoreModule} from '@agm/core';
import { HttpClientModule, HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS  } from '@angular/common/http';
// import { JwtModule } from "@auth0/angular-jwt";
import { AppRoutingModule } from './app-routing.module';
 import { environment } from 'src/environments/environment';

  import { ChartsModule, ChartSimpleModule, WavesModule, TabsModule } from 'ng-uikit-pro-standard'
  // For MDB Angular Pro
import { LightboxModule } from '@ngx-gallery/lightbox';
import {NgxImageCompressService} from 'ngx-image-compress';
import {NgxPaginationModule} from 'ngx-pagination';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { OnboardingModule } from './onboarding/onboarding.module';
import { DashboardModule } from './dashboard/dashboard.module';

// LightboxModule.withConfig({
//     panelClass: 'fullscreen'
// });
@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule, 
        FormsModule,
        HttpClientModule,
        MDBBootstrapModulesPro.forRoot(),
        ToastModule.forRoot(),
        ReactiveFormsModule,
        TabsModule,
        WavesModule,
        ChartSimpleModule,
        ChartsModule,
        BrowserAnimationsModule,
        LightboxModule,
        NgxPaginationModule,
        OnboardingModule,
        DashboardModule
    ],
    bootstrap: [AppComponent],
    providers: [MDBSpinningPreloader, NgxImageCompressService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule  {}