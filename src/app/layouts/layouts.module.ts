import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsComponent } from './layouts.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { LearningDesignComponent } from './components/learning-design/learning-design.component';
import { SpeakingComponent } from './components/speaking/speaking.component';
import { MediaComponent } from './components/media/media.component';
import { FaqComponent } from './components/faq/faq.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { TermsConditionComponent } from './components/terms-condition/terms-condition.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { BlogComponent } from './components/blog/blog.component';
import { MembershipComponent } from './components/membership/membership.component';
import { PrivateCoachingComponent } from './components/private-coaching/private-coaching.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { EventCarouselModule } from '../shared/components/event-carousel/event-carousel.module';
import { TestimonyCarouselModule } from '../shared/components/testimony-carousel/testimony-carousel.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NextDirective } from '../directives/next.directive';
import { PrevDirective } from '../directives/prev.directive';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    LayoutsComponent,
    HomeComponent,
    AboutComponent,
    LearningDesignComponent,
    SpeakingComponent,
    MediaComponent,
    FaqComponent,
    ContactComponent,
    PrivacyPolicyComponent,
    TermsConditionComponent,
    BlogsComponent,
    BlogComponent,
    MembershipComponent,
    PrivateCoachingComponent,
    NextDirective,
    PrevDirective,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    EventCarouselModule,
    TestimonyCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    NgImageSliderModule,
    SlickCarouselModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      // positionClass: 'toast-top-full-width',
      preventDuplicates: true,
      progressBar: true,
    }),
  ],
})
export class LayoutsModule {}
