import { Component, OnInit} from '@angular/core';
import { Cinema } from 'src/app/models/cinema';
import { CinemaService } from 'src/app/service/cinema.service';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit{
  cinemas!:Cinema[];
  cinema: Cinema | undefined;

  constructor(
    private service: CinemaService,){}
  ngOnInit() {
    this.getCinema();
  }

  getCinema(){
    this.service.getAllCinema().subscribe(
      (data)=>{
      this.cinemas=data.results;
      console.log(data.results);
    },
    (error)=>{
      console.log("error", error)
    });
  }

  deleteCinema(id:number){
    this.service.deleteCinema(id).subscribe((data)=>{
      console.log(data);
      this.getCinema();
    },
    (error)=>{
      console.log("error", error)
    });
  }

  // getByName(name:string){
  //   this.service.getCinemaByName().subscribe((data:Cinema[])=>{
  //     this.noms=data;
  //   })
  // }

}
