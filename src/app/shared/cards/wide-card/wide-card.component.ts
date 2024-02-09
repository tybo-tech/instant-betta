import { Component, Input } from '@angular/core';
import { DataUtils } from 'src/classes/DataUtils';

@Component({
  selector: 'app-wide-card',
  templateUrl: './wide-card.component.html',
  styleUrls: ['./wide-card.component.scss']
})
export class WideCardComponent {
  @Input() data: any;
  @Input() model: any;
  getFormattedValue(item: any): string {
    return DataUtils.getFormattedValue(item, this.data);
  }
}
