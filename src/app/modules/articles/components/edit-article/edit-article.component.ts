import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { makeArticle, Article } from '../../models/article';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss']
})
export class EditArticleComponent implements OnInit {
  editArticleForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditArticleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.editArticleForm = this.fb.group({
      code: [
        this.data.code,
        Validators.compose([
          Validators.maxLength(6),
          Validators.minLength(4),
          Validators.pattern('^[0-9]*$'),
          Validators.required,
        ]),
      ],
      name: [
        this.data.name,
        Validators.compose([
          Validators.maxLength(24),
          Validators.minLength(4),
          Validators.pattern(/^[0-9a-zA-Z.-\w\s\u00f1 \u00d1]*$/),
          Validators.required,
        ]),
      ],
      adress: [
        this.data.adress,
        Validators.compose([
          Validators.maxLength(100),
          Validators.minLength(4),
          Validators.pattern(/^[0-9a-zA-Z.-\w\s\u00f1 \u00d1]*$/),
          Validators.required,
        ]),
      ],
      population: [
        this.data.population,
        Validators.compose([
          Validators.maxLength(10),
          Validators.minLength(2),
          Validators.pattern('^[0-9]*$'),
          Validators.required,
        ]),
      ],
      postalCode: [
        this.data.postalCode,
        Validators.compose([
          Validators.maxLength(10),
          Validators.minLength(2),
          Validators.pattern(/^[0-9a-zA-Z.-\w\s\u00f1 \u00d1]*$/),
          Validators.required,
        ]),
      ],
      city: [
        this.data.city,
        Validators.compose([
          Validators.maxLength(10),
          Validators.minLength(2),
          Validators.pattern(/^[0-9a-zA-Z.-\w\s\u00f1 \u00d1]*$/),
          Validators.required,
        ]),
      ],
      phone: [
        this.data.phone,
        Validators.compose([
          Validators.maxLength(10),
          Validators.minLength(2),
          Validators.pattern('^[0-9]*$'),
          Validators.required,
        ]),
      ],
      email: [
        this.data.email,
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
		return this.editArticleForm.get('code');
  }
  get name() {
		return this.editArticleForm.get('name');
  }
  get adress() {
		return this.editArticleForm.get('adress');
  }
  get population() {
		return this.editArticleForm.get('population');
  }
  get postalCode() {
		return this.editArticleForm.get('postalCode');
  }
  get city() {
		return this.editArticleForm.get('city');
  }
  get phone() {
		return this.editArticleForm.get('phone');
  }
  get email() {
		return this.editArticleForm.get('email');
	}

  update() {
		const article: Article = makeArticle({
			code: this.editArticleForm.value.code,
      name:this.editArticleForm.value.name,
      adress: this.editArticleForm.value.adress,
      population: this.editArticleForm.value.population,
      postalCode: this.editArticleForm.value.postalCode,
      city: this.editArticleForm.value.city,
      phone: this.editArticleForm.value.phone,
      email: this.editArticleForm.value.email
    });
		this.dialogRef.close({
			dataForm: article
		});
	}

	close() {
		this.dialogRef.close();
	}

}
