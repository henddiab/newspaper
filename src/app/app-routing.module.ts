import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './Core/not-found/not-found.component';
import { ArticleDetailComponent } from './Features/Article/article-detail/article-detail.component';
import { ArticleListComponent } from './Features/Article/article-list/article-list.component';
import { HeadlineDetailComponent } from './Features/Article/headlines/headline-detail/headline-detail.component';
import { HeadlinesComponent } from './Features/Article/headlines/headlines.component';

const routes: Routes = [
  { path: "", component: ArticleListComponent },
  { path: "article-detail/:title", component: ArticleDetailComponent },
  { path: "headline-detail/:title", component: HeadlineDetailComponent },
  { path: "headlines", component: HeadlinesComponent },
  { path: "error", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }