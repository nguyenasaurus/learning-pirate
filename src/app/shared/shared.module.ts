import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { PreLoaderComponent } from './components/pre-loader/pre-loader.component';
import { FaqComponent } from './components/faq/faq.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { PartnersComponent } from './components/partners/partners.component';
import { CallToActionComponent } from './components/call-to-action/call-to-action.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    BreadcrumbComponent,
    PreLoaderComponent,
    FaqComponent,
    TestimonialComponent,
    PartnersComponent,
    CallToActionComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [
    FooterComponent,
    HeaderComponent,
    BreadcrumbComponent,
    PreLoaderComponent,
    FaqComponent,
    TestimonialComponent,
    PartnersComponent,
    CallToActionComponent,
  ],
})
export class SharedModule {}
