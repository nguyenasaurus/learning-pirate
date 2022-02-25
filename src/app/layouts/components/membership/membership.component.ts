import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { MembershipService } from 'src/app/services/membership.service';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.scss'],
})
export class MembershipComponent implements OnInit {
  title = 'Membership';

  isSubmitting = false;

  constructor(
    private membershipService: MembershipService,
    private formBuilder: FormBuilder,
    private titleService: Title,
    private toast: ToastrService
  ) {
    this.titleService.setTitle(this.title);
  }

  ngOnInit(): void {}

  form = this.formBuilder.group({
    fullName: [
      '',
      {
        validators: [Validators.required],
        updateOn: 'change',
      },
    ],
    message: [
      '',
      {
        validators: [Validators.required],
        updateOn: 'change',
      },
    ],
    email: [
      '',
      {
        validators: [Validators.required],
        updateOn: 'change',
      },
    ],
  });

  async onSubmit() {
    if (this.form.invalid) {
      this.toast.error(
        'Please provide valid data. Remember all fields are required',
        'Request Denied'
      );
      return;
    } else {
      this.isSubmitting = true;
      this.form.disable;

      let fullName = this.form.value.fullName;
      let message = this.form.value.message;
      let email = this.form.value.email;

      let data = {
        fullName: fullName,
        message: message,
        email: email,
      };

      this.membershipService
        .create(data)
        .then(() => {
          this.toast.success(
            'You have successfully signed up to be one of our esteemed members.',
            'Request Successful'
          );
          this.isSubmitting = false;
          this.form.enable;
        })
        .catch((error) => {
          console.log(error);
          this.isSubmitting = false;
          this.form.enable;
        });
    }
  }
}
