import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {HomeComponent} from "./components/home/home.component";


@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: 'home',
                redirectTo: '/',
                pathMatch: 'full'
            },

            {path: '', component: HomeComponent},
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
