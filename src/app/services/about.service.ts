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
import { About } from '../interfaces/about';

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  constructor(private firestore: Firestore) {}

  getById(id: string): Observable<About> {
    const aboutRef = doc(this.firestore, `about/${id}`);
    return docData(aboutRef, {
      idField: 'id',
    }) as Observable<About>;
  }
}
