import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cinema } from 'src/app/models/cinema';
import { Ville } from 'src/app/models/ville';
import { CinemaService } from 'src/app/service/cinema.service';
import { VilleService } from 'src/app/service/ville.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostCinemaComponent implements OnInit{
  latitude: number | null = null;
  longitude: number | null = null;
  error: string | null = null;

  postCinemaForm:FormGroup|any
  cinemas!: Cinema[];
  villes!: Ville[];

  constructor(private fb: FormBuilder,
    private router: Router,
    private service: CinemaService,
    private villeService: VilleService
  ){}

  ngOnInit(){
    this.getVille();
    this.postCinemaForm = this.fb.group({
      nom: ['', Validators.required],
      nombreSalle: ['', Validators.required],
      longitude: ['', Validators.required],
      latitute: ['', Validators.required],
      altitude: ['', Validators.required],
      ville: ['', Validators.required],
  })
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

  postCinema(){
    console.log(this.postCinemaForm?.value);
    this.service.postCinema(this.postCinemaForm.value).subscribe((res)=>{
      console.log(res);
      if(res.id != null){
        this.router.navigate(['/home/cinema']);
      }
    })
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
