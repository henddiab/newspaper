import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ArticleServiceService } from './../../../Services/article-service.service'

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  singleItemTitle;
  singleItemData;


  constructor(private route: ActivatedRoute, private router: Router, private articleServiceService: ArticleServiceService) {

    this.route.params.subscribe((param: Params) => {
      // get title from URL
      this.singleItemTitle = param["title"];
    })

    this.articleServiceService.getAll().subscribe(data => {
      // get single article data based on selected title
      this.singleItemData = data['articles'].find(article => article.title === this.singleItemTitle);
    },
      error => {
        this.router.navigate(["/error"])
      }
    )
  }

  ngOnInit(): void {
  }

}
