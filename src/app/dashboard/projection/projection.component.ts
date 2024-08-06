import { Component, OnInit } from '@angular/core';
import { Projection } from 'src/app/models/projection';
import { ProjectionProjection } from 'src/app/service/projection.service';

@Component({
  selector: 'app-projection',
  templateUrl: './projection.component.html',
  styleUrls: ['./projection.component.css']
})
export class ProjectionComponent implements OnInit{
  projections!: Projection[];
  projection : Projection | undefined;

  constructor(private service: ProjectionProjection){}

  ngOnInit() {
    this.getProjection();
  }

  getProjection() {
    this.service.getAllProjection().subscribe((data:Projection[])=>{
      this.projections = data;
      console.log(data);
    },(error)=>{console.log("error")});
  }

  deleteProjection(id:number){
    this.service.deleteProjection(id).subscribe((data)=>{
      console.log(data);
      this.getProjection();
    },(error)=>{
      console.log("error");
    });
  }

}
