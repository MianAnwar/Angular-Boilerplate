import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

const form = {
  rating: new FormControl('', Validators.compose([Validators.required])),
  category: new FormControl('', Validators.compose([Validators.required])),
  message: new FormControl('', Validators.compose([Validators.required])),
  attachments: new FormControl(''),
};

@Injectable()
export class FeedbackForm extends FormGroup {
  constructor() {
    super(form);
  }

  getRating() {
    return this.controls['rating'];
  }

  setRating(value: string) {
    this.controls['rating'].setValue(value);
  }

  getCategory() {
    return this.controls['category'];
  }

  setCategory(value: string) {
    this.controls['category'].setValue(value);
  }

  getMessage() {
    return this.controls['message'];
  }

  setMessage(value: string) {
    this.controls['mediaFiles'].setValue(value);
  }

  getMediaFiles() {
    return this.controls['attachments'];
  }

  setMediaFiles(value: string[]) {
    this.controls['attachments'].setValue(value);
  }
}
