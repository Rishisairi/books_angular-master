import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//const API = 'http://localhost:4000';
const API = 'https://669a42939ba098ed61fef782.mockapi.io';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  searchUser(searchTerm: string) {
    //return this.http.get(`${API}/user/books?search=${searchTerm}`);
    return this.http.get(`${API}/books?search=${searchTerm}`);
  }
}
