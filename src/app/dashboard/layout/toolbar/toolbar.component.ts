import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  user: string;

  constructor(private readonly authService: AuthService) {}

  ngOnInit(): void {
    this.getUserName();
  }

  getUserName() {
    this.user = this.authService.LoggedUser?.userName!;
  }

  logout() {
    this.authService.logout();
  }

}
