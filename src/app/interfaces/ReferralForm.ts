export interface ReferralForm {
  referralPatient: {
    firstName: string;
    middleName: string;
    lastName: string;
    dateOfBirth: Date;
    addressLine: string[];
    state: string;
    city: string;
    zip: string;
    country: string
    phoneNumbers: PhoneNumber[]
    emails: email[]
  }
}

export interface PhoneNumber {
  value: string;
  phoneNumberType: number
}

export interface email {
  value: string
}
