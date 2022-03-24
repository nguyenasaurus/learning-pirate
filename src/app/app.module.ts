import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from './shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutsModule } from './layouts/layouts.module';
import { ContactModule } from './layouts/contact/contact.module';

import { NgImageSliderModule } from 'ng-image-slider';
import { EventCarouselModule } from './shared/components/event-carousel/event-carousel.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

// import { NgxImageGalleryModule } from 'ngx-image-gallery';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    LayoutsModule,
    ContactModule,
    EventCarouselModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      // positionClass: 'toast-top-full-width',
      preventDuplicates: true,
      progressBar: true,
    }),
    NgImageSliderModule,
    SlickCarouselModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    // NgxImageGalleryModule,
  ],
  providers: [Title],
  bootstrap: [AppComponent],
})
export class AppModule {}
