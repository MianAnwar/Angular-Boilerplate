import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
};

@Injectable()
export class SignInForm extends FormGroup {
  constructor() {
    super(form);
  }

  getPin() {
    return this.controls['pin'];
  }

  setPin(value: string) {
    this.controls['pin'].setValue(value);
  }

  resetForm() {
    this.reset();
  }
}
