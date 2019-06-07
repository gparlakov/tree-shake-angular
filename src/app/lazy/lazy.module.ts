import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneLazyComponent } from './one-lazy.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [CommonModule, SharedModule, RouterModule.forChild([{ path: '', component: OneLazyComponent }])],
    declarations: [OneLazyComponent],
})
export class LazyModule {}
