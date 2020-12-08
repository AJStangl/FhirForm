import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ReferralServiceService} from '../../services/referral-service.service';
import {MockData} from "../../mocks/MockData";

@Component({
  selector: 'app-name-editor',
  templateUrl: './reactive-form.component.html'
})

export class ReactiveFormComponent implements OnInit {
  constructor(private fb: FormBuilder, public formService: ReferralServiceService) { }
  profileForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  ngOnInit(): void {
    const data = MockData.CreateFormData();
    this.profileForm.setValue({
      firstName: data.referralPatient.firstName,
      lastName: data.referralPatient.lastName
    });
  }
}

