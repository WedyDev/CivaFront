import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../service/login.service';
import { JwtRequest } from 'src/app/model/jwtRequest';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  mensaje: string = ""

  constructor(private LoginService: LoginService, private router: Router) {}

  login(): void {
    let request = new JwtRequest();
    request.username=this.username;
    request.password=this.password;

    if (request.username && request.username.trim() !== '' && request.password && request.password.trim() !== '') {
      this.LoginService.login(request).subscribe((data: any) => {
        sessionStorage.setItem("token", data.jwttoken);
        this.router.navigate(['futbolistas']);
        sessionStorage.setItem("username", this.username);
      }, error => {
        this.mensaje = "Credenciales incorrectas!!!"

      });
    }
    else{
      this.mensaje = "Complete las credenciales!!!"
    }
  }
}
