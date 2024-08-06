import { Component, OnInit } from '@angular/core';
import { Salle } from 'src/app/models/salle';
import { SalleService } from 'src/app/service/salle.service';

@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.css']
})
export class SalleComponent implements OnInit{
  Salles!: Salle[];

  constructor(private service: SalleService){}

  ngOnInit(){
    this.getSalle();
  }

  getSalle() {
    this.service.getAllSalle().subscribe((data:Salle[])=>{
      this.Salles = data;
      console.log(data);
    },(error)=>{console.log("error")});
  }

  deleteProjection(id:number){
    this.service.deleteSalle(id).subscribe((data)=>{
      console.log(data);
      this.getSalle();
    },(error)=>{
      console.log("error");
    });
  }

}
