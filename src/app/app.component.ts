import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'repost-archive-app-ui';

  darkTheme = 'light';
  btnOutline = 'btn-outline-dark';

  changeTheme() {
    if (this.darkTheme === 'dark') {
      this.darkTheme = 'light'
      this.btnOutline = 'btn-outline-dark'
    } else {
      this.darkTheme = 'dark'
      this.btnOutline = 'btn-outline-light'
    }
  }
}
