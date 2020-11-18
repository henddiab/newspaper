import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ArticleServiceService } from './../../../../Services/article-service.service'

@Component({
  selector: 'app-headline-detail',
  templateUrl: './headline-detail.component.html',
  styleUrls: ['./headline-detail.component.css']
})
export class HeadlineDetailComponent implements OnInit {
  singleItemTitle;
  singleItemData;

  constructor(private route: ActivatedRoute, private router: Router, private articleServiceService: ArticleServiceService) {

    this.route.params.subscribe((param: Params) => {
      // get title from URL
      this.singleItemTitle = param["title"];
    })

    this.articleServiceService.getHeadlines().subscribe(data => {
      // get single article data based on selected title
      this.singleItemData = data['articles'].find(article => article.title === this.singleItemTitle);
    },
      error => {
        this.router.navigate(["/error"])
      })
  }
  ngOnInit(): void {
  }

}
