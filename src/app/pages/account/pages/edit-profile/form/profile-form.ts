import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

const OTP_LENGTH = 6;

const form = {
  image: new FormControl(''),

  emailAddress: new FormControl(''),
  emailOTP: new FormControl(''),

  parish: new FormControl(''),
  town: new FormControl(''),
  fullAddress: new FormControl(''),

  sourceOfIncome: new FormControl(''),
};

@Injectable()
export class ProfileForm extends FormGroup {

  constructor() {
    super(form);
  }

  clear() {
    this.controls['image'].reset();
    this.controls['emailAddress'].reset();
    this.controls['emailOTP'].reset();
    this.controls['parish'].reset();
    this.controls['town'].reset();
    this.controls['fullAddress'].reset();
    this.controls['sourceOfIncome'].reset();
  }

  setImage(val: string) {
    this.controls['image'].setValue(val);
  }

  getImage() {
    return this.controls['image'];
  }

  setImageValidation() {
    this.controls['image'].setValidators(Validators.compose([Validators.required]));
    this.controls['image'].updateValueAndValidity();
  }

  removeImageValidation() {
    this.controls['image'].clearValidators();
    this.controls['image'].updateValueAndValidity();
  }

  setEmailAddress(val: string) {
    this.controls['emailAddress'].setValue(val);
  }

  getEmailAddress() {
    return this.controls['emailAddress'];
  }

  setEmailValidation() {
    this.controls['emailAddress'].setValidators(
      Validators.compose([Validators.required, Validators.email]),
    );
    this.addValidators(this.emailValidity);
    this.controls['emailAddress'].updateValueAndValidity();
  }

  emailValidity(control: AbstractControl): ValidationErrors | null {
    let email = control.get('emailAddress')!.value;
    const PHONE_REGEXP =
      /^([a-z0-9]+(?:[._-][a-z0-9]+)*)@([a-z0-9]+(?:[.-][a-z0-9]+)*\.[a-z]{2,})$/;

    if (email && email != '') {
      if (PHONE_REGEXP.test(email)) {
        return null;
      } else {
        return { invalid: true };
      }
    } else {
      return null;
    }
  }

  removeEmailValidation() {
    this.controls['emailAddress'].clearValidators();
    this.controls['emailAddress'].updateValueAndValidity();
  }

  getEmailOtp() {
    return this.controls['emailOTP'];
  }

  setEmailOtp(value: string) {
    this.controls['emailOTP'].setValue(value);
  }

  setEmailOtpValidation() {
    this.controls['emailOTP'].setValidators(
      Validators.compose([
        Validators.required,
        Validators.minLength(OTP_LENGTH),
        Validators.maxLength(OTP_LENGTH),
      ]),
    );
    this.controls['emailOTP'].updateValueAndValidity();
  }

  removeEmailOtpValidation() {
    this.controls['emailOTP'].reset();
    this.controls['emailOTP'].clearValidators();
    this.controls['emailOTP'].updateValueAndValidity();
  }

  getParish() {
    return this.controls['parish'];
  }

  setParish(value: string) {
    this.controls['parish'].setValue(value);
  }

  getTown() {
    return this.controls['town'];
  }

  setTown(value: string) {
    this.controls['town'].setValue(value);
  }

  getFullAddress() {
    return this.controls['fullAddress'];
  }

  setFullAddress(value: string) {
    this.controls['fullAddress'].setValue(value);
  }

  setAddressValidation() {
    this.controls['parish'].setValidators(Validators.compose([Validators.required]));
    this.controls['town'].setValidators(Validators.compose([Validators.required]));
    this.controls['fullAddress'].setValidators(Validators.compose([Validators.required]));
    this.updateValueAndValidity();
  }

  removeAddressValidation() {
    this.controls['parish'].reset();
    this.controls['parish'].clearValidators();

    this.controls['town'].reset();
    this.controls['town'].clearValidators();

    this.controls['fullAddress'].reset();
    this.controls['fullAddress'].clearValidators();

    this.updateValueAndValidity();
  }

  setSourceOfIncome(val: string) {
    this.controls['sourceOfIncome'].setValue(val);
  }

  getSourceOfIncome() {
    return this.controls['sourceOfIncome'];
  }

  setSourceOfIncomeValidation() {
    this.controls['sourceOfIncome'].setValidators(Validators.compose([Validators.required]));
    this.controls['sourceOfIncome'].updateValueAndValidity();
  }

  removeSourceOfIncomeValidation() {
    this.controls['sourceOfIncome'].reset();
    this.controls['sourceOfIncome'].clearValidators();
    this.controls['sourceOfIncome'].updateValueAndValidity();
  }

}
