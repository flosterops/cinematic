import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL, getAuthHeaders } from '../../../utils/api';

@Injectable({
  providedIn: 'root',
})
export class ShowService {
  constructor(private http: HttpClient) {}

  fetchShows() {
    return this.http.get(`${BASE_URL}/show`, { headers: getAuthHeaders() });
  }

  getShow(id: string) {
    return this.http.get(`${BASE_URL}/show/get/${id}`, {
      headers: getAuthHeaders(),
    });
  }
}
