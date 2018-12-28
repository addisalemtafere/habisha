import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {SignupComponent} from './components/signup/signup.component';
import {ProfileComponent} from './components/profile/profile.component';
import {RequestResetPasswordComponent} from './components/password/request-reset-password/request-reset-password.component';
import {ResponseResetPasswordComponent} from './components/password/response-reset-password/response-reset-password.component';
import {NgxUiLoaderConfig, NgxUiLoaderHttpModule, NgxUiLoaderModule} from "ngx-ui-loader";
import {MatIconModule} from '@angular/material';
import {SharedModule} from "../@share/modules/shared.module";
import {NotFoundComponent} from './components/not-found/not-found.component';
import {AppRoutingModule} from "./app-routing.module";
import {HomeComponent} from './components/home/home.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
    "bgsColor": "#04a162",
    "bgsOpacity": 0.5,
    "bgsPosition": "bottom-left",
    "bgsSize": 90,
    "bgsType": "three-strings",
    "blur": 65,
    "fgsColor": "#0c97a8",
    "fgsPosition": "center-center",
    "fgsSize": 120,
    "fgsType": "three-strings",
    "gap": 24,
    "logoPosition": "center-center",
    "logoSize": 120,
    "logoUrl": "",
    "overlayColor": "rgba(40, 40, 40, 0.8)",
    "pbColor": "#0c97a8",
    "pbDirection": "ltr",
    "pbThickness": 5,
    "hasProgressBar": true,
    "text": "Loading",
    "textColor": "#0c97a8",
    "textPosition": "center-center",
    "threshold": 500,

};

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        SignupComponent,
        ProfileComponent,
        RequestResetPasswordComponent,
        ResponseResetPasswordComponent,
        NotFoundComponent,
        HomeComponent
    ],
    imports: [
        MatIconModule,
        SharedModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
        NgxUiLoaderHttpModule.forRoot({showForeground: true})
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
