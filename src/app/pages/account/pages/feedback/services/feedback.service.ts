import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Payload } from 'src/app/pages/auth/models/payloads';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  baseUrl = `${environment.BASE_URL}feedback/v1/`;

  constructor(private httpClient: HttpClient) { }

  getfeedbackCategories() {
    return this.httpClient.get<Payload>(`${this.baseUrl}categories`);
  }

  postFeedback(
    rating: string,
    about: string,
    message: string,
    attachments: string,
    userID: string,
  ) {
    debugger
    var formData = new FormData();
    formData.append('attachments', attachments);
    formData.append('rating', rating);
    formData.append('about', about);
    formData.append('userID', userID);
    formData.append('message', message);

    return this.httpClient.post<Payload>(`${this.baseUrl}feedback`, formData);
  }
}
