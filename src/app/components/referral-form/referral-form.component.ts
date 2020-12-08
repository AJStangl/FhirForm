import {Component, Inject, Input, OnInit} from '@angular/core';
import {ReferralServiceService} from '../../services/referral-service.service';
import {ReferralForm} from '../../interfaces/ReferralForm';
import {FormGroup} from '@angular/forms';
import {MockData} from '../../mocks/MockData';


@Component({
  selector: 'app-referral-form',
  templateUrl: './referral-form.component.html',
})


export class ReferralFormComponent implements OnInit {
  formData: ReferralForm = {
    referralPatient: {
      addressLine: [],
      city: '',
      country: '',
      dateOfBirth: undefined,
      emails: [],
      firstName: '',
      lastName: '',
      middleName: '',
      phoneNumbers: [],
      state: '',
      zip: ''
    }
  };

  submitted = false;


  constructor(public referralFormService: ReferralServiceService) {
  }

  ngOnInit(): void {
    // this.referralFormService.getFormData().subscribe(x => {
    //   this.formData = x;
    // });
    this.formData = MockData.CreateFormData();
  }

  get diagnostic() { return JSON.stringify(this.formData); }

  validateForm() {
    this.referralFormService.log('validate and submit');
  }
}



