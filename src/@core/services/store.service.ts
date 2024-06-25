import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private dataSubject = new BehaviorSubject<any>(null);
  data$ = this.dataSubject.asObservable();

  constructor() {}

  // Método para atualizar os dados
  setData(data: any): void {
    this.dataSubject.next(data);
  }

  // Método para obter os dados atuais
  getData(): any {
    return this.dataSubject.getValue();
  }
}