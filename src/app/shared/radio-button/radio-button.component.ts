// radio-button.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
})
export class RadioButtonComponent {
  @Input() options: RadioButtonInput[] = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    // Add more options as needed
  ];
  @Input() selectedValue = '';
  @Output() valueChange = new EventEmitter<string>();

  onRadioChange(value: string) {
    this.selectedValue = value;
    console.log(value);
    
    this.valueChange.emit(value);
  }
}

// radio-button.interface.ts
export interface RadioButtonInput {
  value: any;
  label: string;
}
