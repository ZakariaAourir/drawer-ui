import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteSearchComponent } from './components/autocomplete-search/autocomplete-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './components/input/input.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [AutocompleteSearchComponent, InputComponent, ListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    AutocompleteSearchComponent
  ],
})
export class SharedModule {}
