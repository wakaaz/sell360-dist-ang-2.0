import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private readonly _checkPermissions = new BehaviorSubject<boolean>(false);
  get checkPermissions(): Observable<boolean> {
    return this._checkPermissions.asObservable();
  }
  setCheckPermissions() {
    this._checkPermissions.next(true);
  }
  constructor() {}

  setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string): any {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  clearStorage(): void {
    localStorage.clear();
  }
}
