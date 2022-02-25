import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { HomeSectionFive } from 'src/app/interfaces/home';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-call-to-action',
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.scss'],
})
export class CallToActionComponent implements OnInit {
  sectionFive: HomeSectionFive = {};
  sectionFiveId = 'sectionFive';
  canEditSectionFive = false;
  chosenItemFive: any;

  isSubmitting = false;

  constructor(
    private homeService: HomeService,
    private formBuilder: FormBuilder,
    private titleService: Title,
    private toast: ToastrService
  ) {
    this.homeService
      .getById(this.sectionFiveId)
      .subscribe((res: HomeSectionFive) => {
        this.sectionFive = res;
      });
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
      let email = this.form.value.email;

      let data = {
        fullName: fullName,
        email: email,
      };

      this.homeService
        .joinMailingList(data)
        .then(() => {
          this.toast.success(
            'You have successfully signed up to our mailing list',
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
