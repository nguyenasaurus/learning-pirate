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
import { Membership } from '../interfaces/membership';

@Injectable({
  providedIn: 'root',
})
export class MembershipService {
  constructor(private firestore: Firestore) {}

  create(data: any) {
    const membersRef = collection(this.firestore, 'members');
    return addDoc(membersRef, data);
  }
}
