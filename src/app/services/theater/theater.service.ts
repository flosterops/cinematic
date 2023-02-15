import { Injectable } from '@angular/core';
import { BASE_URL, getAuthHeaders } from '../../../utils/api';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TheaterService {
  constructor(private http: HttpClient) {}

  fetchTheaters() {
    return this.http.get(`${BASE_URL}/theater`, {
      headers: getAuthHeaders(),
    });
  }

  getTheater(id: string) {
    return this.http.get(`${BASE_URL}/theater/get/${id}`, {
      headers: getAuthHeaders(),
    });
  }
}
