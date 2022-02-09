import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { PreLoaderComponent } from './components/pre-loader/pre-loader.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { PartnersComponent } from './components/partners/partners.component';
import { CallToActionComponent } from './components/call-to-action/call-to-action.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ImageLightboxComponent } from './components/image-lightbox/image-lightbox.component';
import { HeaderTwoComponent } from './components/header-two/header-two.component';
import { PodcastComponent } from './components/podcast/podcast.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { ConferenceComponent } from './components/conference/conference.component';
import { LetCreateTogetherComponent } from './components/let-create-together/let-create-together.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    BreadcrumbComponent,
    PreLoaderComponent,
    TestimonialComponent,
    PartnersComponent,
    CallToActionComponent,
    GalleryComponent,
    ImageLightboxComponent,
    HeaderTwoComponent,
    PodcastComponent,
    ArticlesComponent,
    ConferenceComponent,
    LetCreateTogetherComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [
    FooterComponent,
    HeaderComponent,
    BreadcrumbComponent,
    PreLoaderComponent,
    TestimonialComponent,
    PartnersComponent,
    CallToActionComponent,
    GalleryComponent,
    ImageLightboxComponent,
    HeaderTwoComponent,
    PodcastComponent,
    ArticlesComponent,
    ConferenceComponent,
    LetCreateTogetherComponent,
  ],
})
export class SharedModule {}
