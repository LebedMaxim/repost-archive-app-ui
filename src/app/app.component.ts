import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'repost-archive-app-ui';

  darkTheme = false;
  btnOutline = 'btn-outline-dark';

  changeTheme() {
    function themeSwitcher(color: any) {
      document.getElementById('themeSwitcher')!.setAttribute('data-bs-theme', color)
    }

    if (this.darkTheme) {
      themeSwitcher('light')
      this.btnOutline = 'btn-outline-dark';
    } else {
      themeSwitcher('dark')
      this.btnOutline = 'btn-outline-light';
    }
    this.darkTheme = !this.darkTheme
  }
}
