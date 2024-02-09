import { Component, Input } from '@angular/core';
import { DataUtils } from 'src/classes/DataUtils';

@Component({
  selector: 'app-dyanamic-detials',
  templateUrl: './dyanamic-detials.component.html',
  styleUrls: ['./dyanamic-detials.component.scss'],
})
export class DyanamicDetialsComponent {
  @Input() data: any;
  @Input() model: any;
  getFormattedValue(item: any): string {
    return DataUtils.getFormattedValue(item, this.data);
  }
}
