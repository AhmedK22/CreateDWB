import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule  } from '@angular/forms';
import{RecaptchaModule,RecaptchaFormsModule}from'ng-recaptcha';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { FormGroup,FormControl } from '@angular/forms';

import { LoginComponent } from './login/login.component';

import { ArabicFormComponent } from './arabic-form/arabic-form.component';
import { RegisterComponent } from './register/register.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { GetInformationComponent } from './get-information/get-information.component';

import { EditpasswordComponent } from './editpassword/editpassword.component';
import { CheckemailComponent } from './checkemail/checkemail.component';
import { GetDwbComponent } from './get-dwb/get-dwb.component';
import { TopfiveComponent } from './topfive/topfive.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,

    LoginComponent,

     ArabicFormComponent,
      RegisterComponent,
      LoginFormComponent,
      GetInformationComponent,
      
      EditpasswordComponent,
      CheckemailComponent,
      GetDwbComponent,
      TopfiveComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,





  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
