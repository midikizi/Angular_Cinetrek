import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Ville } from 'src/app/models/ville';
import { VilleService } from 'src/app/service/ville.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostVilleComponent implements OnInit{
  latitude: number | null = null;
  longitude: number | null = null;
  error: string | null = null;
  
  postVilleForm: FormGroup | any
  villes!: Ville[];

  constructor(private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private service: VilleService,
    private router: Router) {}

    ngOnInit(){
      this.postVilleForm = this.fb.group({
        nom:['', Validators.required],
        longitude:['', Validators.required],
        latitute:['', Validators.required],
        altitude: ['', Validators.required],
      })
    }

    postVille(){
      this.service.postVille(this.postVilleForm.value).subscribe((res)=>{
        console.log(res);
        if(res.id != null){
          this.router.navigate(['/home/ville']);
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
