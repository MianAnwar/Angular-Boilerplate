import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/core/models/user';
import { environment } from 'src/environments/environment';
import { Payload } from '../../models/payloads';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  data?: User;

  phone?: string;

  trn?: string;

  firstName?: string;

  lastName?: string;

  dob?: Date;

  pin?: string;

  secretQuestion?: number;

  secretAnswer?: string;

  userID?: string;

  alreadyExists = false;

  otpHash?: string;

  accountStatus?: string;

  dailyTransferLimit?: string;

  huaweiStatusCode?: string;

  huaweiPinStatus?: string;

  internationalRemittance?: boolean;

  upgradeToMax?: string;

  wallet?: string;

  walletLimit?: string;

  baseUrl = `${environment.BASE_URL}users/v1/`;

  baseUrlOnboarding = `${environment.BASE_URL}Onboarding/v1/`;

  webAuthBaseUrl = `${this.baseUrl}web/`;

  constructor(private httpClient: HttpClient) { }

  signOut() {
    return this.httpClient.get<Payload>(`${this.baseUrl}signout`);
  }

  verifyMobile(payload: Object) {
    return this.httpClient.post<Payload>(`${this.baseUrl}auth`, payload);
  }

  confirmOTP(payload: Object) {
    return this.httpClient.post<Payload>(`${this.baseUrl}verifyotp`, payload);
  }

  resendOTP(payload: Object) {
    return this.httpClient.post<Payload>(`${this.webAuthBaseUrl}resendotp`, payload);
  }

  signIn(payload: Object) {
    return this.httpClient.post<Payload>(`${this.webAuthBaseUrl}signin`, payload);
  }

  editProfile(payload: Object) {
    return this.httpClient.put<Payload>(`${this.baseUrlOnboarding}editProfile`, payload);
  }

  setMPIN(payload: Object) {
    return this.httpClient.post<Payload>(`${this.baseUrlOnboarding}setmpin`, payload);
  }

  resetMPIN(payload: Object) {
    return this.httpClient.post<Payload>(`${this.baseUrl}forget-mpin`, payload);
  }

  verifyTRN(payload: Object) {
    return this.httpClient.post<Payload>(`${this.baseUrl}verify-forget-mpin`, payload);
  }

  registerTRN(payload: Object) {
    return this.httpClient.post<Payload>(`${this.baseUrl}registertrn`, payload);
  }

  verifyPIN(payload: Object) {
    return this.httpClient.post<Payload>(`${this.baseUrl}resetmpin`, payload);
  }

  genOTP(payload: Object) {
    return this.httpClient.post<HttpResponse<Payload>>(
      `${this.webAuthBaseUrl}generateotp`,
      payload,
      {
        observe: 'response',
      },
    );
  }

  verifyOTP(payload: Object, hash: string) {
    let headers = new HttpHeaders({
      otp: hash,
    });
    let options = { headers: headers };
    return this.httpClient.post<Payload>(`${this.webAuthBaseUrl}verifyotp`, payload, options);
  }
}
