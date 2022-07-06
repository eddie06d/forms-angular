import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NuevoRoutingModule } from './nuevo-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevoComponent } from './nuevo.component';

@NgModule({
  declarations: [
    NuevoComponent
  ],
  imports: [
    CommonModule,
    NuevoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class NuevoModule { }
