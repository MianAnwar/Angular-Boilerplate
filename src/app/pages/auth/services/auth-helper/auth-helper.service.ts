import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CountryList } from '../../models/country-list-model';

@Injectable({
  providedIn: 'root',
})
export class AuthHelperService {
  baseUrl = `${environment.BASE_URL}onboardingapi/v1/`;

  constructor(private httpClient: HttpClient) { }

  getCountryList() {
    return this.httpClient.get<CountryList>(`${this.baseUrl}country`);
  }

  getSecretQuestion() {
    return this.httpClient.get<CountryList>(`${this.baseUrl}secretQuestion`);
  }
}
