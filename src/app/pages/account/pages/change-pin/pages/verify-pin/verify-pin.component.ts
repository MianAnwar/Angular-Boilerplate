import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CONFIG } from 'src/app/core/config/config';
import { getItem, StorageItem } from 'src/app/core/utils';
import { ROUTER_UTILS } from 'src/app/core/utils/router.utils';
import { AccountService } from 'src/app/pages/account/services/account.service';
import { UserService } from 'src/app/pages/auth/services/user-service/user.service';
import { ChangePinForm } from '../../form/change-pin-form';

@Component({
  selector: 'app-verify-pin',
  templateUrl: './verify-pin.component.html',
  styleUrls: ['./verify-pin.component.css'],
})
export class VerifyPinComponent implements OnInit {
  submitted = false;

  pinLength = CONFIG.pinLength;

  constructor(
    private router: Router,
    public form: ChangePinForm,
    private accountService: AccountService,
    private uObj: UserService,
  ) { }

  ngOnInit(): void {
    console.log(this.form);
  }

  back() {
    this.form.clear();
    this.form.reset();
    this.router.navigate([ROUTER_UTILS.account.root]);
  }

  pinInputEvent(pin: string) {
    //todo
    this.form.setPin(pin);
  }

  next() {
    this.submitted = true;
    console.log(this.form);
    let payload = {
      phoneNumber: this.uObj.phone ? this.uObj.phone : getItem(StorageItem.MSISDN),
      mpin: this.form.getPin().value,
    };

    console.log(payload);
    this.accountService.verifyPin(payload).subscribe({
      next: (res) => {
        this.submitted = false;
        let verified = res.results?.data?.Verified;
        console.log(verified);
        if (verified) {
          this.form.setMpin(this.form.getPin().value);
          this.form.addMatchValidation();
          const { root, update } = ROUTER_UTILS.account.changePin;
          this.router.navigate([ROUTER_UTILS.account.root, root, update], {
            skipLocationChange: true,
          });
        } else {
          // this.toastService.dangerToast(res.results?.message as string);
        }
      },
      error: (err) => {
        this.submitted = false;
        console.log(err);
        // this.toastService.showSeviceError();
      },
    });
  }
}
