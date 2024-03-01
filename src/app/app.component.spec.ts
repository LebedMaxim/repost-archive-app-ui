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

  it('should have light theme by default', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const table = fixture.debugElement.nativeElement.querySelector('.table');
    expect(table.getAttribute('data-bs-theme')).toBe('light');
  });

  it('buttons should have dark theme by default', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const buttonTheme = fixture.debugElement.query(By.css('.buttonTheme'));
    expect(buttonTheme.classes['btn-outline-dark']).toBeTruthy();
  });

  it('dark theme button should change theme to dark', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    fixture.debugElement.query(By.css('.btn.buttonTheme'))
      .triggerEventHandler("click", null);
    fixture.detectChanges();
    const table = fixture.debugElement.nativeElement.querySelector('.table');
    expect(table.getAttribute('data-bs-theme')).toBe('dark');
    const buttonTheme = fixture.debugElement.query(By.css('.buttonTheme'));
    expect(buttonTheme.classes['btn-outline-light']).toBeTruthy();
  });

  it('dark theme button should change theme to light', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    fixture.debugElement.query(By.css('.btn.buttonTheme'))
      .triggerEventHandler("dblclick", null);
    fixture.detectChanges();
    const table = fixture.debugElement.nativeElement.querySelector('.table');
    expect(table.getAttribute('data-bs-theme')).toBe('light');
    const buttonTheme = fixture.debugElement.query(By.css('.buttonTheme'));
    expect(buttonTheme.classes['btn-outline-dark']).toBeTruthy();
  });
});
