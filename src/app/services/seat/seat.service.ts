import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../../../utils/api';

@Injectable({
  providedIn: 'root',
})
export class SeatService {
  constructor(private http: HttpClient) {}

  fetchSeats(theaterId: number) {
    return this.http.get(`${BASE_URL}/seat/get/seat-by-theater/${theaterId}`);
  }
}
