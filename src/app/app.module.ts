import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'

import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TransformUrlInterceptor } from './interceptors/transform-url.interceptor';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { userReducer } from './state/user/user.reducer';
import { UserEffects } from './state/user/user.effects';
import { EmailComponent } from './components/common/validation/email/email.component';
import { PasswordComponent } from './components/common/validation/password/password.component';
import { UsernameComponent } from './components/common/validation/username/username.component';
import { ErrorHandlerInterceptor } from './interceptors/error-handler.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
    EmailComponent,
    PasswordComponent,
    UsernameComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({user:userReducer}),
    EffectsModule.forRoot([UserEffects])
    

  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:TransformUrlInterceptor,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:ErrorHandlerInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

