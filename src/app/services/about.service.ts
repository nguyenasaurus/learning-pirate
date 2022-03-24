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
import { About, Gallery, Qualification } from '../interfaces/about';
import { Bod } from '../interfaces/bod';

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

  getQualifications(): Observable<Qualification[]> {
    const qualificationRef = collection(this.firestore, 'qualifications');
    return collectionData(qualificationRef, { idField: 'id' }) as Observable<
      Qualification[]
    >;
  }

  getGallery(): Observable<Gallery[]> {
    const galleryRef = collection(this.firestore, 'gallery');
    return collectionData(galleryRef, { idField: 'id' }) as Observable<
      Gallery[]
    >;
  }

  getBods(): Observable<Bod[]> {
    const galleryRef = collection(this.firestore, 'bods');
    return collectionData(galleryRef, { idField: 'id' }) as Observable<Bod[]>;
  }
}
