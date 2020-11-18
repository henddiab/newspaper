import { Component, OnInit } from '@angular/core';
import { ArticleServiceService } from './../../../Services/article-service.service'
import { NgxSmartModalService } from 'ngx-smart-modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.component.html',
  styleUrls: ['./headlines.component.css']
})
export class HeadlinesComponent implements OnInit {
  public headlinesData;
  public articleData;
  navLink;

  constructor(private ngxSmartModalService: NgxSmartModalService, private articleServiceService: ArticleServiceService, private router: Router) { }


  ngOnInit(): void {
    this.articleServiceService.getHeadlines().subscribe(data => {
      // get all headlines data
      this.headlinesData = [];
      this.headlinesData = data['articles'];
    },
      error => {
        this.router.navigate(["/error"])
      })
  }

  /** openModal
   * open overlay to show brief details about the clicked atricle 
   */
  public openModal(item) {
    this.articleData = this.headlinesData.find(article => article.title === item.innerText);
    // change navigation link of viewing details
    this.navLink = `/headline-detail/${this.articleData.title}`;
    this.articleData ? this.ngxSmartModalService.getModal('detailsModalHeadline').open() : null;
  }

  public closeModal() {
    this.ngxSmartModalService.getModal('detailsModalHeadline').close();
  }

}
