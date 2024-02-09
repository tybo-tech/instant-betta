import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-empty-state',
  templateUrl: './empty-state.component.html',
  styleUrls: ['./empty-state.component.scss'],
})
export class EmptyStateComponent {
  @Input() text = 'Not found here.';
  @Input() label = '';
  @Input() link = '';
  @Input() btnName = '';
  @Output() clicked = new EventEmitter<any>();
}
