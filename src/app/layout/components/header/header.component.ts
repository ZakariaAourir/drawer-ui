import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  /**
   * Event emitter to toggle the sidenav
   */
  @Output() toggleSidenav = new EventEmitter<void>();

  /**
   * Method to emit the toggle event for the sidenav
   */
  onToggleSidenav() {
    this.toggleSidenav.emit();
  }
}
