import { Component, ViewChild } from '@angular/core';
import { SidepanelComponent } from './components/sidepanel/sidepanel.component';

@Component({
  selector: 'app-layout',
  styleUrls: ['./layout.component.scss'],
  templateUrl: './layout.component.html',
})
export class LayoutComponent {
  /**
   * Reference to the sidepanel component
   */
  @ViewChild('sidepanel') sidepanel!: SidepanelComponent;

  /**
   * Method to toggle the sidenav
   */
  onToggleSidenav() {
    this.sidepanel.toggle();
  }
}
