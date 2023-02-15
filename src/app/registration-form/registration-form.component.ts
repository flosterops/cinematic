import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ILoginResponse, UserService } from '../services/user/user.service';
import { Router } from '@angular/router';
import { setLs } from '../../utils/ls';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent {
  form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    repeatPassword: new FormControl(''),
  });

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}

  onSubmit() {
    const email = this.form.controls.email.value as string;
    const password = this.form.controls.password.value as string;
    const repeatPassword = this.form.controls.repeatPassword.value as string;

    if (password !== repeatPassword) {
      return;
    }

    this.userService
      .register(email, password)
      .subscribe((data: ILoginResponse) => {
        if (data.token) {
          this.router.navigate(['/login']);
        }
      });
  }
}
