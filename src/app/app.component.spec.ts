import {TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {By} from "@angular/platform-browser";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'repost-archive-app-ui'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('repost-archive-app-ui');
  });

  it('should have a light theme by default', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const table = fixture.debugElement.nativeElement.querySelector('.table');

    fixture.detectChanges();
    expect(table.getAttribute('data-bs-theme')).toBe('light');
  });

  it('should have a dark theme at the buttons by default', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const buttonTheme = fixture.debugElement.query(By.css('.buttonTheme'));

    fixture.detectChanges();
    expect(buttonTheme.classes['btn-outline-dark']).toBeTruthy();
  });

  it('should change a theme to dark by the switch theme button', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const table = fixture.debugElement.nativeElement.querySelector('.table');
    const buttonTheme = fixture.debugElement.query(By.css('.buttonTheme'));

    fixture.detectChanges();
    fixture.debugElement.query(By.css('.btn.buttonTheme'))
      .triggerEventHandler("click", null);
    fixture.detectChanges();

    expect(table.getAttribute('data-bs-theme')).toBe('dark');
    expect(buttonTheme.classes['btn-outline-light']).toBeTruthy();
  });

  it('should change a theme to light by the switch theme button', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const table = fixture.debugElement.nativeElement.querySelector('.table');
    const buttonTheme = fixture.debugElement.query(By.css('.buttonTheme'));

    fixture.detectChanges();
    fixture.debugElement.query(By.css('.btn.buttonTheme'))
      .triggerEventHandler("dblclick", null);
    fixture.detectChanges();

    expect(table.getAttribute('data-bs-theme')).toBe('light');
    expect(buttonTheme.classes['btn-outline-dark']).toBeTruthy();
  });
});
