import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-back-heading',
  templateUrl: './back-heading.component.html',
  styleUrls: ['./back-heading.component.scss']
})
export class BackHeadingComponent {
  @Input() url = ''
  @Input() heading = ''

}
