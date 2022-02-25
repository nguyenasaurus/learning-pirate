import { Injectable } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  doc,
  docData,
  deleteDoc,
  updateDoc,
  DocumentReference,
  setDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Podcast } from '../interfaces/podcast';

@Injectable({
  providedIn: 'root',
})
export class PodcastService {
  constructor(private firestore: Firestore) {}

  getPodcasts(): Observable<Podcast[]> {
    const podcastRef = collection(this.firestore, 'podcasts');
    return collectionData(podcastRef, { idField: 'id' }) as Observable<
      Podcast[]
    >;
  }
}
