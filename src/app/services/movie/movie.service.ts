import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL, getAuthHeaders } from '../../../utils/api';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  fetchMovies() {
    return this.http.get(`${BASE_URL}/movie`, { headers: getAuthHeaders() });
  }

  getMovie(id: number) {
    return this.http.get(`${BASE_URL}/movie/get/${id}`, {
      headers: getAuthHeaders(),
    });
  }

  getRating(id: number) {
    return this.http.get(`${BASE_URL}/rating/get-movie-rating/${id}`, {
      headers: getAuthHeaders(),
    });
  }
}
