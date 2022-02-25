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
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactMeService {
  constructor(private firestore: Firestore) {}

  create(data: any) {
    const membersRef = collection(this.firestore, 'contactMessages');
    return addDoc(membersRef, data);
  }
}
