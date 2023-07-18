import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArabicFormComponent } from './arabic-form/arabic-form.component';
import { CreateComponent } from './create/create.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AuthGuard } from './auth.guard';
import { GetInformationComponent } from './get-information/get-information.component';
import { CheckemailComponent } from './checkemail/checkemail.component';
import { EditpasswordComponent } from './editpassword/editpassword.component';
import { AuthAdminGuard } from './auth-admin.guard';
import { GetDwbComponent } from './get-dwb/get-dwb.component';
import { TopfiveComponent } from './topfive/topfive.component';

const routes: Routes = [
  {path:"", component :  LoginComponent},
  {path:'create',canActivate:[AuthGuard],component:CreateComponent },
  {path:'arabic-form',component:ArabicFormComponent},
  {path:'login',component:LoginComponent},
  {path:'loginform',component:LoginFormComponent },
  {path:'register',canActivate:[AuthAdminGuard],component:RegisterComponent},
  {path:'info',canActivate:[AuthAdminGuard],component:GetInformationComponent},
  {path:'checkemail',component:CheckemailComponent},
  {path:'editpass',component:EditpasswordComponent},
  {path:'getdwb/:number',canActivate:[AuthGuard],component:GetDwbComponent},
  {path:'topfive',canActivate:[AuthGuard],component:TopfiveComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
