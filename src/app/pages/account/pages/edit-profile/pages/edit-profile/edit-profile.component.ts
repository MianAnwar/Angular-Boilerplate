import { UserProfile } from './../../model/user-profile';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTER_UTILS } from 'src/app/core/utils/router.utils';
import { ProfileForm } from '../../form/profile-form';
import { EditProfileService } from '../../services/edit-profile.service';
import { UserService } from 'src/app/pages/auth/services/user-service/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit {

  userProfile!: UserProfile;

  image: string = '/assets/images/profile-img.jpg';

  constructor(
    private router: Router,
    public form: ProfileForm,
    public UserProfileService: EditProfileService,
    public uObj: UserService,
  ) { }

  ngOnInit(): void {
    debugger;
    this.userProfile = this.UserProfileService.userProfile;
  }

  addEmail() {
    const { root, updateEmail } = ROUTER_UTILS.account.editProfile;
    this.router.navigate([ROUTER_UTILS.account.root, root, updateEmail]);
  }

  addSourceOfIncome() {
    const { root, updateSourceOfIncome } = ROUTER_UTILS.account.editProfile;
    this.router.navigate([ROUTER_UTILS.account.root, root, updateSourceOfIncome]);
  }

  addSteetAddress() {
    const { root, updateAddress } = ROUTER_UTILS.account.editProfile;
    this.router.navigate([ROUTER_UTILS.account.root, root, updateAddress]);
  }

  back() {
    this.form.clear();
    this.form.reset();
    this.router.navigate([ROUTER_UTILS.account.root]);
  }

  triggerSelectFile(fileInput: HTMLInputElement) {
    fileInput.click();
  }

  onFileChange(files: FileList) {
    var fileToUpload = files.item(0);
    if (fileToUpload!.size > 1000000) {
      // this.toastService.dangerToast('File Size Exceeds 1Mb Please Upload Image Again');
    } else {
      var file1 = files[0];
      if (files && file1) {
        var reader = new FileReader();
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsBinaryString(file1);
      }
    }
  }

  _handleReaderLoaded(readerEvt: any) {
    var binaryString = readerEvt.target.result;
    var base64textString = btoa(binaryString);
    this.image = 'data:image/jpg;base64,' + base64textString;
    this.form.setImage(this.image);
    this.UserProfileService.userProfile.image = this.image;
  }

}
