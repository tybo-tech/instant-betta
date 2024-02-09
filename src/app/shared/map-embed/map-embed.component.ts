import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-map-embed',
  templateUrl: './map-embed.component.html',
  styleUrls: ['./map-embed.component.scss'],
})
export class MapEmbedComponent implements OnInit {
  @Input() latitude: any = 0;
  @Input() longitude: any = 0;
  @Input() mapHeight: any = '150px';
  url: SafeResourceUrl = '';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://maps.google.com/maps?q=${this.latitude},${this.longitude}&t=&z=13&ie=UTF8&iwloc=&output=embed`
    );
  }
}
