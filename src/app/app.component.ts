import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'repost-archive-app-ui';
  theme = 'light';

  changeTheme() {
    if (this.theme === 'dark') {
      this.theme = 'light'
    } else {
      this.theme = 'dark'
    }
  }

  switchTheme() {
    if (this.theme === 'dark') {
      return 'Switch to light mode'
    } else {
      return 'Switch to dark mode'
    }
  }
}
