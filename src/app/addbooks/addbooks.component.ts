import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import {
  MatError,
  MatFormField,
  MatFormFieldControl,
  MatLabel,
} from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButtonModule, MatFabButton } from '@angular/material/button';

import { Router } from '@angular/router';
import { Book } from '../app.component';
import { MatOption, MatSelect } from '@angular/material/select';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { BooksService } from '../books.service';
import { NewBook } from '../book';

@Component({
  selector: 'app-addbooks',
  standalone: true,
  imports: [
    FormsModule,
    MatFormField,
    MatInput,
    MatButtonModule,
    ReactiveFormsModule,
    MatError,
    MatSelect,
    MatLabel,
    MatOption,
    MatRadioGroup,
    MatRadioButton,
    MatFabButton,
  ],
  templateUrl: './addbooks.component.html',
  styleUrl: './addbooks.component.scss',
})
export class AddbooksComponent {
  bookForm: FormGroup;
  bookadd!: Array<Book>;

  constructor(
    public booksservice: BooksService,
    private router: Router,
    private fb: FormBuilder
  ) {
    // this.recipeadd = this.RecipeServiceService.getrecipes();
    this.bookForm = this.fb.group({
      id: [''],
      image: ['', [Validators.required, Validators.minLength(2)]],
      title: ['', [Validators.required, Validators.minLength(2)]],
      category: '',
      rating: [
        '',
        [Validators.required, Validators.min(2), Validators.max(10)],
      ],
      //summary: ['', [Validators.required, Validators.minLength(2)]],
      author: '',
      publicationDate: '',
      status: '',
    });
  }
  addbooks() {
    if (this.bookForm.value) {
      let bookadd: NewBook = this.bookForm.value;

      this.booksservice.addbook(bookadd).then(() => {
        this.router.navigate(['search']);
      });
    }
  }
  get posterUrl() {
    return this.bookForm.get('posterUrl');
  }
  get title() {
    return this.bookForm.get('title');
  }
  get rating() {
    return this.bookForm.get('rating');
  }
}
