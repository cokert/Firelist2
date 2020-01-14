import { SecureComponent } from './secure/secure.component';
import { NgModule } from '@angular/core';
import { AuthGuard } from './core/auth.guard';

import { Routes, RouterModule } from '@angular/router';


import { UserComponent } from './user/user.component';
import { UserResolver } from './user/user.resolver';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'secure', component: SecureComponent, canActivate: [AuthGuard] },
  { path: 'user', component: UserComponent,  resolve: { data: UserResolver}},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
