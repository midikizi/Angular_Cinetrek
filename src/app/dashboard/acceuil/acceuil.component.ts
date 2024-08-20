import { Component, OnInit } from '@angular/core';
import { StockInfoService } from 'src/app/service/stock-info.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {

    user!: any;

  constructor(
    private stock:StockInfoService
  ){}

  ngOnInit(): void {
    this.user = this.stock.getuserinfo()
    console.log(this.user)
  }
}
