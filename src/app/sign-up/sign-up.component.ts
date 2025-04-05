import { Component } from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardTitle
} from "@angular/material/card";
import {MatInput, MatLabel} from "@angular/material/input";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-sign-up',
    imports: [
      ReactiveFormsModule,
      MatCardModule,
      MatFormFieldModule,
      MatInput,
      MatButton
    ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  signUpForm = new FormGroup({
    username: new FormControl<string>('', [
      Validators.required,
      Validators.min(1)
    ]),
    password: new FormControl<string>('',[
      Validators.required
    ]),
    passwordConfirmation: new FormControl<string>('',[
      Validators.required
    ]),
    address: new FormControl<string>('',[
      Validators.required
    ]),
    phoneNumber: new FormControl<string>('',[
      Validators.required
    ]),
    email: new FormControl<string>('',[
      Validators.required,
      Validators.email
    ]),
    fullName: new FormControl<string>('',[
      Validators.required,

    ])

  })

  signUp() {
    const username = this.signUpForm.controls['username'].value;
    const password = this.signUpForm.controls['password'].value;
    /*if (username && password) {
      this.authService.login({ username, password });
    }*/

  }
}
