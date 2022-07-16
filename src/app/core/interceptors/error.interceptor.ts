import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from 'src/app/pages/auth/services/auth/auth.service';
import { ROUTER_UTILS } from '../utils/router.utils';
import { Router } from '@angular/router';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  INVALID_TOKEN_CODE = '900901';
  constructor(
    private router: Router,
    private authService: AuthService,
    //  private ts: ToastrService
  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if ([401, 403].includes(error.status)) {
          this.authService.signOut();
          if (error.error.code == this.INVALID_TOKEN_CODE) {
            // this.authService.refreshToken().subscribe((res) => {
            //   console.log(res);
            // });
          }
          const { root } = ROUTER_UTILS.auth;
          this.router.navigate(['/', root]);
          return throwError(() => new Error('unauthorized'));
        } else if (error.status === 500) {
          // this.toasterService.dangerToast('Cannot connect to server. try again shortly');
          return throwError(() => new Error('Internal Server Error'));
        } else if (error.status === 0) {
          // this.toasterService.dangerToast('Internet not available...');
          return throwError(() => error);
        } else {
          return throwError(() => error);
        }
      }),
    );
  }
}