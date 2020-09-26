import { AuthenticatorRoutingModule } from './authenticator-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AuthenticatorRoutingModule
  ]
})
export class AuthenticatorModule { }
