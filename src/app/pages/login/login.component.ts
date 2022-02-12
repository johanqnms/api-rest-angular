import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/users/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  user: User = new User();
  constructor(private _auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log('Click on Login Form' + JSON.stringify(this.user));
    this._auth.login(this.user).subscribe((data) => {
      console.log('Login Service');
      data ? this.redirect() : null;
    });
  }

  redirect() {
    this.router.navigate(['/']);
  }
}
