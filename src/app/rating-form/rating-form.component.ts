import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CustomerService } from '../services/customer/customer.service';

@Component({
  selector: 'app-rating-form',
  templateUrl: './rating-form.component.html',
  styleUrls: ['./rating-form.component.scss'],
})
export class RatingFormComponent {
  @Input() movieId: number = 0;
  @Output() addReview = new EventEmitter();

  form = new FormGroup({
    stars: new FormControl(),
    review: new FormControl(''),
  });

  constructor(private customerService: CustomerService) {}

  onSubmit() {
    const stars = Number(this.form.controls.stars.value) as number;
    const review = this.form.controls.review.value as string;

    this.customerService
      .addReviewToMovie(this.movieId, { stars, review })
      .subscribe((res: any) => {
        if (!res.done) {
          return;
        }

        this.addReview.emit();
      });
  }
}
