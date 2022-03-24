import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  doc,
  docData,
  collectionData,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Home, Partner, SocialMedia, Testimony } from '../interfaces/home';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private firestore: Firestore) {}

  getTestimonies(): Observable<Testimony[]> {
    const podcastRef = collection(this.firestore, 'testimonials');
    return collectionData(podcastRef, { idField: 'id' }) as Observable<
      Testimony[]
    >;
  }

  getById(id: string): Observable<Home> {
    const testimonialRef = doc(this.firestore, `home/${id}`);
    return docData(testimonialRef, {
      idField: 'id',
    }) as Observable<Home>;
  }

  joinMailingList(data: any) {
    const mailingListRef = collection(this.firestore, 'mailingList');
    return addDoc(mailingListRef, data);
  }

  getPartners(): Observable<Partner[]> {
    const partnersRef = collection(this.firestore, 'partners');
    return collectionData(partnersRef, { idField: 'id' }) as Observable<
      Partner[]
    >;
  }

  getSocialMediaPages(): Observable<SocialMedia[]> {
    const socialMediasRef = collection(this.firestore, 'socialMedias');
    return collectionData(socialMediasRef, { idField: 'id' }) as Observable<
      SocialMedia[]
    >;
  }
}
