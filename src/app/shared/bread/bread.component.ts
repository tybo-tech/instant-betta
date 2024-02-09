import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IKeyValue } from 'src/utils.models';

@Component({
  selector: 'app-bread',
  templateUrl: './bread.component.html',
  styleUrls: ['./bread.component.scss'],
})
export class BreadComponent implements OnInit {
  @Input() bread: IKeyValue[] = [{ key: 'Page name', value: '' }];
  last?: IKeyValue;
  secondLast?: IKeyValue;
  constructor(private router: Router) {}
  ngOnInit(): void {
    if (this.bread.length) {
      this.last = this.bread[this.bread.length - 1];
    }
    if (this.bread.length > 1) {
      this.secondLast = this.bread[this.bread.length - 2];
    }
  }
  back() {
    this.secondLast && this.router.navigate([this.secondLast.value]);
  }
}
