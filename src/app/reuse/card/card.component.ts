import { Component, Input } from '@angular/core';
import { ICard, IMAGE_PLACEHOLDER } from '../reuse.models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() card: ICard = {
    cta: 'Add to cart',
    subTitle: 'Sub title',
    image: IMAGE_PLACEHOLDER,
    price: 'R100',
    title: 'Product Name',
  };
}
