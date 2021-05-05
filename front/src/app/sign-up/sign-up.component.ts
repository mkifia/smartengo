import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.form = this.fb.group({
      username: new FormControl('', Validators.compose([Validators.required, Validators.minLength(3)])),
      email: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
      role: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
      password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
      password_confirm: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
    });
  }

  ngOnInit(): void {
  }

  signUpUser() {
    const data = {
      "username": this.form.get('username').value,
      "email": this.form.get('email').value,
      "role": this.form.get('role').value,
      "password": this.form.get('password').value,
      "password_confirm": this.form.get('password_confirm').value,
    }

    this.authService.signUp(data).subscribe(
      (result:any) => {
        if(result['status'] == 'success'){
          this.form.reset();
          this.router.navigate(['sign-in']).finally();
        }
      }
    )
  }
}
