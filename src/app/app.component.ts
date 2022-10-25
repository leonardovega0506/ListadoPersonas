import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/compat/app'
import { LoginService } from './login/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo = 'Listado de Personas';
  
  constructor(private loginService: LoginService){}

  ngOnInit(): void {
   firebase.default.initializeApp({
    apiKey: "AIzaSyDLUYPL3ICRyK8IsCYWKe0058bwjrZKXwU",
    authDomain: "listado-personas-6a3ed.firebaseapp.com",
   })
  }

  isAutenticado(){
    return this.loginService.isAutenticado();
  }

  salir(){
    this.loginService.logout();
  }

}
