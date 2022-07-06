import { LoginRoutingModule } from './login-routing.module';
import { FormModule } from './../form/form.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
