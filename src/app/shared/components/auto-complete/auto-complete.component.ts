import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {User} from '../../models/user';
import {UsersService} from '../../../modules/users/services/users.service';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css']
})
export class AutoCompleteComponent implements OnInit {

  userSearchForm: FormGroup;

  searchResult: User | undefined;

  errorMessage: string;

  constructor(private fb: FormBuilder,
              private usersService: UsersService) {
  }

  ngOnInit() {
    this.userSearchForm = this.fb.group(
      {userSearch: ''}
    );
    this.userSearchForm.get('userSearch').valueChanges.subscribe((value) => {
        console.log(value);
        if (isNaN(value)) {
          this.errorMessage = 'Enter a number';
        } else if (!isNaN(value)) {
          this.errorMessage = '';
          this.FetchUser(value);
        } else {
          this.searchResult = null;
          this.errorMessage = '';
        }
      }
    );
  }

  FetchUser($event: number): void {
    this.usersService.getUserDetails($event).subscribe(
      (result) => this.searchResult = result,
      () => {
        this.searchResult = null;
        this.errorMessage = 'User not found';
      });
  }

}
