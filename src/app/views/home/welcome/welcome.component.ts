import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  login(): void {
    this.router.navigateByUrl('/profile').then();
  }

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
