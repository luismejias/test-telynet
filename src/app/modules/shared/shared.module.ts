import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';

const importsExports = [
  MaterialModule,
  FormsModule,
  ReactiveFormsModule,
  MatSnackBarModule
];

@NgModule({
  declarations: [],
  imports: [CommonModule, importsExports],
	exports: [importsExports]
})
export class SharedModule { }
