import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  /**
   * Form control for the input.
   */
  @Input() control!: FormControl;

  /**
   * Placeholder text for the input.
   */
  @Input() placeholder = '';

  /**
   * Whether the input is disabled.
   */
  @Output() focus = new EventEmitter<void>();

  /**
   * Event emitted when the input is focused.
   */
  @Output() input = new EventEmitter<void>();

  /**
   * Event emitted when a key is pressed in the input.
   */
  @Output() keydown = new EventEmitter<KeyboardEvent>();
}