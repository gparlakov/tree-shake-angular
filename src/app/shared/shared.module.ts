import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneComponent } from './one.component';
import { TwoComponent } from './two.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OneComponent, TwoComponent],
  exports: [OneComponent, TwoComponent]
})
export class SharedModule { }
