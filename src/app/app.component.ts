import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'repost-archive-app-ui';
  theme: string | null | undefined;
  locStTheme: string | null | undefined;

  constructor(private keycloakService: KeycloakService, private router: Router) {
  }

  async ngOnInit() {
    this.locStTheme = localStorage.getItem("locStTheme")
    if (!this.locStTheme) this.theme = 'light'
    if (!this.theme) this.theme = this.locStTheme
    if (!await this.keycloakService.isLoggedIn()) {
      this.router.navigateByUrl(`/welcome/home/${this.theme}`).then()
    }
  }

  changeTheme() {
    this.theme === 'dark' ? this.theme = 'light' : this.theme = 'dark'
    localStorage.setItem('locStTheme', this.theme)

    if (this.router.url === '/welcome/home/light' ||
      this.router.url === '/welcome/home/dark') {
      this.router.navigateByUrl(`welcome/home/${(this.theme)}`).then()
    }

    if (this.router.url === '/profile/edit/light' ||
      this.router.url === '/profile/edit/dark') {
      this.router.navigateByUrl(`profile/edit/${(this.theme)}`).then()
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
