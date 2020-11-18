import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import uid from 'uid';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { ArticleServiceService } from './../../../Services/article-service.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  public allData;
  public articleData;
  searchText = "";
  navLink;

  constructor(private ngxSmartModalService: NgxSmartModalService, private articleServiceService: ArticleServiceService, private router: Router) {
  }

  ngOnInit(): void {
    // get all articles data
    this.articleServiceService.getAll().subscribe(data => {
      this.allData = [];
      this.allData = data['articles'];
    },
      error => {
        this.router.navigate(["/error"])
      }
    );
  }

  /** openModal
   * open overlay to show brief details about the clicked atricle 
   */

  public openModal(item) {
    this.articleData = this.allData.find(article => article.title === item.innerText);
    // change navigation link of viewing details
    this.navLink = `/article-detail/${this.articleData.title}`;
    this.articleData ? this.ngxSmartModalService.getModal('detailsModal').open() : null;
  }

  public closeModal() {
    this.ngxSmartModalService.getModal('detailsModal').close();

  }

  selectSource(source) {
    console.log(source.value);
  }

  selectCountry(country) {
    console.log(country.value);
  }

}
