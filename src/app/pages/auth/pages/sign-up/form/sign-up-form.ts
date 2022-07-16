import { Injectable } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

const PIN_LENGTH = 4;
const TRN_PATTERN = '^[0-9]{3}-[0-9]{3}-[0-9]{3}$';

const form = {
  firstName: new FormControl(''),
  lastName: new FormControl(''),
  dob: new FormControl(''),
  trn: new FormControl(
    '',
    Validators.compose([
      Validators.required,
      Validators.pattern(TRN_PATTERN),
      Validators.minLength(11),
      Validators.maxLength(11),
    ]),
  ),
  pin: new FormControl(''),
  Pin: new FormControl(''),
  secretQuestion: new FormControl(''),
  secretAnswer: new FormControl(''),
};

@Injectable()
export class SignUpForm extends FormGroup {
  constructor() {
    super(form);
  }

  clear() {
    this.removeBasicInfoValidation();
    this.removePinvalidation();
    this.controls['trn'].setValue(' ');
  }

  getFname() {
    return this.controls['firstName'];
  }

  getLname() {
    return this.controls['lastName'];
  }

  getDob() {
    return this.controls['dob'];
  }

  getPin() {
    return this.controls['pin'];
  }

  _getPin() {
    return this.controls['Pin'];
  }

  getSecretQuestion() {
    return this.controls['secretQuestion'];
  }

  getSecretAnswer() {
    return this.controls['secretAnswer'];
  }

  getTrn() {
    return this.controls['trn'];
  }

  setFname(value: string) {
    this.controls['firstName'].setValue(value);
  }

  setLname(value: string) {
    this.controls['lastName'].setValue(value);
  }

  setDob(value: string) {
    this.controls['dob'].setValue(value);
  }

  setPin(value: string) {
    this.controls['pin'].setValue(value);
  }

  _setPin(value: string) {
    this.controls['Pin'].setValue(value);
  }

  setSecretQuestion(value: string) {
    this.controls['secretQuestion'].setValue(value);
  }

  setSecretAnswer(value: string) {
    this.controls['secretAnswer'].setValue(value);
  }

  setTrn(value: string) {
    this.controls['trn'].setValue(value);
  }

  resetForm() {
    this.reset();
  }

  addBasicInfoValidation() {
    this.controls['firstName'].setValidators(Validators.compose([Validators.required]));
    this.controls['lastName'].setValidators(Validators.compose([Validators.required]));
    this.controls['dob'].setValidators(Validators.compose([Validators.required]));
    this.addValidators(this.validateDate);
    this.updateValueAndValidity();
  }

  removeBasicInfoValidation() {
    this.controls['firstName'].clearValidators();
    this.controls['firstName'].reset();
    this.controls['lastName'].clearValidators();
    this.controls['lastName'].reset();
    this.controls['dob'].clearValidators();
    this.controls['dob'].reset();
    this.removeValidators(this.validateDate);
    this.updateValueAndValidity();
  }

  addPinvalidation() {
    this.controls['pin'].setValidators(
      Validators.compose([
        Validators.required,
        Validators.minLength(PIN_LENGTH),
        Validators.maxLength(PIN_LENGTH),
      ]),
    );
    this.controls['Pin'].setValidators(
      Validators.compose([
        Validators.required,
        Validators.minLength(PIN_LENGTH),
        Validators.maxLength(PIN_LENGTH),
      ]),
    );
    this.controls['secretQuestion'].setValidators(Validators.compose([Validators.required]));
    this.controls['secretAnswer'].setValidators(Validators.compose([Validators.required]));

    this.addValidators(this.matchPin);
    this.updateValueAndValidity();
  }

  removeTrnvalidation() {
    this.controls['trn'].clearValidators();
    this.controls['trn'].reset();

    this.updateValueAndValidity();
  }

  removePinvalidation() {
    this.controls['pin'].clearValidators();
    this.controls['pin'].reset();
    this.controls['Pin'].clearValidators();
    this.controls['Pin'].reset();
    this.controls['secretQuestion'].clearValidators();
    //this.controls["secretQuestion"].reset();
    this.controls['secretAnswer'].clearValidators();
    this.controls['secretAnswer'].reset();

    this.removeValidators(this.matchPin);
    this.updateValueAndValidity();
  }

  matchPin(control: AbstractControl): ValidationErrors | null {
    let pin = control.get('pin')!.value;
    let Pin = control.get('Pin')!.value;

    if (pin != '' && Pin != '') {
      if (pin != Pin) {
        return { noMatch: true };
      }
      return null;
    } else {
      return { noMatch: true };
    }
  }

  validateDate(control: AbstractControl): ValidationErrors | null {
    let date = new Date(control.get('dob')!.value);
    let today = new Date();
    var differenceInYears = Math.floor((date.getTime() - today.getTime()) / 31536000000 + 1);

    // uncomment to enable 18 year check
    if (differenceInYears <= -18) {
      return null;
    } else {
      return { ageRestriction: true };
    }
  }
}
