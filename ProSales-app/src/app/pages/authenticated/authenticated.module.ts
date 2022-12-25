import { MaterialModule } from './../../modules/material.module';
import { AuthenticatedRoutingModule } from './authenticated-routing.module';
import { TesteAuthComponent } from './teste-auth/teste-auth.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultFooterComponent, DefaultHeaderComponent, DefaultLayoutComponent } from 'src/app/containers';

const APP_CONTAINERS = [
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent,
];

@NgModule({
  declarations: [
    ...APP_CONTAINERS,
    TesteAuthComponent,


  ],
  imports: [
    CommonModule
    ,MaterialModule
    ,AuthenticatedRoutingModule
  ]
})
export class AuthenticatedModule { }
