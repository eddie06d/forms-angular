import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProcesoAccesoRoutingModule } from './proceso-acceso-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcesoAccesoComponent } from './proceso-acceso.component';

@NgModule({
  declarations: [
    ProcesoAccesoComponent
  ],
  imports: [
    CommonModule,
    ProcesoAccesoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProcesoAccesoModule { }
