import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UsersService} from '../../services/users.service';
import {User} from '../../../../shared/models/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  private userId: number;

  userDetails: User;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private usersService: UsersService) {
    this.route.paramMap.subscribe(param => this.userId = +param.get('id'));

  }

  ngOnInit() {
    this.usersService.getUserDetails(this.userId).subscribe(
      (result) => this.userDetails = result);
  }

  backToUsersList(): void {
    this.router.navigate(['']).then();
  }

}
