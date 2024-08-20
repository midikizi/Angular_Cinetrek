import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Ville } from 'src/app/models/ville';
import { CinemaService } from 'src/app/service/cinema.service';
import { VilleService } from 'src/app/service/ville.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateCinemaComponent implements OnInit{
  latitude: number | null = null;
  longitude: number | null = null;
  error: string | null = null;

  updateCinemaForm: FormGroup|any;
  id: number = this.activatedRoute.snapshot.params["id"];
  villes!: Ville[];

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private service: CinemaService,
    private villeService: VilleService
  ){}

  ngOnInit(){
    this.getCinemaById();
    this.updateCinemaForm = this.fb.group({
      nom: ['', Validators.required],
      nombreSalle: ['', Validators.required],
      longitude: ['', Validators.required],
      latitute: ['', Validators.required],
      altitude: ['', Validators.required],
      ville: ['', Validators.required],
  })

    this.getVille();
  }

  getVille() {
    this.villeService.getAllVille().subscribe(
      (data)=>{
      this.villes = data.results;
      console.log(data.results);
    },
    (error)=>{
      console.log("error")
    });
  }


  getCinemaById(){
    this.service.getById(this.id).subscribe((res)=>{
      console.log(res);
      this.updateCinemaForm.patchValue(res);
    })
  }

  updateCinema(){
    console.log(this.updateCinemaForm.value);
    this.service.updateCinema(this.id,this.updateCinemaForm.value).subscribe((res)=>{
      console.log(res);
        if(res.id != null){
          this.router.navigate(['/home/cinema']);
        }
    });
  }

  getLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => this.showPosition(position),
        error => this.showError(error)
      );
    } else {
      this.error = "Geolocation is not supported by this browser.";
    }
  }

  // Afficher la position
  showPosition(position: GeolocationPosition): void {
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;
  }

  // Afficher les erreurs de localisation
  showError(error: GeolocationPositionError): void {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        this.error = "User denied the request for Geolocation.";
        break;
      case error.POSITION_UNAVAILABLE:
        this.error = "Location information is unavailable.";
        break;
      case error.TIMEOUT:
        this.error = "The request to get user location timed out.";
        break;
      // case error.UNKNOWN_ERROR:
      //   this.error = "An unknown error occurred.";
      //   break;
    }
  }
}
