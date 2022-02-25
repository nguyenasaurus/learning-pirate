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

@Injectable({
  providedIn: 'root',
})
export class SpeakingService {
  constructor(private firestore: Firestore) {}

  getById(id: string): Observable<any> {
    const speakingRef = doc(this.firestore, `speaking/${id}`);
    return docData(speakingRef, {
      idField: 'id',
    }) as Observable<any>;
  }
}
