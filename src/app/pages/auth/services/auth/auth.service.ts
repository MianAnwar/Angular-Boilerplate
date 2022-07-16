import { Injectable } from '@angular/core';
import { getItem, removeItem, setItem, StorageItem } from '../../../../core/utils';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Payload } from '../../models/payloads';
import { UserService } from '../user-service/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private httpClient: HttpClient,
    private uObj: UserService,
  ) { }

  isLoggedIn$ = new BehaviorSubject<boolean>(!!getItem(StorageItem.Auth));

  get isLoggedIn(): boolean {
    return this.isLoggedIn$.getValue();
  }

  signIn(userId: string, msisdn: string): void {
    const token = Array(4)
      .fill(0)
      .map(() => Math.random() * 99)
      .join('-');

    setItem(StorageItem.Auth, token);
    setItem(StorageItem.MSISDN, msisdn);
    setItem(StorageItem.UserID, userId);
    this.isLoggedIn$.next(true);
  }

  signOut(): void {
    //this.notificationService.unregisterToPushNotifications();
    removeItem(StorageItem.Auth);
    removeItem(StorageItem.UserID);
    removeItem(StorageItem.MSISDN);
    this.isLoggedIn$.next(false);
  }

  refreshToken() {
    let payload = {
      grant_type: 'client_credentials',
    };
    // let header = new HttpHeaders({
    //   Authorization:
    //     "Basic " +
    //     "UmREd2NRUmtHYTM0cnJzTWNHcE9OcEpJbE9NYTp3YzRqRGZBcUFZeXZWOXdoVkU0cTRGOFVmMFlh",
    // });

    // const requestOptions = { headers: header };
    return this.httpClient.post<Payload>('https://dev.mc.mycashfs.com:9443/oauth2/token', payload);
  }
}
