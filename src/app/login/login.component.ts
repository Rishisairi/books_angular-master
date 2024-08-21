// import { Component } from '@angular/core';
// import {
//   FormBuilder,
//   FormGroup,
//   ReactiveFormsModule,
//   Validators,
// } from '@angular/forms';
// import { MatButtonModule } from '@angular/material/button';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { Router, RouterLink } from '@angular/router';

// import { BooksService } from '../books.service';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-login-page',
//   standalone: true,
//   imports: [
//     ReactiveFormsModule,
//     MatFormFieldModule,
//     MatInputModule,
//     MatButtonModule,
//     RouterLink,
//     CommonModule,
//   ],
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.scss',
// })
// export class LoginPageComponent {
//   login() {
//     throw new Error('Method not implemented.');
//   }
//   loginForm: FormGroup;

//   constructor(
//     public fb: FormBuilder,
//     private router: Router,
//     public booksService: BooksService
//   ) {
//     this.loginForm = this.fb.group({
//       email: ['', [Validators.required]],
//       password: [
//         '',
//         [
//           Validators.required,
//           Validators.minLength(6),
//           Validators.maxLength(16),
//         ],
//       ],
//     });
//   }

//   get email() {
//     return this.loginForm.get('email');
//   }
//   get password() {
//     return this.loginForm.get('password');
//   }
// }
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';

import { BooksService } from '../books.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterLink,
    CommonModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'], // Corrected from styleUrl to styleUrls
})
export class LoginPageComponent {
  loginForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    public booksService: BooksService
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]], // Changed from email to username
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(16),
        ],
      ],
    });
  }

  get username() {
    return this.loginForm.get('username'); // Changed from email to username
  }

  get password() {
    return this.loginForm.get('password');
  }

  login() {
    if (this.loginForm.valid) {
      // Implement login logic here
      console.log(this.loginForm.value);
      // Navigate to another page on successful login
      this.router.navigate(['/search']); // Adjust the route as necessary
    }
  }
}
