import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CONFIG } from 'src/app/core/config/config';
import { getItem, StorageItem } from 'src/app/core/utils';
import { ROUTER_UTILS } from 'src/app/core/utils/router.utils';
import { AccountService } from 'src/app/pages/account/services/account.service';
import { UserService } from 'src/app/pages/auth/services/user-service/user.service';
import { ChangePinForm } from '../../form/change-pin-form';

@Component({
  selector: 'app-update-pin',
  templateUrl: './update-pin.component.html',
  styleUrls: ['./update-pin.component.css'],
})
export class UpdatePinComponent {
  pinMatch = false;

  pinLength = CONFIG.pinLength;

  constructor(
    private router: Router,
    public form: ChangePinForm,
    private accountService: AccountService,
    private uObj: UserService,
  ) { }

  back() {
    this.form.removePinvalidation();
    //this.form.clear();
    const { root } = ROUTER_UTILS.account.changePin;
    this.router.navigate([ROUTER_UTILS.account.root, root]);
  }

  pinInputEvent(pin: string) {
    this.form.setPin(pin);
    try {
      this.pinMatch = this.form.errors!['noMatch'];
    } catch (error) {
      this.pinMatch = false;
    }
  }

  _pinInputEvent(pin: string) {
    this.form._setPin(pin);

    try {
      this.pinMatch = this.form.errors!['noMatch'];
    } catch (error) {
      this.pinMatch = false;
    }
  }

  update() {
    let payload = {
      phoneNumber: getItem(StorageItem.MSISDN),
      mpin: this.form.getMpin().value,
      newmpin: this.form._getPin().value,
    };

    this.accountService.resetPin(payload).subscribe({
      next: (res) => {
        console.log(res.results?.data?.Status);
        let updated = res.results?.data?.Status;
        if (updated) {
          this.form.reset();
          this.form.removePinvalidation();
          // this.toastService.successToast(res.results?.message as string);
          this.routeToDashboard();
        } else {
          // this.toastService.dangerToast(res.results?.message as string);
        }
        // if()/
      },
      error: (err) => {
        console.log(err.errors);
      },
    });
    // this.modalService.openSuccessModal(
    //   "Your pin has successfully been updated.",
    //   () => {
    //     this.form.removePinvalidation();
    //     const { root } = ROUTER_UTILS.home;
    //     this.router.navigate([root]);
    //   }
    // );
  }

  routeToDashboard() {
    const { root } = ROUTER_UTILS.home;
    this.router.navigate([root]);
  }
}
