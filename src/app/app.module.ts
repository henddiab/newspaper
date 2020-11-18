import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './Core/not-found/not-found.component';
import { ArticleListComponent } from './Features/Article/article-list/article-list.component';
import { ArticleDetailComponent } from './Features/Article/article-detail/article-detail.component';
import { NavbarComponent } from './Core/navbar/navbar.component';
import { ArticleViewComponent } from './Features/Article/article-view/article-view.component';
import { NgxSmartModalModule, NgxSmartModalService } from 'ngx-smart-modal';
import { HttpClientModule } from '@angular/common/http';
import { HeadlinesComponent } from './Features/Article/headlines/headlines.component';
import { HeadlineDetailComponent } from './Features/Article/headlines/headline-detail/headline-detail.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './Pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    ArticleListComponent,
    ArticleDetailComponent,
    NavbarComponent,
    ArticleViewComponent,
    HeadlinesComponent,
    HeadlineDetailComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSmartModalModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [NgxSmartModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
