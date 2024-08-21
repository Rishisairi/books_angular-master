import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './app.component';
import { NewBook } from './book';
//const API = 'https://669a42869ba098ed61fef725.mockapi.io';
const API = 'http://localhost:4000';
@Injectable({
  providedIn: 'root',
})
export class BooksService {
  getBooks(): Promise<Book[]> {
    return fetch(`${API}/user/books`).then((res) => res.json());
  }
  // delete_the_book(book_to_be_deleted: Book) {
  //   return fetch(
  //     `https://669a42869ba098ed61fef725.mockapi.io/books/${book_to_be_deleted.bookId}`,
  //     {
  //       method: 'DELETE',
  //     }

  //   ).then((res) => res.json());
  // }

  delete_the_book(book_to_be_deleted: Book) {
    return fetch(`${API}/books/${book_to_be_deleted.bookId}`, {
      method: 'DELETE',
    }).then((res) => {
      if (!res.ok) {
        throw new Error('Failed to delete the book');
      }
      return res.json();
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
  constructor(private http: HttpClient) {}

  searchUser(searchTerm: string) {
    return this.http.get(`${API}/books?search=${searchTerm}`);
  }
  //constructor() {}
}

// import { Injectable } from '@angular/core';
// import { Book } from './app.component';
// import { NewBook } from './book';

// @Injectable({
//   providedIn: 'root',
// })
// export class BooksService {
//   private apiUrl = 'https://669a42869ba098ed61fef725.mockapi.io/books';

//   getBooks(): Promise<Book[]> {
//     return fetch(this.apiUrl).then((res) => {
//       if (!res.ok) {
//         throw new Error('Failed to fetch books');
//       }
//       return res.json();
//     });
//   }

//   delete_the_book(book_to_be_deleted: Book): Promise<void> {
//     return fetch(`${this.apiUrl}/${book_to_be_deleted.bookId}`, {
//       method: 'DELETE',
//     }).then((res) => {
//       if (!res.ok) {
//         throw new Error('Failed to delete the book');
//       }
//     });
//   }

//   addbook(bookadd: NewBook): Promise<Book> {
//     return fetch(this.apiUrl, {
//       method: 'POST',
//       body: JSON.stringify(bookadd),
//       headers: {
//         'Content-type': 'application/json',
//       },
//     }).then((res) => {
//       if (!res.ok) {
//         throw new Error('Failed to add the book');
//       }
//       return res.json();
//     });
//   }

//   getRecipeById(id: string): Promise<Book> {
//     return fetch(`${this.apiUrl}/${id}`).then((res) => {
//       if (!res.ok) {
//         throw new Error('Failed to fetch the book');
//       }
//       return res.json();
//     });
//   }

//   editbook(updatedbook: Book): Promise<Book> {
//     return fetch(`${this.apiUrl}/${updatedbook.bookId}`, {
//       method: 'PUT',
//       body: JSON.stringify(updatedbook),
//       headers: {
//         'Content-type': 'application/json',
//       },
//     }).then((res) => {
//       if (!res.ok) {
//         throw new Error('Failed to edit the book');
//       }
//       return res.json();
//     });
//   }

//   constructor() {}
// }
