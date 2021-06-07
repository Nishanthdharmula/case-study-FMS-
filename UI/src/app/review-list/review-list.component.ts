import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Review } from '../review';
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {

  
  reviews: Review[];

  constructor(private reviewService: ReviewService,  private router: Router) { }

  ngOnInit(): void {
    this.getreviews();
  }
  private getreviews() {
    this.reviewService.getReviewsList().subscribe(data => {
      this.reviews = data;
    });
  }
}
