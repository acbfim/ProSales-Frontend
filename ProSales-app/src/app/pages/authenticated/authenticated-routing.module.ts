import { AuthGuard } from './../../auth/auth.guard';
import { TesteAuthComponent } from './teste-auth/teste-auth.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLayoutComponent } from 'src/app/containers';
import { LoginComponent } from '../login/login.component';
import { NovoTesteComponent } from '../novo-teste/novo-teste.component';
import { TesteNavComponent } from '../teste-nav/teste-nav.component';

const routes: Routes = [

{
  path: ''
  , component: DefaultLayoutComponent
  , children: [
    {
      path: 'teste', component: NovoTesteComponent, canActivate: [AuthGuard]
    }
    ,{
      path: 'auth2', component: TesteAuthComponent, canActivate: [AuthGuard]
    },
    {
      path: 'nav-teste', component: TesteNavComponent, canActivate: [AuthGuard]
    },
  ],
},

];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticatedRoutingModule { }
