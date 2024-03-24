import {Component, Input, OnInit} from '@angular/core';
import {KeycloakService} from 'keycloak-angular';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  user = '';

  constructor(private keycloakService: KeycloakService) {
  }

  @Input() theme!: string;

  ngOnInit(): void {
    this.initializeUserOptions();
  }

  private initializeUserOptions(): void {
    this.user = this.keycloakService.getUsername();
  }

  logout(): void {
    localStorage.setItem("locStTheme", `${this.theme}`);
    this.keycloakService.logout('http://localhost:4202').then();
  }
}
