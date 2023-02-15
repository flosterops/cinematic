import { Component, Input, OnInit } from '@angular/core';
import { MovieService } from '../services/movie/movie.service';
import { MatDialog } from '@angular/material/dialog';
import { RatingDialogComponent } from '../rating-dialog/rating-dialog.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  @Input() movie: any = {} as any;
  rating: number = 0;

  constructor(private movieService: MovieService, private dialog: MatDialog) {}

  ngOnInit() {
    this.movieService.getRating(this.movie.id).subscribe((res: any) => {
      if (!res.done) {
        return;
      }

      const rating = res.ratings.reduce((acc: number, item: any) => {
        return acc + item.stars;
      }, 0);

      this.rating = rating / res.ratings.length;
    });
  }

  openReviewDialog() {
    this.dialog.open(RatingDialogComponent, {
      width: '400px',
      height: '500px',
      data: {
        movieId: this.movie.id,
      },
    });
  }
}
