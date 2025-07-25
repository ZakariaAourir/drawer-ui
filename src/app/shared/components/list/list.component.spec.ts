import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let fixture: ComponentFixture<ListComponent>;
  let comp: ListComponent;

  /* sample data */
  const OPTIONS = ['Apple', 'Banana', 'Cherry'];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule],
      declarations: [ListComponent],
    });

    fixture = TestBed.createComponent(ListComponent);
    comp = fixture.componentInstance;

    /* set test inputs */
    comp.options = OPTIONS;
    comp.activeIndex = 1;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(comp).toBeTruthy();
  });

  it('renders a <li> for each option and marks the active one', () => {
    const liElems = fixture.debugElement.queryAll(By.css('li'));
    expect(liElems.length).toBe(OPTIONS.length);
    expect(liElems[1].nativeElement.classList).toContain('active');
  });

  it('emits "select" when an option is clicked', () => {
    const spy = spyOn(comp.select, 'emit');
    const secondLi = fixture.debugElement.queryAll(By.css('li'))[2];
    secondLi.triggerEventHandler('mousedown', null);
    expect(spy).toHaveBeenCalledOnceWith('Cherry');
  });
});