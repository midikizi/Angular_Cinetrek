import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentServiceService } from 'src/app/service/payment-service.service';
import { StockInfoService } from 'src/app/service/stock-info.service';
import { ToasterService } from 'src/app/service/toast/toaster.service';

@Component({
  selector: 'app-payment-component',
  templateUrl: './payment-component.component.html',
  styleUrls: ['./payment-component.component.css']
})
export class PaymentComponentComponent implements OnInit{
  user!: any;
  token!: any;

  paymentData = {
    token: '',
    amount: 0,
    identifier: '',
    description: '',
    phone: '',
    network: ''
  };

  constructor(private paymentService: PaymentServiceService,
    private stock:StockInfoService,
    private toaster: ToasterService,
    private router: Router,
  ) {}

  ngOnInit(){
    this.user = this.stock.getToken()
    console.log(this.user)
  }

  // makePayment() {
  //   const token = '1234';  // Remplacez par votre clé API
  //   const amount = 300;
  //   const identifier = '10';
  //   const description = 'Achat de test';
  //   const url = 'https://votre-site.com/success';

  //   this.paymentService.redirectToPayment(token, amount, identifier, description, url);
  // }

  makePayment() {
    this.token = this.stock.getToken();
    const token = this.token;
    const url = 'http://localhost:4200/home/acceuil';
    const {amount, identifier, description, phone, network } = this.paymentData;
    // this.router.navigate(['/home/acceuil']);
    this.toaster.showWarring('Service non disponible pour le moment','payement')
    // this.paymentService.redirectToPayment(token, amount, identifier, description, url, phone, network);
  }
}
