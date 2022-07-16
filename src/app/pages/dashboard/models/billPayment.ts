export class BillPayment {
  constructor(
    _id: string,
    status: string,
    billCategory: string,
    amountPaid: number,
    dueDate: string,
    paymentDate: string,
    deleted: boolean,
    billStatus: string,
    paymentDueDate: string,
    consumerName: string,
    totalAmountPayableWithinDueDate: number,
    totalAmountPayableAfterDueDate: number,
    companyCode: string,
    billMonth: string,
    fee: number,
    tax: number,
    billReferenceNumber: string,
    userId: string,
    customerMsisdn: string,
    transactionId: string,
    organizationCode: string,
    companyId: string,
    companyDetails: CompanyDetails,
    categoryDetails: CategoryDetails,
    isSelected: boolean,
  ) {
    this._id = _id;
    this.status = status;
    this.billCategory = billCategory;
    this.amountPaid = amountPaid;
    this.dueDate = dueDate;
    this.paymentDate = paymentDate;
    this.deleted = deleted;
    this.billStatus = billStatus;
    this.paymentDueDate = paymentDueDate;
    this.consumerName = consumerName;
    this.totalAmountPayableWithinDueDate = totalAmountPayableWithinDueDate;
    this.totalAmountPayableAfterDueDate = totalAmountPayableAfterDueDate;
    this.companyCode = companyCode;
    this.totalAmountPayableAfterDueDate = totalAmountPayableAfterDueDate;
    this.companyCode = companyCode;
    this.billMonth = billMonth;
    this.fee = fee;
    this.tax = tax;
    this.billReferenceNumber = billReferenceNumber;
    this.userId = userId;
    this.customerMsisdn = customerMsisdn;
    this.transactionId = transactionId;
    this.organizationCode = organizationCode;
    this.companyId = companyId;
    this.companyDetails = companyDetails;
    this.categoryDetails = categoryDetails;
    this.isSelected = isSelected;
  }

  _id: string;

  status: string;

  billCategory: string;

  amountPaid: number;

  dueDate: string;

  paymentDate: string;

  deleted: boolean;

  billStatus: string;

  paymentDueDate: string;

  consumerName: string;

  totalAmountPayableWithinDueDate: number;

  totalAmountPayableAfterDueDate: number;

  companyCode: string;

  billMonth: string;

  fee: number;

  tax: number;

  billReferenceNumber;

  userId: string;

  customerMsisdn: string;

  transactionId: string;

  organizationCode: string;

  companyId: string;

  companyDetails: CompanyDetails;

  categoryDetails: CategoryDetails;

  isSelected: boolean;
}

class CompanyDetails {
  constructor(_id: string, companyName: string, billCategory: string, billShortCode: string) {
    this._id = _id;
    this.companyName = companyName;
    this.billCategory = billCategory;
    this.billShortCode = billShortCode;
  }

  _id: string;

  companyName: string;

  billCategory: string;

  billShortCode: string;
}

class CategoryDetails {
  constructor(categoryName: string, image: string) {
    this.categoryName = categoryName;
    this.image = image;
  }

  categoryName: string;

  image: string;
}
