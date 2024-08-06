import { Component, OnInit  } from '@angular/core';
import { Place } from 'src/app/models/place';
import { PlaceService } from 'src/app/service/place.service';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit{
  places!: Place[];
  place: Place | undefined;

  constructor(private service: PlaceService){}

  ngOnInit(){
    this.getPlace();
  }

  getPlace() {
    this.service.getAllPlace().subscribe((data:Place[])=>{
      this.places = data;
      console.log(data);
    },
    (error) => {console.log("error")});
  }

  deletePlace(id:number){
    this.service.deletePlace(id).subscribe((data)=>{
      console.log(data);
      this.getPlace();
    },
    (error)=>{
      console.log("error")
    });
  }

}
