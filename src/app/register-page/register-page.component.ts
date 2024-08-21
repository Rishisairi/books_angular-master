import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  ValidatorFn,
  AbstractControl,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss',
})
export class RegisterPageComponent {
  registerForm: FormGroup;

  constructor(public fb: FormBuilder, public router: Router) {
    this.registerForm = this.fb.group(
      {
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        mobile: ['', [Validators.required, Validators.maxLength(10)]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(16),
          ],
        ],
        cpassword: ['', [Validators.required]],
      },
      { Validators: this.passwordMatchValidator() }
    );
  }
  passwordMatchValidator(): ValidatorFn {
    return (formGroup: AbstractControl): { [key: string]: any } | null => {
      const password = formGroup.get('password');
      const confirmPassword = formGroup.get('cpassword');

      if (
        password &&
        confirmPassword &&
        password.value !== confirmPassword.value
      ) {
        return { passwordMismatch: true };
      }
      return null;
    };
  }

  get name() {
    return this.registerForm.get('name');
  }
  get mobile() {
    return this.registerForm.get('mobile');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }

  get cpassword() {
    return this.registerForm.get('cpassword');
  }
  register() {
    if (this.registerForm.valid) {
      this.router.navigate(['/login-page']);
      //   const userDetails = this.registerForm.value;
      //   this.userService.register(userDetails).then(() => {
      //     // Navigate to a different page or show a success message
      //     this.router.navigate(['/login']); // Redirect to login page or wherever suitable
      //   }).catch(error => {
      //     console.error('Registration error:', error);
      //     // Handle registration errors (e.g., show a notification to the user)
      //   });
      // } else {
      //   // Optionally handle form invalid case (e.g., show validation errors)
    }
  }
}
