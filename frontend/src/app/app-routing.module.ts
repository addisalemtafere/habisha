import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import {SignupComponent} from "./components/signup/signup.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {RequestResetPasswordComponent} from "./components/password/request-reset-password/request-reset-password.component";
import {ResponseResetPasswordComponent} from "./components/password/response-reset-password/response-reset-password.component";


@NgModule({
    imports: [
        RouterModule.forRoot([
            {path: 'home', redirectTo: '/', pathMatch: 'full'},
            {path: '', component: HomeComponent},
            {path: 'login', component: LoginComponent},
            {path: 'sign-up', component: SignupComponent},
            {path: 'profile', component: ProfileComponent},
            {path: 'request-password-reset', component: RequestResetPasswordComponent},
            {path: 'response-password-reset', component: ResponseResetPasswordComponent},
            {path: '**', component: NotFoundComponent},
        ])
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class AppRoutingModule {
}
