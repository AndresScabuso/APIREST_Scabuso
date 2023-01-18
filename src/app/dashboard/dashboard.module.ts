import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { PageWrapperComponent } from './layout/page-wrapper/page-wrapper.component';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  declarations: [
    ToolbarComponent,
    PageWrapperComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
