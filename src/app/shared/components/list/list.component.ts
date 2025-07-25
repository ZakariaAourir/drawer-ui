import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  /**
   * List of options to display in the component.
  */
  @Input() options: string[] = [];

  /**
   * Index of the currently active option.
   */
  @Input() activeIndex = 0;

  /**
   * Event emitted when an option is selected.
   */
  @Output() select = new EventEmitter<string>();

  /**
   * Handles the selection of an option from the list.
   * @param option - The selected option.
   */
  onSelect(option: string) {
    this.select.emit(option);
  }
}