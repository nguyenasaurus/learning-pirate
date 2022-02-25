import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Article } from '../interfaces/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private firestore: Firestore) {}

  getArticles(): Observable<Article[]> {
    const articleRef = collection(this.firestore, 'articles');
    return collectionData(articleRef, { idField: 'id' }) as Observable<
      Article[]
    >;
  }
}
