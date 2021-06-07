import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Review } from '../review';
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  componentName="review"
  review: Review = new Review();

  constructor(private reviewService: ReviewService, private router: Router) { }

  ngOnInit(): void {
  }

  saveReview(){
    this.reviewService.createReview(this.review).subscribe( data => {
      console.log(data);
      this.gotoReviewDetails();
      
    },
    error => console.log(error));
  }

  gotoReviewDetails(){
    this.router.navigate(['./reviews'])
  }

  onSubmit(){
    console.log(this.review);
    this.saveReview();

    window.location.reload();
}

}
