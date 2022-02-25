import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      // positionClass: 'toast-top-full-width',
      preventDuplicates: true,
      progressBar: true,
    }),
  ],
})
export class ContactModule {}
