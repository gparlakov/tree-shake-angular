import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ServiceService } from './service.service';
import { AnotherService } from './another.service';

@NgModule({
    imports: [CommonModule, SharedModule, RouterModule.forChild([{ path: '', component: LazyComponent }])],
    declarations: [LazyComponent],
    providers: [ServiceService, AnotherService],
})
export class LazyModule {}
