import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getItem, StorageItem } from 'src/app/core/utils';
import { environment } from 'src/environments/environment';
import { Payload } from '../../auth/models/payloads';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  baseUrl = `${environment.BASE_URL}account/v1/`;

  changePinBaseUrl = `${environment.BASE_URL}users/v1/`;

  constructor(private httpClient: HttpClient) {}

  getSettings() {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('userId', getItem(StorageItem.UserID));
    return this.httpClient.get<Payload>(`${this.baseUrl}setting`, {
      params: queryParams,
    });
  }

  updateInternationRemittance(payload: Object) {
    return this.httpClient.post<Payload>(`${this.baseUrl}internationalRemittance`, payload);
  }

  verifyPin(payload: Object) {
    return this.httpClient.post<Payload>(`${this.changePinBaseUrl}verifympin`, payload);
  }

  resetPin(payload: Object) {
    return this.httpClient.post<Payload>(`${this.changePinBaseUrl}resetmpin`, payload);
  }
}
