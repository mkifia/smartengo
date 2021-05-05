import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {VariablesService} from "../common/variables.service";
import {ActivatedRoute, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private readonly http: HttpClient,
    private readonly globalVariables: VariablesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  getAccessToken() {
    return localStorage.getItem('user_access_token');
  }

  signUp(data) {
    return this.http.post(
      this.globalVariables.auth_endpoint + '/register',
      {
        "username": data.username,
        "email": data.email,
        "password": data.password,
        "password_confirm": data.password_confirm,
        "role": data.role,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      this.globalVariables.jsonHeader
    );
  }

  signIn(email: string, password: string) {
    return this.http.post(
      this.globalVariables.auth_endpoint + '/login',
      {
        'email': email,
        'password': password
      },
      this.globalVariables.jsonHeader
    ).subscribe(
      (result:any) => {
        localStorage.setItem('user_access_token', result['access_token']);
        localStorage.setItem('user_id', result['id']);
        this.router.navigate(['article']).finally();
      }
    )
  }

  signOut() {
    return this.http.post(
      this.globalVariables.auth_endpoint + '/logout',
      {},
      this.globalVariables.jsonHeader
    ).subscribe(
      (result:any) => {
        this.router.navigate(['sign-in']).finally();
      }
    )
  }

  authenticate() {
    return this.http.get(
      this.globalVariables.auth_endpoint + '/user'
    );
  }
}
