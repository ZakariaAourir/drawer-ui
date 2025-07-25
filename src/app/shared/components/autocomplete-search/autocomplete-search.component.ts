import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { AUTOCOMPLETE_OPTIONS } from '../../constants/options.contant';

@Component({
  selector: 'app-autocomplete-search',
  styleUrls: ['./autocomplete-search.component.scss'],
  templateUrl: './autocomplete-search.component.html',
})
export class AutocompleteSearchComponent implements OnInit {
  /**
   * Form control for the autocomplete input.
   */
  public myControl = new FormControl('');

  /**
   * List of options for the autocomplete dropdown.
   */
  public options = AUTOCOMPLETE_OPTIONS;

  /**
   * Filtered options based on the user's input.
   */
  public filteredOptions!: Observable<string[]>;

  /**
   *  Indicates whether the dropdown is open or closed. 
   */
  public isOpen = false;

  /**
   * Index of the currently active option in the dropdown.
   */
  public activeIndex = 0;

  /**
   * Host element reference for detecting clicks outside the component.
   * @param host - ElementRef of the host element.
   */
  constructor(private host: ElementRef) {}

  /**
   * Initializes the component by setting up the filtered options observable.
   */
  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }

  /**
   * Opens the autocomplete dropdown and resets the active index. 
   */
  open(): void {
    const value = (this.myControl.value || '').toString().trim();
    this.isOpen = value.length > 0;
    this.activeIndex = 0;
  }
  
  /**
   * Selects an option from the dropdown and sets the input value to the selected option.
   */
  select(option: string): void {
    this.myControl.setValue(option);
    this.isOpen = false;
  }

  /**
   * Handles keyboard events for the autocomplete input.
   * @param event - The keyboard event.
   * @returns void
   */
  handleKey(event: KeyboardEvent): void {
    const list = (this.filteredOptions as Observable<string[]>);
    if (!this.isOpen) return;
    switch (event.key) {
      case 'ArrowDown':
        this.activeIndex++;
        event.preventDefault();
        break;
      case 'ArrowUp':
        this.activeIndex--;
        event.preventDefault();
        break;
      case 'Enter':
        list
          .pipe(map((opts) => opts[this.activeIndex]))
          .subscribe((opt) => this.select(opt));
        event.preventDefault();
        break;
      case 'Escape':
        this.isOpen = false;
        break;
    }
  }

  /**
   * Prevents the default form submission behavior.
   * @param evt - The event object.
   */
  preventSubmit(evt: Event) {
    evt.preventDefault();
  }

  /**
   * Filters the list of options based on the user's input.
   * @param value - The input value to filter by.
   * @returns An array of filtered options.
   */
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter((o) => o.toLowerCase().includes(filterValue));
  }

  /**
   * Closes the dropdown when a click occurs outside the component.
   * @param ev - The mouse event.
   */
  @HostListener('document:click', ['$event'])
  onDocClick(ev: MouseEvent): void {
    if (!this.host.nativeElement.contains(ev.target)) {
      this.isOpen = false;
    }
  }
}
