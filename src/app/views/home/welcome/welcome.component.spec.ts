import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WelcomeComponent} from './welcome.component';
import {AppComponent} from "../../../app.component";
import {By} from "@angular/platform-browser";

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WelcomeComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a light theme by default', () => {
    const fixture = TestBed.createComponent(WelcomeComponent);
    const table = fixture.debugElement.nativeElement.querySelector('.table');

    fixture.detectChanges();
    expect(table.getAttribute('data-bs-theme')).toBe('light');
  });

  it('should have a dark theme at the buttons by default', () => {
    const fixture = TestBed.createComponent(WelcomeComponent);
    const themeButton = fixture.debugElement.query(By.css('.themeButton'));
    const loginButton = fixture.debugElement.query(By.css('.loginButton'));

    fixture.detectChanges();
    expect(themeButton.classes['btn-outline-dark']).toBeTruthy();
    expect(loginButton.classes['btn-outline-dark']).toBeTruthy();
  });

  it('should change a theme to dark by the switch theme button', () => {
    const fixture = TestBed.createComponent(WelcomeComponent);
    const table = fixture.debugElement.nativeElement.querySelector('.table');
    const themeButton = fixture.debugElement.query(By.css('.themeButton'));
    const loginButton = fixture.debugElement.query(By.css('.loginButton'));

    fixture.detectChanges();
    fixture.debugElement.query(By.css('.themeButton'))
      .triggerEventHandler("click", null);
    fixture.detectChanges();

    expect(table.getAttribute('data-bs-theme')).toBe('dark');
    expect(themeButton.classes['btn-light']).toBeTruthy();
    expect(loginButton.classes['btn-outline-light']).toBeTruthy();
  });

  it('should change a theme to light by the switch theme button', () => {
    const fixture = TestBed.createComponent(WelcomeComponent);
    const table = fixture.debugElement.nativeElement.querySelector('.table');
    const themeButton = fixture.debugElement.query(By.css('.themeButton'));
    const loginButton = fixture.debugElement.query(By.css('.loginButton'));

    fixture.detectChanges();
    fixture.debugElement.query(By.css('.themeButton'))
      .triggerEventHandler("dblclick", null);
    fixture.detectChanges();

    expect(table.getAttribute('data-bs-theme')).toBe('light');
    expect(themeButton.classes['btn-outline-dark']).toBeTruthy();
    expect(loginButton.classes['btn-outline-dark']).toBeTruthy();
  });
});
