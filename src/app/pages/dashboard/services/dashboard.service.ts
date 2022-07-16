import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/core/models/user';
import { ServerReponseData, ServerReponseDataItems } from 'src/app/core/models/serverResponse';
import { QueryParams, getQueryParams } from 'src/app/core/models/queryParams';
import { DashboardData, PostShortcut, PostShortcutResponse } from '../models/widget';
import { Card } from '../models/card';

@Injectable()
export class DashboardService {
  baseUrl: string = `${environment.BASE_URL}dashboardapi/`;

  baseUrl2: string = `${environment.BASE_URL}payments/`;

  baseUrl3: string = `${environment.BASE_URL}p2p/`;

  constructor(private httpClient: HttpClient) { }

  getUser(userId: string): Observable<ServerReponseData<User>> {
    return this.httpClient
      .get<ServerReponseData<User>>(`${this.baseUrl}v1/dashboard/user`, {
        params: getQueryParams([new QueryParams('userID', userId)]),
      })
      .pipe(
        map((resp) => {
          return resp;
        }),
        catchError((err) => {
          return throwError(() => err);
        }),
      );
  }

  getWidgets(userId: string): Observable<DashboardData | undefined> {
    return this.httpClient
      .get<ServerReponseData<DashboardData>>(`${this.baseUrl}v1/dashboard/getCards`, {
        params: getQueryParams([new QueryParams('userId', userId)]),
      })
      .pipe(
        map((resp) => resp?.results?.data),
        catchError((err) => {
          return throwError(() => err);
        }),
      );
  }

  getGeneralCards(userId: string): Observable<Card[] | undefined> {
    return this.httpClient
      .get<ServerReponseDataItems<Card[]>>(`${this.baseUrl}v1/dashboard/getGeneralCards`, {
        params: getQueryParams([new QueryParams('userId', userId)]),
      })
      .pipe(
        map((resp) => resp?.results?.dataItems),
        catchError((err) => {
          return throwError(() => err);
        }),
      );
  }

  saveShortcuts(widget: PostShortcut): Observable<ServerReponseData<PostShortcutResponse>> {
    return this.httpClient
      .post<ServerReponseData<PostShortcutResponse>>(
        `${this.baseUrl}v1/dashboard/updateShortcuts`,
        widget,
      )
      .pipe(
        catchError((err) => {
          return throwError(() => err);
        }),
      );
  }
}
