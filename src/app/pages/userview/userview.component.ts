import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/users/user';

@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.sass'],
})
export class UserviewComponent implements OnInit {
  user: User = new User();
  id!: number;

  constructor(
    private _userService: UserService,
    private param: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.param.snapshot.params['id'];
    this._userService
      .getUserById(this.id)
      .subscribe((data) => (this.user = data));
  }
}
