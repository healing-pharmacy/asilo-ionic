import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = "";
  password: string = "";
  error: string = "";

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login() {
    // verificar se o usuário e a senha estão corretos
    if (this.username === "anna" && this.password === "anna") {
      this.router.navigate(['/dashboard']);
    } else {
      this.error = "Usuário ou senha incorretos.";
    }
  }

}

