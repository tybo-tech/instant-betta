// src/app/login.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Companies, UxModel } from 'src/schema';
@Injectable({
  providedIn: 'root',
})
export class UxService {
  private uxSub = new BehaviorSubject<UxModel>({});
  $ux = this.uxSub.asObservable();
  constructor(private router: Router) {}

  load() {
    this.updateState({ ...this.state, loading: true });
  }
  stopLoad() {
    this.updateState({ ...this.state, loading: false });
  }
  toast(message: string, url = '') {
    this.updateState({ ...this.state, message: message });
    setTimeout(() => {
      this.hideToast();
    }, 2500);
    if (url) {
      this.router.navigate([url]);
    }
  }
  updateCompany(company: Companies) {
    this.updateState({ ...this.state, company: company });
  }
  hideToast() {
    this.updateState({ ...this.state, message: undefined, loading: false });
  }
  updateState(state: UxModel) {
    this.uxSub.next(state);
  }
  get state() {
    return this.uxSub.value;
  }
}
