import { Component, Input } from '@angular/core';
import { DataUtils } from 'src/classes/DataUtils';

@Component({
  selector: 'app-section-product',
  templateUrl: './section-product.component.html',
  styleUrls: ['./section-product.component.scss']
})
export class SectionProductComponent {
  @Input() data: any;
  @Input() model: any;
  getFormattedValue(item: any): string {
    return DataUtils.getFormattedValue(item, this.data);
  }
}
