import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {AngMaterialModule} from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
    imports: [
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        HttpClientModule,
        // BrowserAnimationsModule,
        AngMaterialModule,


    ],
    exports: [
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        HttpClientModule,
        // BrowserAnimationsModule,
        AngMaterialModule,


    ],
    declarations: [],
    entryComponents: [],
    // providers: [DatePipe],
})
export class SharedModule {
}
