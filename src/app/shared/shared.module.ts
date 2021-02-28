import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatToolbarModule
} from '@angular/material';

import {HeaderComponent} from './components/header/header.component';
import {AutoCompleteComponent} from './components/auto-complete/auto-complete.component';

@NgModule({
  declarations: [
    HeaderComponent,
    AutoCompleteComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule,
  ],
  exports: [
    CommonModule,
    HeaderComponent,
    AutoCompleteComponent
  ]
})
export class SharedModule {
}
