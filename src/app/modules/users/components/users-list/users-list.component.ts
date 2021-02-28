import {Component, OnInit} from '@angular/core';
import {PageEvent} from '@angular/material/paginator';
import {Subscription} from 'rxjs';

import {UsersService} from '../../services/users.service';
import {User} from 'src/app/shared/models/user';
import {PaginationResult} from '../../../../shared/models/pagination-result';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  sub: Subscription = new Subscription();
  usersList: User[];
  paginationResult: PaginationResult<User>;
  pageSizeOptions = [5, 10, 25];

  constructor(private usersService: UsersService) {
  }

  ngOnInit() {
    this.usersService.getUsersList(1)
      .subscribe(
        (results) => {
          this.usersList = results.data;
          this.paginationResult = results;
        }
      );
  }

  goToPage(event?: PageEvent) {
    this.usersService.getUsersList(event.pageIndex + 1).subscribe(
      (results) => {
        this.usersList = results.data;
        this.paginationResult = results;
      }
    );
  }

}
