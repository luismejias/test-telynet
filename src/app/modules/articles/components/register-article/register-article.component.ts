import { Component, Inject, OnInit } from '@angular/core';
import { Article, makeArticle } from '../../models/article';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-register-article',
  templateUrl: './register-article.component.html',
  styleUrls: ['./register-article.component.scss']
})
export class RegisterArticleComponent implements OnInit {
  registerArticleForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<RegisterArticleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.registerArticleForm = this.fb.group({
      code: ['',
        Validators.compose([
          Validators.maxLength(6),
          Validators.minLength(4),
          Validators.pattern('^[0-9]*$'),
          Validators.required,
        ]),
      ],
      name: [
       '',
        Validators.compose([
          Validators.maxLength(24),
          Validators.minLength(4),
          Validators.pattern(/^[0-9a-zA-Z.-\w\s\u00f1 \u00d1]*$/),
          Validators.required,
        ]),
      ],
      adress: [
        '',
        Validators.compose([
          Validators.maxLength(100),
          Validators.minLength(4),
          Validators.pattern(/^[0-9a-zA-Z.-\w\s\u00f1 \u00d1]*$/),
          Validators.required,
        ]),
      ],
      population: [
        '',
        Validators.compose([
          Validators.maxLength(10),
          Validators.minLength(2),
          Validators.pattern('^[0-9]*$'),
          Validators.required,
        ]),
      ],
      postalCode: [
        '',
        Validators.compose([
          Validators.maxLength(10),
          Validators.minLength(2),
          Validators.pattern(/^[0-9a-zA-Z.-\w\s\u00f1 \u00d1]*$/),
          Validators.required,
        ]),
      ],
      city: [
        '',
        Validators.compose([
          Validators.maxLength(10),
          Validators.minLength(2),
          Validators.pattern(/^[0-9a-zA-Z.-\w\s\u00f1 \u00d1]*$/),
          Validators.required,
        ]),
      ],
      phone: [
        null,
        Validators.compose([
          Validators.maxLength(10),
          Validators.minLength(2),
          Validators.pattern('^[0-9]*$'),
          Validators.required,
        ]),
      ],
      email: [
        '',
        Validators.compose([
          Validators.maxLength(24),
          Validators.minLength(2),
          Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
          Validators.required,
        ]),
      ],
    });
  }

  ngOnInit(): void {
  }
  get code() {
    return this.registerArticleForm.get('code');
  }
  get name() {
    return this.registerArticleForm.get('name');
  }
  get adress() {
    return this.registerArticleForm.get('adress');
  }
  get population() {
    return this.registerArticleForm.get('population');
  }
  get postalCode() {
    return this.registerArticleForm.get('postalCode');
  }
  get city() {
    return this.registerArticleForm.get('city');
  }
  get phone() {
    return this.registerArticleForm.get('phone');
  }
  get email() {
    return this.registerArticleForm.get('email');
  }

  register() {
    const article: Article = makeArticle({
      code: this.registerArticleForm.value.code,
      name: this.registerArticleForm.value.name,
      adress: this.registerArticleForm.value.adress,
      population: this.registerArticleForm.value.population,
      postalCode: this.registerArticleForm.value.postalCode,
      city: this.registerArticleForm.value.city,
      phone: this.registerArticleForm.value.phone,
      email: this.registerArticleForm.value.email
    });
    this.dialogRef.close({
      dataForm: article
    });
  }

  close() {
    this.dialogRef.close();
  }


}
