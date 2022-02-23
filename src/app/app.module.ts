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
import { TestimonyDirective } from './directives/testimony.directive';

@NgModule({
  declarations: [AppComponent, TestimonyDirective],
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
  ],
  providers: [Title],
  bootstrap: [AppComponent],
})
export class AppModule {}
