import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  username: string = "";
  email: string = "";
  password: string = "";
  error: string = "";

  constructor(private router: Router) { }

  ngOnInit() {
  }

  register() {
    // salvar o usuário no banco de dados ou local storage
    // redirecionar para a tela de login
    this.router.navigate(['/login']);
  }

}
