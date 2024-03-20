import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private router: Router) {
  }

  @Input() theme!: string;
  locStTheme = localStorage.getItem("locStTheme")

  ngOnInit(): void {
  }

  login(): void {
    localStorage.setItem("locStTheme", `${this.theme}`);
    this.router.navigateByUrl(`/profile/edit/${this.theme}`).then()
  }
}
