import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Conference } from '../interfaces/conference';

@Injectable({
  providedIn: 'root',
})
export class ConferenceService {
  constructor(private firestore: Firestore) {}

  getConferences(): Observable<Conference[]> {
    const conferenceRef = collection(this.firestore, 'conferences');
    return collectionData(conferenceRef, { idField: 'id' }) as Observable<
      Conference[]
    >;
  }
}
