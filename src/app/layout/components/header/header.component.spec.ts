import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the header component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the logo label', () => {
    const label = fixture.debugElement.query(By.css('.logo-label'));
    expect(label.nativeElement.textContent).toContain('OneShop');
  });

  it('should emit toggleSidenav when menu button is clicked', () => {
    spyOn(component.toggleSidenav, 'emit');
    const button = fixture.debugElement.query(By.css('.menu-button'));
    button.nativeElement.click();
    expect(component.toggleSidenav.emit).toHaveBeenCalled();
  });
});