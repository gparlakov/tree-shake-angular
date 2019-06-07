import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        SharedModule,
        RouterModule.forRoot([{ path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule' }]),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
