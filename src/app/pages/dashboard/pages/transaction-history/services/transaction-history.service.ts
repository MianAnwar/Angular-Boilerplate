import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map } from 'rxjs/operators';
import { getQueryParams, QueryParams } from 'src/app/core/models/queryParams';
import { ServerReponseData } from 'src/app/core/models/serverResponse';
import { User } from 'src/app/core/models/user';
import { Payload } from 'src/app/pages/auth/models/payloads';
import { environment } from 'src/environments/environment';
import { TransHistoryViewModel } from '../models/transaction-history';

@Injectable({
  providedIn: 'root',
})
export class TransactionHistoryService {
  baseUrlTransactionHistory: string = `${environment.BASE_URL}transcationapi/v1/transactionHistory`;

  baseUrl = `${environment.BASE_URL}account/v1/`;

  baseUrlDashboard: string = `${environment.BASE_URL}dashboardapi/`;

  constructor(private httpClient: HttpClient) {}

  getCompleteTransactionsHistory(body: Object): Observable<TransHistoryViewModel> {
    return this.httpClient
      .post<ServerReponseData<TransHistoryViewModel>>(`${this.baseUrlTransactionHistory}`, body)
      .pipe(
        map((resp) => {
          return resp!.results!.data!;
        }),
        catchError((err) => {
          return throwError(() => err);
        }),
      );
  }

  getUser(userID: string): Observable<ServerReponseData<User>> {
    return this.httpClient
      .get<ServerReponseData<User>>(`${this.baseUrlDashboard}v1/dashboard/user`, {
        // params: getQueryParams([new QueryParams("userId", userId)]),
        params: getQueryParams([new QueryParams('userID', userID)]),
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

  getSettings(userID: string) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('userId', userID);
    return this.httpClient.get<Payload>(`${this.baseUrl}setting`, {
      params: queryParams,
    });
  }
}
