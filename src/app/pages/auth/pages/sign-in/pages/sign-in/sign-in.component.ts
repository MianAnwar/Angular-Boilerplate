import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { CONFIG } from 'src/app/core/config/config';
import { ROUTER_UTILS } from 'src/app/core/utils/router.utils';
import { Data } from 'src/app/pages/auth/models/payloads';
import { AuthService } from 'src/app/pages/auth/services/auth/auth.service';
import { UserService } from 'src/app/pages/auth/services/user-service/user.service';
import { SignInForm } from '../../form/sign-in-form';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit, OnDestroy {
  // @HostListener allows us to also guard against browser refresh, close, etc.
  @HostListener('window:beforeunload')
  canDeactivate(): Observable<boolean> | boolean {
    // insert logic to check if there are pending changes here;
    // returning true will navigate without confirmation
    // returning false will show a confirm dialog before navigating away
    return false;
  }

  private subscriptions?: Subscription[];

  pinLength = CONFIG.pinLength;

  submitted = false;

  constructor(
    public form: SignInForm,
    private router: Router,
    private authService: AuthService,
    public uObj: UserService,
  ) { }

  ngOnDestroy(): void {
    this.subscriptions?.forEach((sub) => {
      sub.unsubscribe();
    });
  }

  ngOnInit(): void {
    this.setUp();
  }

  setUp() {
    this.form.getPin().reset();
  }

  pinInputEvent(pin: string) {
    this.form.setPin(pin);
  }

  submit() {
    if (this.form.valid) {
      this.submitted = true;
      let payload = {
        phoneNumber: this.uObj.phone,
        mpin: this.form.getPin().value,
        type: 'phoneNumber',
        userID: this.uObj.userID,
      };

      // this.authService.signIn();
      // this.goToDashboard();
      let sub = this.uObj.signIn(payload).subscribe({
        next: (res) => {
          let userData = res.results?.data as Data;
          if (userData.userID) {
            debugger;
            this.uObj.userID = userData.userID;
            this.uObj.phone = userData.phoneNumber;
            this.authService.signIn(this.uObj.userID as string, this.uObj.phone as string);
            this.goToDashboard();
          }
        },
        error: (err) => {
          this.submitted = false;
          if (err.error.errors[0].message) {
            // this.modalService.openErrorMessageModal(err.error.errors[0].message);
          } else {
            // this.modalService.openServiceErrorModal();
          }
        },
      });

      this.subscriptions?.push(sub);
    }
  }

  forgotPin() {
    const { root, resetPin } = ROUTER_UTILS.auth;
    this.router.navigate(['/', root, resetPin], {
      skipLocationChange: true,
    });
  }

  goToDashboard() {
    const { root } = ROUTER_UTILS.home;
    this.router.navigate(['/', root]);
  }
}
