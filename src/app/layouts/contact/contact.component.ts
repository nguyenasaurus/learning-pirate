import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { ContactMeService } from 'src/app/services/contact-me.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  title = 'Contact Me';

  isSubmitting = false;

  constructor(
    private contactMeService: ContactMeService,
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
    projectConsultation: [''],
    workshops: [''],
    speaking: [''],
    others: [''],
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
      let projectConsultation = this.form.value.projectConsultation;
      let workshops = this.form.value.workshops;
      let speaking = this.form.value.speaking;
      let others = this.form.value.others;

      let data = {
        fullName: fullName,
        message: message,
        email: email,
        projectConsultation: projectConsultation,
        workshops: workshops,
        speaking: speaking,
        others: others,
      };

      this.contactMeService
        .create(data)
        .then(() => {
          this.toast.success(
            'Your message is well received. We will be touch.',
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
