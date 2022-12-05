import { NovoTesteComponent } from './pages/novo-teste/novo-teste.component';
import { DefaultLayoutComponent } from './containers/default-layout/default-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: ''
    , component: DefaultLayoutComponent
    , data: { title : 'Home'}
    , children: [
      {
        path: 'login', component: LoginComponent
      }
      ,{
        path: 'teste', component: NovoTesteComponent
      }
    ],
  }




  , { path: '', redirectTo: 'teste', pathMatch: 'full' }
  , { path: '**', redirectTo: 'teste', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
