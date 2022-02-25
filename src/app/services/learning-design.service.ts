import { Injectable } from '@angular/core';
import { Firestore, doc, docData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {
  LearningNeedSectionOne,
  LearningNeedSectionTwo,
} from '../interfaces/learning-design';

@Injectable({
  providedIn: 'root',
})
export class LearningDesignService {
  sectionOne: LearningNeedSectionOne = {};
  sectionOneId = 'sectionOne';
  canEditSectionOne = false;

  sectionTwo: LearningNeedSectionTwo = {};
  sectionTwoId = 'sectionTwo';
  canEditSectionTwo = false;
  chosenItemTwo: any;

  constructor(private firestore: Firestore) {}

  getById(id: string): Observable<any> {
    const learningDesignRef = doc(this.firestore, `learning-design/${id}`);
    return docData(learningDesignRef, {
      idField: 'id',
    }) as Observable<any>;
  }
}
