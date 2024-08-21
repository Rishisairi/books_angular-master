import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AllbooksComponent } from './allbooks/allbooks.component';
import { CommonModule } from '@angular/common';

export interface Book {
  bookId: string;
  title: string;
  author: string;
  category: string;
  publicationDate: Date;
  status: 'Currently Reading' | 'Have Read' | 'Plan to Read';
  posterUrl: string;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, AllbooksComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
