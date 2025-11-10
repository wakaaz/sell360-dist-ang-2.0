import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

import { AppRoutingModule } from './app-routing.module';
import { ClickOutsideModule } from 'ng-click-outside';

import { AppComponent } from './app.component';

import { AuthInterceptor } from './core/interceptor/http-auth.interceptor';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';

registerLocaleData(en);

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, metaReducers } from './reducer';
import { LocalStorageSalemanEffects } from './core/effects/salesmen.effects';

import { environment } from '../environments/environment';
import { SharedModule } from './modules/shared/shared.module';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PipeModule } from './modules/shared/pipes/pipe.module';

@NgModule({
  declarations: [AppComponent, DashboardComponent],
  imports: [
    BrowserModule,
    PipeModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ClickOutsideModule,
    SharedModule.forRoot(),
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([LocalStorageSalemanEffects]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: NZ_I18N, useValue: en_US },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
