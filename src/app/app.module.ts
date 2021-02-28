import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {UsersModule} from './modules/users/users.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const routes: Routes = [
  {
    path: '', component: AppComponent
  },
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    UsersModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
