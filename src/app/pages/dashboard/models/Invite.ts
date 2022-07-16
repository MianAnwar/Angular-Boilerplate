export class Invite {
  constructor(id: string, invitationDate: string, invitedUsers: InviteUser[]) {
    this.id = id;
    this.invitationDate = invitationDate;
    this.invitedUsers = invitedUsers;
  }

  id: string;

  invitationDate: string;

  invitedUsers: InviteUser[];
}

export class InviteWrapper {
  constructor(inviteItems: InviteUser[], referralEarnAmount: number) {
    this.inviteItems = inviteItems;
    this.referralEarnAmount = referralEarnAmount;
  }

  inviteItems: InviteUser[];

  referralEarnAmount: number;
}

export class InviteUser {
  constructor(_id: boolean, isAccept: boolean, userName: boolean, userNumber: boolean) {
    this._id = _id;
    this.isAccept = isAccept;
    this.userName = userName;
    this.userNumber = userNumber;
  }

  _id: boolean;

  isAccept: boolean;

  userName: boolean;

  userNumber: boolean;
}
