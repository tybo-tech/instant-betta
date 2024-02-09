import { Component, Input } from '@angular/core';
import { HelperClass } from 'src/HelperClass';
import { ProductService } from 'src/services/ProductService';
import { ICardInput, ISection } from 'src/utils.models';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent {
  items?: ICardInput[];
  @Input() section?: ISection

  constructor(private productService: ProductService) {
    productService.listProducts().subscribe(
      (data) => {
        if (data && data.length) {
          const keys: ICardInput = {
            id: 'id',
            image: 'image_url',
            title: 'name',
            description: 'price',
            imageHeight: '',
          };
          this.items = HelperClass.toCard(keys, data);
          this.items.forEach((item) => {
            item.description = `R${Number(item.description).toFixed(2)}`;
            item.linkUrl = '/product/' + item.id;
            item.imageHeight ='25rem';
            // item.linkLabel = 'Details'
          });
        }
      },
      (error) => {
        console.error('Error fetching products:', error);
        // Handle error, show user-friendly message, etc.
      }
    );
  }
}
