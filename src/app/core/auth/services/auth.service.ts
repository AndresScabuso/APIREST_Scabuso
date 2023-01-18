import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user.interface';
import { UsersService } from '../../services/users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  LoggedUser : User | null;
  _errorMessage: string = "";

  constructor(private readonly userService: UsersService, private router: Router) { }

  login(userName: string, password: string) {

    this.userService.getUserByUsernamePassword(userName, password).subscribe(value => {
      if(value) {
        console.log("Logueado con éxito.");
        this.LoggedUser = value;
        this.router.navigate(['dashboard', 'products']);
      }
      else 
      {
        console.log("Credenciales inválidas");
        this._errorMessage = "Usuario y/o contraseña inválido(s). (Perdon por el alert, falta de tiempo)";
        alert(this._errorMessage);
      }
    })
  }

  logout() {
    this.LoggedUser = null;
    this.router.navigate(['auth']);
  }
}
