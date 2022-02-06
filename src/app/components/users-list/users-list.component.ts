import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/users/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.sass'],
})
export class UsersListComponent implements OnInit {
  users: User[] = [];
  constructor(private _userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers() {
    this._userService.getUsersList().subscribe((data) => {
      this.users = data;
    });
  }

  deleteUser(id: number) {
    console.log('Click en eliminar Usuario' + id);
    this._userService.deleteUser(id).subscribe({
      complete: () => {
        console.log('User deleted');
        this.getUsers();
      },
      error: () => console.error(),
    });
  }
}
