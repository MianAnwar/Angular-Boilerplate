import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { InputTrnModel } from '../../../../models/input-trn-model';
import { SignUpForm } from '../../form/sign-up-form';

@Component({
  selector: 'app-input-trn',
  templateUrl: './input-trn.component.html',
  styleUrls: ['./input-trn.component.css'],
})
export class InputTrnComponent {
  @Output() NEXT_EVENT = new EventEmitter<InputTrnModel>();

  constructor(
    public model: InputTrnModel,
    public form: SignUpForm,
  ) { }

  maskInput() {
    this.model.trn = this.form.getTrn().value;
    let trn = '';
    [...this.model.trn].forEach((c, index) => {
      if ((index == 3 || index == 7) && c != '-') {
        trn += '-';
        trn += c;
      } else {
        trn += c;
      }
    });

    this.model.trn = trn;
    this.form.setTrn(trn);
  }

  onSubmit() {
    if (this.form.valid) {
      this.NEXT_EVENT.emit(this.model);
    } else {
      // this.modalService.openInvalidTRNModal();
    }
  }
}
