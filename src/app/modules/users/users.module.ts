import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';

import {UsersComponent} from './users.component';
import {UsersListComponent} from './components/users-list/users-list.component';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {SharedModule} from '../../shared/shared.module';
import {MatButtonModule} from '@angular/material';

@NgModule({
  declarations: [
    UsersComponent,
    UsersListComponent,
    UserDetailsComponent
  ],
  imports: [
    HttpClientModule,
    MatCardModule,
    MatPaginatorModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: UsersComponent,
        children: [
          {
            path: '',
            component: UsersListComponent,
          },
          {
            path: 'user-details/:id',
            component: UserDetailsComponent,
          }
        ]
      }
    ]),
    MatButtonModule
  ]
})
export class UsersModule {
}
