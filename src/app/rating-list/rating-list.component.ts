import { Component, Input, OnInit } from '@angular/core';
import { MovieService } from '../services/movie/movie.service';

@Component({
  selector: 'app-rating-list',
  templateUrl: './rating-list.component.html',
  styleUrls: ['./rating-list.component.scss'],
})
export class RatingListComponent implements OnInit {
  @Input() movieId: number = 0;
  ratings: any[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movieService.getRating(this.movieId).subscribe((res: any) => {
      this.ratings = !res.done ? [] : res.ratings;
    });
  }
}
