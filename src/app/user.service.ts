import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const API = 'http://localhost:4000';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  searchUser(searchTerm: string) {
    return this.http.get(`${API}/books?search=${searchTerm}`);
  }
}
