import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/users/user';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.sass'],
})
export class CreateUserComponent implements OnInit {
  user: User = new User();
  constructor(private _userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log('Click en Formulario Bootstrap');
    console.log(this.user);
    this.saveUser();
  }

  saveUser() {
    this._userService.createUser(this.user).subscribe({
      complete: () => {
        console.log('User Added Sucessfully');
        this.redirectToUsersList();
      },
      error: (error) => console.log(error),
    });
  }

  redirectToUsersList() {
    this.router.navigate(['/users-list']);
  }
}
