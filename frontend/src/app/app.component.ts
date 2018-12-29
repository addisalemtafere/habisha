import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {NgxUiLoaderService} from "ngx-ui-loader";
import {Router} from "@angular/router";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy, OnInit {
    title = 'frontend';
    mobileQuery: MediaQueryList;
    public _mobileQueryListener: () => void;

    constructor(changeDetectorRef: ChangeDetectorRef,
                public router: Router,
                private ngxService: NgxUiLoaderService,
                media: MediaMatcher) {

        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }

    ngOnDestroy() {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }

    ngOnInit(): void {
        this.ngxService.start(); // start foreground loading with 'default' id
        this.ngxService.stop();
    }
}
