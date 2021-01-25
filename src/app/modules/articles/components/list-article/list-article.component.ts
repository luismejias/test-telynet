import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ArticlesService } from '../../service/articles.service';
import { Article } from '../../models/article';
import { finalize } from 'rxjs/operators';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditArticleComponent } from '../edit-article/edit-article.component';
import { RegisterArticleComponent } from '../register-article/register-article.component';
import { DeleteArticleComponent } from '../delete-article/delete-article.component';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.scss']
})
export class ListArticleComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['code', 'name', 'adress', 'population', 'postalCode', 'city', 'phone', 'email', 'edit', 'delete'];
  isLoadingResults: boolean = true;
  isRateLimitReached: boolean = false;
  resultsLength: number = 0;
  originalDataSource = new MatTableDataSource<Article>([]);
  dataSource = new MatTableDataSource<Article>([]);
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  subscription = new Subscription();
  searchForm: FormGroup;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    private articlesService: ArticlesService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
  ) {
    this.searchForm = this.fb.group({
      searchField: [''],
    });
  }

  ngOnInit(): void {
    this.getArticles();
    this.searchFieldChanges();
  }

  searchFieldChanges() {
    this.searchForm.get('searchField').valueChanges.subscribe((value) => {
      this.filterArticles(value);
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getArticles() {
    this.isLoadingResults = true;
    this.subscription.add(
      this.articlesService.getArticles().pipe(
        finalize(() => {
          this.isLoadingResults = false;
        }))
        .subscribe((res: Article[]) => {
          this.dataSource.data = res;
          this.originalDataSource.data = res;
          this.resultsLength = this.dataSource.data.length;
        })
    )
  }

  filterArticles(searching: string) {
    if (searching.length > 3) {
      this.dataSource.data = this.articlesService.filterArticles(searching);
    } else {
      this.dataSource.data = this.originalDataSource.data;
    }
  }

  addArticle() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.panelClass = 'custom-modalbox';

    const dialogRef = this.dialog.open(
      RegisterArticleComponent,
      dialogConfig,
    );

    dialogRef.afterClosed().subscribe((newArticle) => {
      if (newArticle?.dataForm) {
        this.articlesService.addArticle(newArticle.dataForm);
        this.getArticles();
      } else {
        this.openSnackBar('Ocurrio un error al editar', 'cerrar');
      }
    });
  }

  editArticle(dataArticle: Article) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.panelClass = 'custom-modalbox';
    dialogConfig.data = dataArticle || null;

    const dialogRef = this.dialog.open(
      EditArticleComponent,
      dialogConfig,
    );

    dialogRef.afterClosed().subscribe((dataArticle) => {
      if (dataArticle) {
        this.articlesService.editArticle(dataArticle.dataForm);
        this.getArticles();
      } else {
        this.openSnackBar('Ocurrio un error al editar', 'cerrar');
      }
    });
  }

  deleteArticle(dataArticle: Article) {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.disableClose = true;
		dialogConfig.autoFocus = true;
		dialogConfig.data = dataArticle

		const dialogRef = this.dialog.open(
			DeleteArticleComponent,
			dialogConfig
		);

		dialogRef.afterClosed().subscribe((dataOnDelete) => {
			if (dataOnDelete.ok) {
        this.articlesService.deleteArticle(dataArticle.code);
      this.openSnackBar('Articulo eliminado éxitosamente !!!', 'cerrar');
      this.getArticles();
      } else {
        this.openSnackBar('Ocurrio un error al intentar eliminar el articulo !!!', 'cerrar');
      }

		});
	}

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
