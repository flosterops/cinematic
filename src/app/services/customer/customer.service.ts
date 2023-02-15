import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL, getAuthHeaders } from '../../../utils/api';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  fetchTickets() {
    return this.http.get(`${BASE_URL}/ticket`, { headers: getAuthHeaders() });
  }
  purchaseTickets(showId: number, seatIds: number[]) {
    return this.http.post(
      `${BASE_URL}/ticket`,
      { showId, seatIds },
      { headers: getAuthHeaders() }
    );
  }

  returnTicket(ticketId: number) {
    return this.http.delete(`${BASE_URL}/ticket/return-ticket/${ticketId}`, {
      headers: getAuthHeaders(),
    });
  }

  addReviewToMovie(
    movieId: number,
    { stars, review }: { stars: number; review: string }
  ) {
    return this.http.post(
      `${BASE_URL}/rating/add-review/${movieId}`,
      { stars, review },
      { headers: getAuthHeaders() }
    );
  }
}
