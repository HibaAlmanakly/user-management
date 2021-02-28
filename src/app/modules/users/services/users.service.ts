import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

import {User} from '../../../shared/models/user';
import {PaginationResult} from '../../../shared/models/pagination-result';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private allUsersApi = 'https://reqres.in/api/users?page=';
  private userDetailsApi = 'https://reqres.in/api/users/';

  constructor(private http: HttpClient) {
  }

  /**
   * Get users list
   * @param pageNumber The page number
   */
  getUsersList(pageNumber: number): Observable<PaginationResult<User>> {
    return this.http.get<PaginationResult<User>>(`${this.allUsersApi}${pageNumber}`)
      .pipe(
        map((result) => result)
      );
  }

  /**
   * Get usr details
   * @param userId User Id
   */
  getUserDetails(userId: number): Observable<User> {
    return this.http.get<any>(`${this.userDetailsApi}${userId}`)
      .pipe(
        map((result) => result.data)
      );
  }
}
