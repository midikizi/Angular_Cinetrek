import { Component, OnInit  } from '@angular/core';
import { Ville } from 'src/app/models/ville';
import { VilleService } from 'src/app/service/ville.service';

@Component({
  selector: 'app-ville',
  templateUrl: './ville.component.html',
  styleUrls: ['./ville.component.css']
})
export class VilleComponent {

  villes!: Ville[];

  constructor(private service: VilleService){}

  ngOnInit() {
    this.getVille();
  }
  getVille() {
    this.service.getAllVille().subscribe((data: Ville[])=>{
      this.villes = data;
      console.log(data);
    },
    (error)=>{
      console.log("error")
    });
  }

  deleteVille(id:number){
    this.service.deleteVille(id).subscribe((data)=>{
      console.log(data);
      this.getVille();
    },
    (error)=>{
      console.log("error")
    });
  }

}
