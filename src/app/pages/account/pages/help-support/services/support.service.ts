import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Payload } from 'src/app/pages/auth/models/payloads';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class SupportService {
  baseUrl = `${environment.BASE_URL}product/v1/`;

  constructor(private httpClient: HttpClient) {}

  getFaq() {
    return this.httpClient.get<Payload>(`${this.baseUrl}faqByCategory`);
  }
}
