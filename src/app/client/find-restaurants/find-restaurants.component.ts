import { Component, ViewChild, ElementRef, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/schema';
import { CrudService } from 'src/services/CrudService.ts/CrudService';
import { LoginService } from 'src/services/accounts/LoginService ';

@Component({
  selector: 'app-find-restaurants',
  templateUrl: './find-restaurants.component.html',
  styleUrls: ['./find-restaurants.component.scss'],
})
export class FindRestaurantsComponent {
  address = '';
  addressSearch = '';
  LocationModel: any; // Define the type accordingly
  latitude = 22.9513;
  longitude = 30.4856;
  user?: Users;

  constructor(
    private r: Router,
    private lo: LoginService,
    private crud: CrudService
  ) {
    lo.$user.subscribe((data) => {
      this.user = data;
      console.log(this.user);
    });
  }

  handleLocationError(error: any): void {
    console.error('Error getting user location:', error.message);

    // Notify the user about the error or handle it in your application
    // ...
  }

  userCurrentLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Get the coordinates
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;

          // You can use the coordinates or display them
          this.address = `Latitude: ${this.latitude}, Longitude: ${this.longitude}`;
          this.LocationModel = {
            Latitude: this.latitude,
            Longitude: this.longitude,
            AddressLine: '',
            Url: '',
          };
          this.updateUser(this.latitude, this.longitude);
          // Implement the logic for finding the location based on the current coordinates
        },
        (error) => this.handleLocationError(error)
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      // Handle the case where geolocation is not supported
    }
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
        this.updateUser(this.latitude, this.longitude,address.formatted_address,address.url);
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
  }
  goToSearch() {
    // Convert latitude and longitude to strings if needed
    const latitude = this.LocationModel.Latitude?.toString() || '';
    const longitude = this.LocationModel.Longitude?.toString() || '';

    // Navigate to the search route with parameters
    this.r.navigate(['search', latitude, longitude]);
  }

  updateUser(lat: number, lon: number,formatted_address='',url='') {
    if (this.user) {
      this.user.latitude = lat;
      this.user.longitude = lon;
      if(formatted_address) this.user.address = formatted_address
      if(url) this.user.url = url
      if (!this.user.metadata) this.user.metadata = { dateTime: new Date() };
      const data: any = { ...this.user };
      delete data.token;
      this.crud.update('users', this.user.id, data).subscribe((data) => {
        this.user && this.lo.updateUser(this.user);
        this.goToSearch();
      });
    }
  }
}
