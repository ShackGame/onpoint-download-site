import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true
})
export class AppComponent {

  // Your Google Play Store link
  playStoreUrl = 'https://play.google.com/store/apps/details?id=za.co.onpoint.client';

  // QR Code URL generated using the Google Play link
  qrCodeUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=' +
              encodeURIComponent(this.playStoreUrl);
}
