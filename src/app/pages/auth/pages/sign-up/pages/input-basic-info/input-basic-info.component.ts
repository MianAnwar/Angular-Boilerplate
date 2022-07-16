import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime, Subscription } from 'rxjs';
import { BasicInfoModel } from 'src/app/pages/auth/models/basic-info-model';
import { SignUpForm } from '../../form/sign-up-form';
@Component({
  selector: 'app-input-basic-info',
  templateUrl: './input-basic-info.component.html',
  styleUrls: ['./input-basic-info.component.css'],
})
export class InputBasicInfoComponent implements OnInit, OnDestroy {
  @Output() NEXT_EVENT = new EventEmitter<BasicInfoModel>();

  public _submitted: boolean = false;

  get submitted() {
    return this._submitted;
  }

  subscriptions: Subscription[] = [];

  @Input() set submitted(value: boolean) {
    if (value != undefined || value != null) {
      this._submitted = value;
    }
  }

  constructor(
    public model: BasicInfoModel,
    public form: SignUpForm,
  ) { }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  ngOnInit(): void {
    let sub = this.form
      .getDob()
      .valueChanges.pipe(debounceTime(500))
      .subscribe(() => {
        if (this.form.hasError('ageRestriction')) {
          // this.toastService.standardToast(
          //   'You dont reach the minimum age limit to sign up for MyCash.',
          // );
        }
      });
    this.subscriptions.push(sub);
  }

  onSubmit() {
    if (this.form.valid) {
      this.model.dob = this.form.getDob().value;
      this.model.lastName = this.form.getLname().value;
      this.model.firstName = this.form.getFname().value;
      this.next();
    }
  }

  next() {
    this.NEXT_EVENT.emit(this.model);
  }
}
