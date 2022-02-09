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
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class LayoutsModule {}
