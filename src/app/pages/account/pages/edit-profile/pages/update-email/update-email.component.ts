import { EditProfileService } from './../../services/edit-profile.service';
import { ProfileForm } from './../../form/profile-form';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTER_UTILS } from 'src/app/core/utils/router.utils';

@Component({
  selector: 'app-update-email',
  templateUrl: './update-email.component.html',
  styleUrls: ['./update-email.component.css'],
})
export class UpdateEmailComponent implements OnInit {
  constructor(
    private router: Router,
    public form: ProfileForm,
    public userProfileObj: EditProfileService,
  ) { }

  back() {
    this.form.removeEmailValidation();

    this.router.navigate([ROUTER_UTILS.account.root, ROUTER_UTILS.account.editProfile.root]);
  }

  ngOnInit(): void {
    this.form.setEmailValidation();
  }

  verifyEmail() {
    // if(verfiy is this already linked with other account or not if not then continue to verify EmailOTPVerification)
    // {
    this.form.removeEmailValidation();

    const { root, emailOtpVerification } = ROUTER_UTILS.account.editProfile;
    this.router.navigate([ROUTER_UTILS.account.root, root, emailOtpVerification], {
      skipLocationChange: true,
    });
    // }
  }
}
