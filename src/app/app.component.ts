import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'repost-archive-app-ui';
  theme = 'light';
  btnOutline = 'btn-outline-dark';

  changeTheme() {
    if (this.theme === 'dark') {
      this.theme = 'light'
      this.btnOutline = 'btn-outline-dark'
    } else {
      this.theme = 'dark'
      this.btnOutline = 'btn-outline-light'
    }
  }
}
