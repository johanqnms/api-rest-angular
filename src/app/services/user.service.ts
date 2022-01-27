import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../users/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiURL = 'http://localhost:8080/api/v2/users';
  constructor(private http: HttpClient) {}

  getUsersList(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiURL}`);
  }

  createUser(user: User): Observable<Object> {
    return this.http.post(`${this.apiURL}`, user);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiURL}/${id}`);
  }

  updateUser(id: number, user: User): Observable<Object> {
    return this.http.put(`${this.apiURL}/${id}`, user);
  }
}
