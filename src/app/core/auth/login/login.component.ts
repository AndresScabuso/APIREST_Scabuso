import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  userNameControl = new FormControl("");
  passwordControl = new FormControl("");

  loginForm = new FormGroup({
    userName: this.userNameControl,
    password: this.passwordControl
  })

  constructor(private readonly authService: AuthService) {}

  login() {
    const user = {
      userName: this.loginForm.get('userName')?.value!,
      password: this.loginForm.get('password')?.value!
    };
    this.authService.login(user.userName, user.password);
  }

}
