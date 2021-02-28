import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

import {User} from '../../../shared/models/user';
import {UsersService} from './users.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolverService implements Resolve<User> {

  constructor(private usersService: UsersService,
              private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> | Promise<User> | User {
    const userId = route.paramMap.get('id');

    if (!isNaN(+userId)) {
      return this.usersService.getUserDetails(+userId);
    } else {
      this.router.navigate(['/']).then();
    }
  }
}
