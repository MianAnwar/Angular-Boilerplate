import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { getItem, StorageItem } from 'src/app/core/utils';
import { ROUTER_UTILS } from 'src/app/core/utils/router.utils';
import { FeedbackForm } from '../../form/feedback-form';
import { FeedbackService } from '../../services/feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
})
export class FeedbackComponent implements OnInit, OnDestroy {
  header = 'Feedback';

  rating = 1;

  images: string[] = [];

  categoryOptions: FeedbackCategoryModel[] = [];

  subscriptions: Subscription[] = [];

  constructor(
    private router: Router,
    private feedbackService: FeedbackService,
    public form: FeedbackForm,
  ) { }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    });
  }

  ngOnInit(): void {
    this.getFeedbackCategories();
    this.form.setRating('1');
  }

  getFeedbackCategories() {
    let sub = this.feedbackService.getfeedbackCategories().subscribe({
      next: (res) => {
        console.log(res);
        res.results!.dataItems!.forEach((element) => {
          let cat = element as FeedbackCategoryModel;
          this.categoryOptions.push(cat);
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
    this.subscriptions.push(sub);
  }

  resetForm() {
    this.form.getMessage().reset();
    this.form.getRating().reset();
  }

  back() {
    this.resetForm();
    this.router.navigate(['/', ROUTER_UTILS.account.root]);
  }

  ratingChange(rating: number) {
    console.log(rating);
    this.rating = rating;
    this.form.setRating(rating.toString());
  }

  onFileChange(files: File[]) {
    if (files && files[0]) {
      var filesAmount = files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();

        reader.onload = (event: ProgressEvent<FileReader>) => {
          this.images.push(event.target?.result as string);
          this.form.setMediaFiles(this.images);
        };

        reader.readAsDataURL(files[i]);
      }
    }
  }

  removeImage(index: number) {
    this.images.splice(index, 1);
  }

  onSubmit() {
    // this.modalService.openLoaderModal();
    let sub = this.feedbackService
      .postFeedback(
        this.form.getRating().value,
        this.form.getCategory().value,
        this.form.getMessage().value,
        this.form.getMediaFiles().value,
        getItem(StorageItem.UserID),
      )
      .subscribe({
        next: () => {
          // this.modalService.dismiss();
          if (Number(this.form.getRating().value) > 3) {
            // this.modalService.openGoodFeedbackModal(() => {
            //   this.form.reset();
            //   const { root } = ROUTER_UTILS.home;
            //   this.router.navigate([root]);
            // });
          } else {
            // this.modalService.openBadFeedbackModal(() => {
            //   this.form.reset();
            //   const { root } = ROUTER_UTILS.home;
            //   this.router.navigate([root]);
            // });
          }
        },
        error: (err) => {
          console.log(err);
        },
      });
    this.subscriptions.push(sub);
  }
}

export class FeedbackCategoryModel {
  title?: string;

  id?: string;
}
