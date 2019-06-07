import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [CommonModule, SharedModule, RouterModule.forChild([{ path: '', component: LazyComponent }])],
    declarations: [LazyComponent],
})
export class LazyModule {}
