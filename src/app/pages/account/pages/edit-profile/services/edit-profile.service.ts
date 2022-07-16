import { UserProfile } from './../model/user-profile';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Payload } from 'src/app/pages/auth/models/payloads';
import { environment } from 'src/environments/environment.prod';

@Injectable()
export class EditProfileService {
  userProfile: UserProfile = new UserProfile();

  otpHash?: string;

  baseUrlProfile = `${environment.BASE_URL}Onboarding/v1/`;

  baseUrl = environment.BASE_URL;

  baseUrlCash = `${environment.BASE_URL}cash/v1/`;

  webAuthBaseUrl = `${this.baseUrl}web/`;

  constructor(private httpClient: HttpClient) { }

  postProfile(
    attachments: string,
    parish: string,
    town: string,
    address: string,
    sourceOfIncome: string,
    userID: string,

    firstName: string,
    lastName: string,
    dob: string,
  ) {
    var formData = new FormData();
    formData.append('image', attachments);
    formData.append('streetAddress[parish]', parish);
    formData.append('streetAddress[fullAddress]', address);
    formData.append('streetAddress[town]', town);
    formData.append('sourceOfIncome', sourceOfIncome);
    formData.append('userID', userID);

    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('dob', dob);

    return this.httpClient.post<Payload>(`${this.baseUrl}editProfile`, formData);
  }

  verifyOTP(payload: Object, hash: string) {
    let headers = new HttpHeaders({
      otp: hash,
    });
    let options = { headers: headers };
    return this.httpClient.post<Payload>(`${this.baseUrl}verifyemailotp`, payload, options);
  }

  resendOTP(payload: Object) {
    return this.httpClient.post<Payload>(`${this.webAuthBaseUrl}resendotp`, payload);
  }

  getParish() {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('parish', '');
    return this.httpClient.get<Payload>(`${this.baseUrlCash}agents-parish`, {
      params: queryParams,
    });
  }

  getTown(parish: string) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('parish', parish);
    queryParams = queryParams.append('town', '');
    return this.httpClient.get<Payload>(`${this.baseUrlCash}agents-town`, {
      params: queryParams,
    });
  }
}
