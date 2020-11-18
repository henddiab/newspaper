import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.css']
})
export class ArticleViewComponent implements OnInit, AfterViewInit {

  @Input() public articleData;

  // change navigation link of button view details
  @Input() public navigationLink;

  constructor() { }

  ngOnInit(): void {
    console.log(this.articleData);
  }

  ngAfterViewInit() {
  }
}
