import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {
  showLogin = false;
  closeModal(e: any) {
    const el: HTMLElement | undefined = e.target;
    if (el?.id === 'overlay') {
      this.showLogin = false;
    }
  }
}
