import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AllUsersComponent } from './all-users/all-users.component';


@NgModule({
  declarations: [
    AdminComponent,
    AllUsersComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatMenuModule
  ]
})
export class AdminModule { }
