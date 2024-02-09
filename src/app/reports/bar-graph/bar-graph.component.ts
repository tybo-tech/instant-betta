import { Component, Input, OnInit } from '@angular/core';
import { IBarReport } from 'src/report.model';

@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.scss'],
})
export class BarGraphComponent implements OnInit {
  @Input() data: IBarReport = {
    label: 'Pending Verification',
    data: {
      values: [10, 5, 12, 12, 4, 3, 2, 9],
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
      colors: ['#4d73f2', '#4d73f2', '#4d73f2', '#4d73f2'],
    },
  };
  basicData: any;

  basicOptions: any;

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary'
    );
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.basicData = {
      labels: this.data.data.labels,
      datasets: [
        {
          label: this.data.label,
          data: this.data.data.values,
          backgroundColor: this.data.data.colors,
          borderWidth: 0,
        },
      ],
    };

    this.basicOptions = {
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
      },
    };
  }
}
