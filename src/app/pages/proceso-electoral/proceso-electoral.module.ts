import { ProcesoElectoralRoutingModule } from './proceso-electoral-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcesoElectoralComponent } from './proceso-electoral.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProcesoElectoralComponent
  ],
  imports: [
    CommonModule,
    ProcesoElectoralRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProcesoElectoralModule { }
