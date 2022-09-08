import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { localStorageKeys } from 'src/app/core/constants/localstorage.constants';

import { LocalStorageService } from 'src/app/core/services/storage.service';
import { GeneralDataService } from '../shared/services';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  captcha: string;
  apiError: string;

  loading: boolean;

  constructor(
    private router: Router,
    private storageService: LocalStorageService,
    private loginService: LoginService
  ) {
    const token = this.storageService.getItem(localStorageKeys.session);
    const distributor = this.storageService.getItem(
      localStorageKeys.distributor
    );
    if (token !== null && distributor !== null) {
      this.router.navigateByUrl('/home');
    }
  }

  ngOnInit(): void {
    this.apiError = this.username = this.password = '';
    this.loading = false;
  }

  login(loginForm: NgForm): void {
    if (loginForm.valid && this.captcha) {
      this.loading = true;
      this.apiError = '';
      this.loginService
        .login({
          distributor_username: this.username,
          distributor_password: this.password,
        })
        .subscribe(
          (res: any) => {
            if (res.status === 202) {
              this.apiError = res.message;
              this.resetApiError();
            } else {
              const { token, ...rest } = res.data;
              this.storageService.setItem(localStorageKeys.distributor, rest);

              // save permissions
              this.storageService.setItem(
                localStorageKeys.permissions,
                res.data.permissions
              );
              this.storageService.setCheckPermissions();
              this.storageService.setItem(localStorageKeys.session, token);
              this.router.navigateByUrl('/home');
            }
            this.loading = false;
          },
          (error) => {
            this.loading = false;
            this.apiError = 'Something went wrong please try again later!';
            this.resetApiError();
          }
        );
    }
  }

  resetApiError(): void {
    setTimeout(() => {
      this.apiError = '';
    }, 5000);
  }
}
