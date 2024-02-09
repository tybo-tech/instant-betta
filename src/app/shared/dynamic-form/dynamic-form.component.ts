import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { CrudService } from 'src/services/CrudService.ts/CrudService';
import { UploadService } from 'src/services/UploadService';
import { editorConfig, editorStyle } from 'src/settings';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  @Input() formData: any[] = [];
  @Input() parentId?: any;
  @Output() onSubmited = new EventEmitter<any[]>();
  LocationModel?: { Latitude: any; Longitude: any; AddressLine: any; Url: any };
  constructor(
    private uploadService: UploadService,
    private crudService: CrudService
  ) {}
  ngOnInit(): void {
    const ref = this.formData.find((x) => x.is_reference);
    if (ref) {
      ref.value = this.parentId || 0;
    }
    const parent_dropdown = this.formData.find((x) => x.parent_dropdown);
    if (parent_dropdown) {
      console.log(parent_dropdown);
      this.crudService
        .list(parent_dropdown.parent_dropdown)
        .subscribe((data) => {
          if (data && data.length) {
            parent_dropdown.dropdown_options = data;
          }
        });
    }
  }
  editorConfig = editorConfig;
  editorStyle = editorStyle;
  onSubmit() {
    this.onSubmited.emit(this.formData);
  }
  cleanLAbel(label: string) {
    return label.toLowerCase().replace(' ', '_').trim();
  }
  onFileChange(field: any, files: FileList | null) {
    console.log(files, field);
    this.uploadService.onUplaod(files, field, 'value');
  }

  onAddressInputChange(input: any): void {
    if (input) {
      const autocomplete = new google.maps.places.Autocomplete(input, {
        types: [],
        componentRestrictions: { country: 'ZA' }, // Adjust the country code as needed
      });

      google.maps.event.addListener(autocomplete, 'place_changed', () => {
        const address = autocomplete.getPlace();
        this.updateLocationModel(address);
      });
    }
  }

  private updateLocationModel(address: google.maps.places.PlaceResult): void {
    this.LocationModel = {
      Latitude: address.geometry?.location.lat(),
      Longitude: address.geometry?.location.lng(),
      AddressLine: address.formatted_address,
      Url: address.url,
    };
    this.formData.forEach((item) => {
      if (item.type === 'latitude')
        item.value = this.LocationModel?.Latitude || '';
      if (item.type === 'longitude')
        item.value = this.LocationModel?.Longitude || '';
      if (item.type === 'address_url')
        item.value = this.LocationModel?.Url || '';
    });
  }
}
