import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { SidepanelComponent } from './components/sidepanel/sidepanel.component';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, SidepanelComponent],
  imports: [
    CommonModule, 
    LayoutRoutingModule,
    SharedModule
  ],
})
export class LayoutModule {}
