import { Component, OnInit } from '@angular/core';
import { StockInfoService } from 'src/app/service/stock-info.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{

  user!: any;

  constructor(
    private stock:StockInfoService
  ){}

  ngOnInit(): void {
    this.user = this.stock.getuserinfo()
    console.log(this.user)
  }
}
