import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './guards/auth.guard';
import { loginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent,
    canActivate:[loginGuard]

    
  },

  {
    path:'register',
    component:RegisterComponent,
    canActivate:[loginGuard]
    

  },

  {
    path:'home',
    component:HomeComponent,
    canActivate:[authGuard]
  },

  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path:'**',
    redirectTo:'/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
