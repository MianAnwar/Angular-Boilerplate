import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/pages/auth/services/auth/auth.service';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // add authorization header with jwt token if available
    let currentUser = this.authenticationService.isLoggedIn;
    if (currentUser) {
      request = request.clone({
        setHeaders: {
          // Authorization: `Bearer ${currentUser.token}`
          Authorization: `Bearer ${currentUser}`
        }
      });
    }

    return next.handle(request);
  }
}