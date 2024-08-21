import { Component } from '@angular/core';
import { BooksService } from '../books.service';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { NewBook } from '../book';
import { Book } from '../app.component';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import {
  MatFormFieldControl,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {
  MatOption,
  MatSelect,
  MatSelectModule,
} from '@angular/material/select';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';

@Component({
  selector: 'app-edit-books',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    UpperCasePipe,
    MatSelect,
    MatOption,
    MatRadioGroup,
    MatRadioButton,
    MatSelectModule,
    CommonModule,
  ],
  templateUrl: './edit-books.component.html',
  styleUrl: './edit-books.component.scss',
})
export class EditBooksComponent {
  bookForm: FormGroup;
  // route: any;

  constructor(
    public bookserive: BooksService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    // this.recipeadd = this.RecipeServiceService.getrecipes();
    this.bookForm = this.fb.group({
      id: [''],
      title: ['', [Validators.required, Validators.minLength(2)]],
      author: '',
      category: '',
      publicationDate: '',
      status: '',
      image: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.pattern(/^https:.*/),
        ],
      ],

      rating: [
        '',
        [Validators.required, Validators.min(2), Validators.max(10)],
      ],
      // summary: ['', [Validators.required, Validators.minLength(2)]],
      // ingredients: '',
      // timeToComplete: '',
      // procedure: '',
      // cuisines: '',
    });
  }

  ngOnInit() {
    // let id = this.route.snapshot.paramMap.get('id'); // From URL
    let id = this.route.snapshot.paramMap.get('id') as string;
    if (!id) {
      console.error('No ID found in route');
      return;
    }
    console.log(id);

    this.bookserive.getRecipeById(id).then((data) => {
      this.bookForm.patchValue(data);
      console.log(data);

      // this.movieForm.setValue vs this.movieForm.patchValue
      // this.bookForm.patchValue({
      //   ...data,
      // ingredients: data.ingredients.join(', '),
      // procedure: data.procedure.join(', '),
      // });
    });
  }
  editbook() {
    // let id = this.route.snapshot.paramMap.get('id') as string;
    if (this.bookForm.valid) {
      let updatedbook: Book = this.bookForm.value;

      this.bookserive.editbook(updatedbook).then(() => {
        this.router.navigate(['/search']);
      });
    }
  }
  get title() {
    return this.bookForm.get('title');
  }
  get image() {
    return this.bookForm.get('image');
  }
  get rating() {
    return this.bookForm.get('rating');
  }
}
