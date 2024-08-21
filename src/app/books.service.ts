import { Injectable } from '@angular/core';

import { Book } from './app.component';
import { NewBook } from './book';
const API = 'https://669a42939ba098ed61fef782.mockapi.io';

//const API = 'http://localhost:4000';
@Injectable({
  providedIn: 'root',
})
export class BooksService {
  getBooks(): Promise<Book[]> {
    return fetch(`${API}/books`).then((res) => res.json());
    // return fetch(`${API}/user/books`).then((res) => res.json());
  }

  // delete_the_book(book_to_be_deleted: Book) {
  //   return fetch(`${API}/books/${book_to_be_deleted.bookId}`, {
  //     method: 'DELETE',
  //   }).then((res) => {
  //     if (!res.ok) {
  //       throw new Error('Failed to delete the book');
  //     }
  //     return res.json();
  //   });
  // }

  delete_the_book(book_to_be_deleted: Book) {
    const bookId = book_to_be_deleted.bookId;
    console.log(`Attempting to delete book with ID: ${bookId}`);

    return fetch(`${API}/books/${bookId}`, {
      method: 'DELETE',
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to delete the book: ${res.statusText}`);
        }
      })
      .catch((error) => {
        console.error('Error during delete operation:', error);
        throw error;
      });
  }

  addbook(bookadd: NewBook) {
    // this.movieList.push(newMovie);

    // Post
    // 1. method
    // 2. body - Data & JSON
    // 3. Header - JSON

    return fetch(`${API}/books`, {
      method: 'POST',
      body: JSON.stringify(bookadd),
      headers: {
        'Content-type': 'application/json',
      },
    }).then((res) => res.json());
  }
  getRecipeById(id: string) {
    // return fetch(`${API}/admin/books/${id}`).then((res) => res.json());
    return fetch(`${API}/books/${id}`).then((res) => res.json());
  }

  editbook(updatedbook: Book): Promise<Book> {
    console.log(updatedbook);

    return fetch(`${API}/books/${updatedbook.bookId}`, {
      method: 'PUT',
      body: JSON.stringify(updatedbook),
      headers: {
        'Content-type': 'application/json',
      },
    }).then((res) => res.json());
  }

  constructor() {}
}
