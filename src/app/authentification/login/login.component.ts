import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  logindata = {
    username:"",
    password:""
  }
  errorMessage:string="";
 

  constructor(private authService: UserService, private router: Router) { }

  login(): void {
    console.log(this.logindata)
    this.authService.login( this.logindata).subscribe(
      (rep)=>{
        console.log(rep);
        localStorage.setItem('token', rep.token);
        this.router.navigateByUrl("home");
      },
      (error)=>{
        this.errorMessage = "Erreur de connexion"
        console.error(error)
      }
    )
  }
}
