import {Component, Inject, Input, OnInit} from '@angular/core';
import {ReferralServiceService} from "../../services/referral-service.service";
import {ReferralForm} from "../../interfaces/ReferralForm";
import {FormGroup} from "@angular/forms";


@Component({
  selector: 'app-referral-form',
  templateUrl: './referral-form.component.html',
})


export class ReferralFormComponent implements OnInit {
  formData: ReferralForm = {
    referralPatient: {
      addressLine: [],
      city: "",
      country: "",
      dateOfBirth: undefined,
      emails: [],
      firstName: "",
      lastName: "",
      middleName: "",
      phoneNumbers: [],
      state: "",
      zip: ""
    }
  };



  constructor(public referralFormService: ReferralServiceService) {
  }

  ngOnInit(): void {
    this.referralFormService.getFormData().subscribe(x => {
      this.formData = x
    });
  }

  validateForm() {
    this.referralFormService.log("validate and submit");
  }
}



