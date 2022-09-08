import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
import { LoginRoutingModule } from './login-routing.module';

import { LoginComponent } from './login.component';

import { LoginService } from './services/login.service';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
  ],
  declarations: [LoginComponent],
  providers: [LoginService],
})
export class LoginModule {}
