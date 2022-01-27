import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/users/user';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.sass'],
})
export class UpdateUserComponent implements OnInit {
  id!: number;
  user: User = new User();
  constructor(
    private _userService: UserService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params['id'];
    this._userService
      .getUserById(this.id)
      .subscribe((data) => (this.user = data));
  }

  onSubmit() {
    console.log('Click on update user');
    this._userService.updateUser(this.id, this.user).subscribe({
      complete: () => {
        console.info('User added Sucessfully');
        this.redirectTo();
      },
      error: (e) => console.error(e),
    });
  }

  redirectTo() {
    this.router.navigate(['/users-list']);
  }
}
