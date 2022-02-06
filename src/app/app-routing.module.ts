import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './layouts/components/about/about.component';
import { BlogComponent } from './layouts/components/blog/blog.component';
import { BlogsComponent } from './layouts/components/blogs/blogs.component';
import { FaqComponent } from './layouts/components/faq/faq.component';
import { HomeComponent } from './layouts/components/home/home.component';
import { LearningDesignComponent } from './layouts/components/learning-design/learning-design.component';
import { MembershipComponent } from './layouts/components/membership/membership.component';
import { PodcastComponent } from './layouts/components/podcast/podcast.component';
import { PrivacyPolicyComponent } from './layouts/components/privacy-policy/privacy-policy.component';
import { PrivateCoachingComponent } from './layouts/components/private-coaching/private-coaching.component';
import { SpeakingComponent } from './layouts/components/speaking/speaking.component';
import { TermsConditionComponent } from './layouts/components/terms-condition/terms-condition.component';
import { ContactComponent } from './layouts/contact/contact.component';
import { LayoutsComponent } from './layouts/layouts.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutsComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'learning-design',
        component: LearningDesignComponent,
      },
      {
        path: 'speaking',
        component: SpeakingComponent,
      },
      {
        path: 'media',
        component: BlogsComponent,
      },
      {
        path: 'media/content/:id',
        component: BlogComponent,
      },
      {
        path: 'faqs',
        component: FaqComponent,
      },
      {
        path: 'private-coaching',
        component: PrivateCoachingComponent,
      },
      {
        path: 'membership',
        component: MembershipComponent,
      },
      {
        path: 'podcast',
        component: PodcastComponent,
      },
      {
        path: 'privacy-policy',
        component: PrivacyPolicyComponent,
      },
      {
        path: 'terms-conditions',
        component: TermsConditionComponent,
      },
    ],
  },
  {
    path: 'contact-me',
    component: ContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
