// src/app/toast/toast.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {
  @Input() message: string = '';
  @Input() type: 'success' | 'error' = 'success';
  @Output() closeToast = new EventEmitter<void>();

  close() {
    this.closeToast.emit();
  }
}
