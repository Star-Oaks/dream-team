import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzMenuModule } from 'ng-zorro-antd/menu';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MenuComponent } from './menu/menu.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainContainerComponent } from './main-container/main-container.component';


@NgModule({
  declarations: [MenuComponent, SideMenuComponent, FooterComponent, DashboardComponent, MainContainerComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NzMenuModule
    
  ]
})
export class DashboardModule { }
