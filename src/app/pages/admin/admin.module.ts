import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { HttpClientModule } from '@angular/common/http';
import { OverviewComponent } from './overview/overview.component';


@NgModule({
  declarations: [
    AdminComponent,
    AllUsersComponent,
    OverviewComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatMenuModule,
    HttpClientModule
  ]
})
export class AdminModule { }
