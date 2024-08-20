import { Component, OnInit } from '@angular/core';
import { Seance } from 'src/app/models/seance';
import { SeanceService } from 'src/app/service/seance.service';

@Component({
  selector: 'app-seance',
  templateUrl: './seance.component.html',
  styleUrls: ['./seance.component.css']
})
export class SeanceComponent implements OnInit{
  Seances!: Seance[];

  constructor(private service: SeanceService){}

  ngOnInit(): void {
    this.getSeance();
  }

  getSeance() {
    this.service.getAllSeance().subscribe(
      (data)=>{
      this.Seances=data.results;
      console.log(data.results);
    },
    (error)=>{
      console.log("error")
    });
  }

  deleteSeance(id:number){
    this.Seances = this.Seances.filter(obj=> obj.id !== id);
    this.service.deleteSeance(id).subscribe((data)=>{
      console.log(data);
    },
    (error)=>{
      console.log("error")
    });
  }

}
