import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

const PIN_LENGTH = 4;
const form = {
  pin: new FormControl(
    '',
    Validators.compose([
      Validators.required,
      Validators.minLength(PIN_LENGTH),
      Validators.maxLength(PIN_LENGTH),
    ]),
  ),
  Pin: new FormControl(''),

  mpin: new FormControl(''),
};

@Injectable()
export class ChangePinForm extends FormGroup {
  constructor() {
    super(form);
  }

  removePinvalidation() {
    this.controls['Pin'].clearValidators();
    this.setPin('');
    this._setPin('');
    this.setErrors(null);
    this.removeValidators(this.matchPin);
    this.updateValueAndValidity();
  }

  setMpin(val: string) {
    this.controls['mpin'].setValue(val);
  }

  getMpin() {
    return this.controls['mpin'];
  }

  getPin() {
    return this.controls['pin'];
  }

  setPin(value: string) {
    this.controls['pin'].setValue(value);
  }

  _getPin() {
    return this.controls['Pin'];
  }

  clear() {
    this.controls['pin'].reset();
    this.controls['Pin'].reset();
  }

  _setPin(value: string) {
    this.controls['Pin'].setValue(value);
  }

  addMatchValidation() {
    this.controls['Pin'].setValidators(
      Validators.compose([
        Validators.required,
        Validators.minLength(PIN_LENGTH),
        Validators.maxLength(PIN_LENGTH),
      ]),
    );
    this.addValidators(this.matchPin);
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
}
