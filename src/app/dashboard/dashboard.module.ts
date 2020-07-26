import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MenuComponent } from './menu/menu.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { SharedModule } from '../shared/shared.module';
import { NgZorroAntdModuleModule } from '../shared/ng-zorro-antd-module/ng-zorro-antd-module.module';


@NgModule({
  declarations: [MenuComponent, SideMenuComponent, FooterComponent, DashboardComponent, MainContainerComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgZorroAntdModuleModule,
    SharedModule
  ]
})
export class DashboardModule { }
