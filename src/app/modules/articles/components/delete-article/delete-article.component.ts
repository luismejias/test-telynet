import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-article',
  templateUrl: './delete-article.component.html',
  styleUrls: ['./delete-article.component.scss']
})
export class DeleteArticleComponent {
  constructor(
		private dialogRef: MatDialogRef<DeleteArticleComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
  ) {}

	close() {
		this.dialogRef.close({ ok: false });
	}

	delete() {
		this.dialogRef.close({ ok: true });
	}
}
