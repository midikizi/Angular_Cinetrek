import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PaymentServiceService {

  private baseUrl: string = 'https://paygateglobal.com/v1/page';

  constructor(private router: Router) {}

  redirectToPayment(token: string, amount: number, identifier: string, description?: string, url?: string, phone?: string, network?: string) {
    const params: string[] = [
      `token=${encodeURIComponent(token)}`,
      `amount=${encodeURIComponent(amount.toString())}`,
      `identifier=${encodeURIComponent(identifier)}`
    ];

    if (description) params.push(`description=${encodeURIComponent(description)}`);
    if (url) params.push(`url=${encodeURIComponent(url)}`);
    if (phone) params.push(`phone=${encodeURIComponent(phone)}`);
    if (network) params.push(`network=${encodeURIComponent(network)}`);

    const fullUrl = `${this.baseUrl}?${params.join('&')}`;

    window.location.href = fullUrl;
  }
}
