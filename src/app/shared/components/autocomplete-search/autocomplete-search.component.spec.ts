import { ReactiveFormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { AutocompleteSearchComponent } from './autocomplete-search.component';
import { skip, take } from 'rxjs';

/* mock data identical to your constant */
const OPTIONS = ['Apple', 'Banana', 'Cherry'];

describe('AutocompleteSearchComponent', () => {
  let comp: AutocompleteSearchComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [AutocompleteSearchComponent],
      schemas: [NO_ERRORS_SCHEMA],
    });

    comp = TestBed.createComponent(AutocompleteSearchComponent).componentInstance;
    comp['options'] = OPTIONS;
    comp.ngOnInit();
  });

  it('should create', () => {
    expect(comp).toBeTruthy();
  });

  it('filters options with "includes", case insensitive', (done) => {
    comp.myControl.setValue('an');
    comp.filteredOptions
      .pipe(skip(1), take(1))
      .subscribe(list => {
        expect(list).toEqual(['Banana']);
        done();
      });
  });

  it('open() sets isOpen true only if input not empty', () => {
    comp.myControl.setValue('');
    comp.open();
    expect(comp.isOpen).toBeFalse();
    comp.myControl.setValue('a');
    comp.open();
    expect(comp.isOpen).toBeTrue();
  });

  it('select() writes value and closes the list', () => {
    comp.select('Cherry');
    expect(comp.myControl.value).toBe('Cherry');
    expect(comp.isOpen).toBeFalse();
  });
});