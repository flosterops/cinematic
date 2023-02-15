import { Component, OnInit } from '@angular/core';
import { ShowService } from '../services/show/show.service';
import { MovieService } from '../services/movie/movie.service';
import { TheaterService } from '../services/theater/theater.service';
import { MatDialog } from '@angular/material/dialog';
import { PurchaseDialogComponent } from '../purchase-dialog/purchase-dialog.component';
import { TicketDialogComponent } from '../ticket-dialog/ticket-dialog.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  theaters: any[] = [];
  movies: any[] = [];
  shows: any = [];

  constructor(
    private theaterService: TheaterService,
    private movieService: MovieService,
    private showService: ShowService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.fetchTheaters();
    this.fetchMovies();
    this.fetchShows();
  }

  fetchMovies() {
    this.movieService.fetchMovies().subscribe((res: any) => {
      this.movies = !res.done ? [] : res.movies;
    });
  }

  fetchTheaters() {
    this.theaterService.fetchTheaters().subscribe((res: any) => {
      this.theaters = !res.done ? [] : res.theaters;
    });
  }

  fetchShows() {
    this.showService.fetchShows().subscribe((res: any) => {
      this.shows = !res.done ? [] : res.shows;
    });
  }

  openPurchaseDialog({
    theaterId,
    showId,
  }: {
    theaterId: number;
    showId: number;
  }) {
    this.dialog
      .open(PurchaseDialogComponent, {
        data: { theaterId, showId },
      })
      .afterClosed()
      .subscribe((res) => {});
  }

  openMyTicketDialog() {
    this.dialog
      .open(TicketDialogComponent, {
        width: '500px',
        height: 'auto',
      })
      .afterClosed()
      .subscribe((res) => {});
  }
}
