import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IReportCount } from 'src/report.model';

@Component({
  selector: 'app-report-counts',
  templateUrl: './report-counts.component.html',
  styleUrls: ['./report-counts.component.scss'],
})
export class ReportCountsComponent {
  @Input() items: IReportCount[] = [
    { Icon: 'bi bi-shop', Name: 'Restaurants', Value: '05',Link:'restaurants' },
    { Icon: 'bi bi-cart-plus', Name: 'New Orders', Value: '05' },
    { Icon: 'bi bi-cart', Name: 'In Progress', Value: '03' },
    { Icon: 'bi bi-rocket-takeoff', Name: 'On The Way', Value: '08' },
    { Icon: 'bi bi-clipboard2-check', Name: 'Completed', Value: '67' },
  ];
  @Output() countEVent = new EventEmitter<IReportCount>();
  onCountEVent(item: IReportCount) {
    this.countEVent.emit(item);
  }
}
