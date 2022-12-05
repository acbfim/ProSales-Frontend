import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'teste', component: LoginComponent
  }
  , { path: '', redirectTo: 'teste', pathMatch: 'full' }
  , { path: '**', redirectTo: 'teste', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
