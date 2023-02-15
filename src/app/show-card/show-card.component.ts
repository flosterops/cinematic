import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MovieService } from '../services/movie/movie.service';
import { MatDialog } from '@angular/material/dialog';
import { RatingDialogComponent } from '../rating-dialog/rating-dialog.component';

@Component({
  selector: 'app-show-card',
  templateUrl: './show-card.component.html',
  styleUrls: ['./show-card.component.scss'],
})
export class ShowCardComponent implements OnInit {
  @Input() show: any = {} as any;
  @Output() purchase = new EventEmitter<{
    theaterId: number;
    showId: number;
  }>();

  rating: number = 0;

  constructor(private movieService: MovieService, private dialog: MatDialog) {}

  ngOnInit() {
    this.movieService.getRating(this.show.Movie.id).subscribe((res: any) => {
      if (!res.done) {
        this.rating = 0;
      }

      const rating = res.ratings.reduce((acc: number, item: any) => {
        return acc + item.stars;
      }, 0);

      this.rating = rating / res.ratings.length;
    });
  }

  getFormattedDate() {
    const date = new Date(this.show.date);
    return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
  }

  getFormattedTime() {
    const date = new Date(this.show.date);
    return `${date.getHours()}:${date.getMinutes()}`;
  }
  onPurchase({ theaterId, showId }: { theaterId: number; showId: number }) {
    this.purchase.emit({ theaterId, showId });
  }

  openRatingDialog() {
    this.dialog.open(RatingDialogComponent, {
      width: '400px',
      height: '500px',
      data: {
        movieId: this.show.Movie.id,
      },
    });
  }
}
