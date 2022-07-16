import { ChangeDetectorRef, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicInfoModel } from 'src/app/pages/auth/models/basic-info-model';
import { Observable, Subscription } from 'rxjs';
import { IDeactivateComponent } from 'src/app/core/guards/deactivate.guard';
import { ROUTER_UTILS } from 'src/app/core/utils/router.utils';
import { AuthService } from 'src/app/pages/auth/services/auth/auth.service';
import { SignUpForm } from '../../form/sign-up-form';
import { UserService } from 'src/app/pages/auth/services/user-service/user.service';
import { InputTrnModel } from 'src/app/pages/auth/models/input-trn-model';
import { PinSettingModel } from 'src/app/pages/auth/models/pin-setting-model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit, OnDestroy, IDeactivateComponent {
  // @HostListener allows us to also guard against browser refresh, close, etc.
  @HostListener('window:beforeunload')
  canDeactivate(): Observable<boolean> | boolean {
    // insert logic to check if there are pending changes here;
    // returning true will navigate without confirmation
    // returning false will show a confirm dialog before navigating away
    return false;
  }

  private subscriptions?: Subscription[];

  stepperCount = 1;

  totalSteps = 3;

  stepperWidth?: string;

  trnSubmitted = false;

  pinSubmitted = false;

  backOption = true;

  constructor(
    private router: Router,
    private authService: AuthService,
    private form: SignUpForm,
    private uObj: UserService,
    private changeDetector: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {

    this.form.removeTrnvalidation();
    this.form.addPinvalidation();
    this.stepperCount = 3;
    this.backOption = false;

    this.setStepperWidth();
  }

  ngOnDestroy(): void {
    this.subscriptions?.forEach((sub) => {
      sub.unsubscribe();
    });
  }

  back() {
    // Clear Form Validation based on stepper count
    if (this.stepperCount === 2) {
      this.form.removeBasicInfoValidation();
    } else if (this.stepperCount === 3) {
      this.form.removePinvalidation();
    }

    this.stepperCount -= 1;
    this.setStepperWidth();
  }

  handleNextClickFromTRN(data: InputTrnModel) {
    this.uObj.trn = data.trn;

    this.form.addBasicInfoValidation();
    this.stepperCount += 1;
    this.setStepperWidth();
  }

  handleNextClickFromBasicInfoForm(data: BasicInfoModel) {
    this.uObj.firstName = data.firstName;
    this.uObj.lastName = data.lastName;
    this.uObj.dob = data.dob;
    this.trnSubmitted = true;

    // let payload = {
    //   firstName: data.firstName,
    //   lastName: data.lastName,
    //   dob: data.dob,
    //   userID: this.uObj.userID,
    // };

    let payload = {
      userID: this.uObj.userID,
      firstName: 'LUDLOW',
      lastName: 'JACKSON',
      trn: '104439017',
      dob: '1956-01-12',
    };

    this.registerTRN(payload);
  }

  handleNextClickFromPinSetting(data: PinSettingModel) {
    this.uObj.secretQuestion = data.secretQuestion;
    this.uObj.secretAnswer = data.secretAnswer;
    this.uObj.pin = data.pin;
    this.pinSubmitted = true;

    this.handleOnboardingCompletion(data);
  }

  setStepperWidth() {
    this.stepperWidth = ((this.stepperCount / this.totalSteps) * 100).toFixed(2) + '%';
  }

  handleOnboardingCompletion(data: PinSettingModel) {
    let payload = {
      pin: data.pin,
      confirmPin: data.pin,
      secretQuestion: data.secretQuestion,
      secretAnswer: data.secretAnswer,
      userID: this.uObj.userID,
    };
    this.setMPIN(payload);
  }

  setMPIN(payload: Object) {
    let sub = this.uObj.setMPIN(payload).subscribe({
      next: () => {
        this.authService.signIn(this.uObj.userID as string, this.uObj.phone as string);
        this.form.clear();
        this.goToDashboard();
        this.pinSubmitted = false;
        this.changeDetector.detectChanges();
      },
      error: (err) => {
        this.pinSubmitted = false;
        this.changeDetector.detectChanges();
        if (err.error.errors[0].message) {
          // this.toastService.dangerToast(err.error.errors[0].message);
        } else {
          // this.toastService.showSeviceError();
        }
      },
    });
    this.subscriptions?.push(sub);
  }

  registerTRN(payload: Object) {
    this.uObj.registerTRN(payload).subscribe({
      next: () => {
        this.trnSubmitted = false;
        this.changeDetector.detectChanges();
        this.form.addPinvalidation();
        this.stepperCount += 1;
        this.setStepperWidth();
      },
      error: (err) => {
        this.trnSubmitted = false;
        this.changeDetector.detectChanges();
        if (err.status === '409') {
          // this.toastService.standardToast(err.error.results.message);
          this.form.addPinvalidation();
          this.stepperCount += 1;
          this.setStepperWidth();
        } else {
          // this.modalService.openErrorMessageModal(err.error.errors[0].message);
        }
      },
    });
  }

  goToDashboard() {
    const { root } = ROUTER_UTILS.home;
    this.router.navigate(['/', root]);
  }
}
