import { BarGraphComponent } from './bar-graph/bar-graph.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { ReportCountsComponent } from './report-counts/report-counts.component';

import { ChartModule } from 'primeng/chart';
import { ToastModule } from 'primeng/toast';

export const reports_declarations = [
  BarGraphComponent,
  DoughnutChartComponent,
  PieChartComponent,
  ReportCountsComponent,
];

export const reports_modules = [ChartModule, ToastModule];
