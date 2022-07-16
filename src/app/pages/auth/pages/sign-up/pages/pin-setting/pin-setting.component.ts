import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { CONFIG } from 'src/app/core/config/config';
import { PinSettingModel } from 'src/app/pages/auth/models/pin-setting-model';
import { AuthHelperService } from 'src/app/pages/auth/services/auth-helper/auth-helper.service';
import { SignUpForm } from '../../form/sign-up-form';

@Component({
  selector: 'app-pin-setting',
  templateUrl: './pin-setting.component.html',
  styleUrls: ['./pin-setting.component.css'],
})
export class PinSettingComponent implements OnInit, OnDestroy {
  @Output() NEXT_EVENT = new EventEmitter<PinSettingModel>();

  public _submitted: boolean = false;

  get submitted() {
    return this._submitted;
  }

  @Input() set submitted(value: boolean) {
    if (value != undefined || value != null) {
      this._submitted = value;
    }
  }

  pin?: string;

  _pin?: string;

  length: number = CONFIG.pinLength;

  questions: Object = [{ id: '123123', question: 'what ?' }];

  pinMatch = false;

  subscriptions: Subscription[] = [];

  constructor(
    public model: PinSettingModel,
    public form: SignUpForm,
    private authHelper: AuthHelperService,
  ) { }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    });
  }

  ngOnInit(): void {
    let sub = this.authHelper.getSecretQuestion().subscribe({
      next: (res) => {
        console.log(res);
        this.questions = res.results?.dataItems!;
      },
      error: (err) => {
        // this.toastService.standardToast(err.error.errors);
      },
    });
    this.subscriptions.push(sub);
  }

  next() {
    this.NEXT_EVENT.emit(this.model);
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

  onSubmit() {
    if (this.form.valid) {
      this.map2Model();
      this.NEXT_EVENT.emit(this.model);
    } else {
      //console.log(this.form.errors);
    }
  }

  map2Model() {
    this.model.pin = this.form.getPin().value;
    this.model._pin = this.form._getPin().value;
    this.model.secretQuestion = this.form.getSecretQuestion().value;
    this.model.secretAnswer = this.form.getSecretAnswer().value;
  }
}
