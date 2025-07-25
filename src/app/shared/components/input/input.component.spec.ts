import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { InputComponent } from './input.component';

describe('InputComponent', () => {
  let fixture: ComponentFixture<InputComponent>;
  let comp: InputComponent;
  let inputEl: HTMLInputElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [InputComponent],
    });

    fixture = TestBed.createComponent(InputComponent);
    comp = fixture.componentInstance;
    comp.control = new FormControl('');
    comp.placeholder = 'Pick one';
    fixture.detectChanges();

    inputEl = fixture.debugElement.query(By.css('input')).nativeElement;
  });

  it('should create', () => {
    expect(comp).toBeTruthy();
  });

  it('sets the placeholder', () => {
    expect(inputEl.placeholder).toBe('Pick one');
  });

  it('emits focus, input, and keydown events', () => {
    const focusSpy = spyOn(comp.focus, 'emit');
    const inputSpy = spyOn(comp.input, 'emit');
    const keySpy = spyOn(comp.keydown, 'emit');

    inputEl.dispatchEvent(new Event('focus'));
    inputEl.dispatchEvent(new Event('input'));
    inputEl.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));

    expect(focusSpy).toHaveBeenCalledTimes(1);
    expect(inputSpy).toHaveBeenCalledTimes(1);
    expect(keySpy).toHaveBeenCalledTimes(1);
    expect(keySpy).toHaveBeenCalledWith(jasmine.any(KeyboardEvent));
  });
});