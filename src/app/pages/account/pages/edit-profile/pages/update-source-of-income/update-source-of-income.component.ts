import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTER_UTILS } from 'src/app/core/utils/router.utils';
import { ProfileForm } from '../../form/profile-form';
import { EditProfileService } from '../../services/edit-profile.service';

@Component({
  selector: 'app-update-source-of-income',
  templateUrl: './update-source-of-income.component.html',
  styleUrls: ['./update-source-of-income.component.css'],
})
export class UpdateSourceOfIncomeComponent implements OnInit {
  sourceOfIncome = [
    { label: 'Salary', value: 'Salary' },
    { label: 'Working Professional', value: 'Working Professional' },
    { label: 'Parents', value: 'Parents' },
  ];

  constructor(
    private router: Router,
    public form: ProfileForm,
    public userProfileObj: EditProfileService,
  ) { }

  back() {
    this.router.navigate([ROUTER_UTILS.account.root, ROUTER_UTILS.account.editProfile.root]);
  }

  ngOnInit() {
    this.form.setSourceOfIncomeValidation();
    if (this.userProfileObj.userProfile.sourceOfIncome)
      this.form.setSourceOfIncome(this.userProfileObj.userProfile.sourceOfIncome!);
  }

  save() {
    this.userProfileObj.userProfile.sourceOfIncome = this.form.getSourceOfIncome()!.value;
    this.form.removeSourceOfIncomeValidation();

    const { root } = ROUTER_UTILS.account.editProfile;

    this.router.navigate([ROUTER_UTILS.account.root, root], { skipLocationChange: true });
  }
}
