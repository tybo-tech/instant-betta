import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Companies } from 'src/schema';
import { CrudService } from 'src/services/CrudService.ts/CrudService';
import { IKeyValue } from 'src/utils.models';

@Component({
  selector: 'app-restaurants-found',
  templateUrl: './restaurants-found.component.html',
  styleUrls: ['./restaurants-found.component.scss'],
})
export class RestaurantsFoundComponent implements OnInit {
  latitude: number | string = '';
  longitude: number | string = '';
  list?: Companies[] ;
  tableHeaders: IKeyValue[] = [
    { key: 'image', value: 'logo' },
    { key: 'text', value: 'name' },
    { key: 'text', value: 'address' },
  ];
  constructor(
    private crudService: CrudService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.longitude = params['longitude'] || '';
      this.latitude = params['latitude'] || '';
      this.search();
    });
  }

  search() {
    this.crudService.radius(+this.latitude, +this.longitude, 20).subscribe(
      (data) => {
        if (data && data.length) {
          this.list = data;
          this.list.forEach(item=>{
            item.link = `/choose-products/${this.latitude}/${this.longitude}/${item.id}`
          })
        }else{
          this.list = []
        }
      },
      (error) => {
        console.error('Error while searching:', error);
      }
    );
  }
  view(item: Companies) {
    // this.openDetailsPage(item.id.toString())
  }
  get backLink(){
    return  `/find-restaurants`

  }
}
