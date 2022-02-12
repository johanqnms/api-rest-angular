import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../users/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: User = new User();
  private apiURL = 'http://localhost:8080/api/v2/login';

  constructor(private http: HttpClient) {}

  login(user: User): Observable<Object> {
    return this.http.post(`${this.apiURL}`, user);
  }
}
