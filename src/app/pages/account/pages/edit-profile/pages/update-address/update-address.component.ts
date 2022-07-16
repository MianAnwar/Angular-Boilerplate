import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ROUTER_UTILS } from 'src/app/core/utils/router.utils';
import { ProfileForm } from '../../form/profile-form';
import { EditProfileService } from '../../services/edit-profile.service';

@Component({
  selector: 'app-update-address',
  templateUrl: './update-address.component.html',
  styleUrls: ['./update-address.component.css'],
})
export class UpdateAddressComponent implements OnInit {

  subscriptions: Subscription[] = [];

  parish: any[] = [];

  town: any = [];

  constructor(
    private router: Router,
    public form: ProfileForm,
    public userProfileObj: EditProfileService,
  ) { }

  back() {
    this.form.removeAddressValidation();
    this.router.navigate([ROUTER_UTILS.account.root, ROUTER_UTILS.account.editProfile.root]);
  }

  ngOnInit() {
    this.form.setAddressValidation();
    this.getParish();
  }

  getParish() {
    let sub = this.userProfileObj.getParish().subscribe({
      next: (res: any) => {
        console.log(res);
        res.results?.dataItems?.forEach((parish: any) => {
          this.parish.push(parish);
        });
      },
      error: (err: any) => {
        console.log(err);
      },
    });
    this.subscriptions?.push(sub);
  }

  getTown(parish: string) {
    this.town = [];
    let sub = this.userProfileObj.getTown(parish).subscribe({
      next: (res: any) => {
        console.log(res);
        res.results?.dataItems?.forEach((town: any) => {
          this.town.push(town);
        });
      },
      error: (err: any) => {
        console.log(err);
      },
    });
    this.subscriptions?.push(sub);
  }

  save() {
    this.userProfileObj.userProfile.parish = this.form.getParish()!.value;
    this.userProfileObj.userProfile.town = this.form.getTown()!.value;
    this.userProfileObj.userProfile.fullAddress = this.form.getFullAddress()!.value;
    this.form.removeAddressValidation();

    const { root } = ROUTER_UTILS.account.editProfile;

    this.router.navigate([ROUTER_UTILS.account.root, root], { skipLocationChange: true });
  }
}
