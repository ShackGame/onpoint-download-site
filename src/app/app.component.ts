import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true
})
export class AppComponent {
  // Manual store links
  playStoreUrl = 'https://play.google.com/store/apps/details?id=za.co.onpoint.client';
  appGalleryUrl = 'https://appgallery.huawei.com/app/C116066975';

qrCodeUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=' +
            encodeURIComponent('https://download-onpoint.bookingonpoint.com');
}
