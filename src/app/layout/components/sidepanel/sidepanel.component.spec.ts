import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SidepanelComponent } from './sidepanel.component';

describe('SidepanelComponent', () => {
  let fixture: ComponentFixture<SidepanelComponent>;
  let comp: SidepanelComponent;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SidepanelComponent],
        schemas: [NO_ERRORS_SCHEMA],
      })
        .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(SidepanelComponent);
          comp = fixture.componentInstance;
          fixture.detectChanges();
        });
    })
  );

  it('starts closed', () => {
    expect(comp.opened).toBeFalse();
    expect(fixture.debugElement.query(By.css('.drawer.open'))).toBeNull();
  });

  it('toggle() adds/removes the "open" class', () => {
    comp.toggle();
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.drawer.open'))).toBeTruthy();

    comp.toggle();
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.drawer.open'))).toBeNull();
  });
});