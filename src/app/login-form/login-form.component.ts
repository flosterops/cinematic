import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { setLs } from '../../utils/ls';
import { Router } from '@angular/router';
import { ILoginResponse, UserService } from '../services/user/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}

  onSubmit() {
    const email = this.form.controls.email.value as string;
    const password = this.form.controls.password.value as string;

    this.userService
      .login(email, password)
      .subscribe((data: ILoginResponse) => {
        if (data.token) {
          setLs('token', data.token);
          this.router.navigate(['/']);
        }
      });
  }
}
