import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Notice } from '../interfaces/noticias.interface';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  private noticiasSource = new BehaviorSubject<Notice[]>(this.getNoticiasFromStorage());
  noticias$ = this.noticiasSource.asObservable();

  constructor() {}

  setNoticias(noticias: Notice[]) {
    if (typeof window !== 'undefined') {
      localStorage.setItem('noticias', JSON.stringify(noticias));
    }
    this.noticiasSource.next(noticias);
  }

  getNoticias(): Notice[] {
    return this.noticiasSource.getValue();
  }

  private getNoticiasFromStorage(): Notice[] {
    if (typeof window !== 'undefined') {
      const storedNoticias = localStorage.getItem('noticias');
      return storedNoticias ? JSON.parse(storedNoticias) : [];
    }
    return [];
  }
  
}


