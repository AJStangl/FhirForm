import {ReferralForm} from '../interfaces/ReferralForm';

export class MockData {
  public static CreateFormData(): ReferralForm {
    return <ReferralForm>{
      referralPatient: {
        firstName: 'Alfred',
        middleName: 'J',
        lastName: 'Stangl',
        dateOfBirth: new Date('1988-03-06'),
        addressLine: ['15 N. Montford Ave'],
        state: 'MD',
        city: 'Baltimore',
        zip: '21224',
        country: 'Baltimore City',
        phoneNumbers: [{value: '520-331-8386', phoneNumberType: 0}],
        emails: [{value: 'ajstangl@gmail.com'}]
      }
    };
  }
}
