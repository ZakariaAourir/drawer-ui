import { Component } from '@angular/core';

@Component({
  selector: 'app-sidepanel',
  templateUrl: './sidepanel.component.html',
  styleUrls: ['./sidepanel.component.scss']
})
export class SidepanelComponent {
  /**
   * Indicates whether the side panel is opened or closed.
  */
  public opened = false;

  /**
   * Toggles the opened state of the side panel.
  */
  toggle(): void {
    this.opened = !this.opened;
  }
}
