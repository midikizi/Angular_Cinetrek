import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  registerForm:FormGroup|any ;
  users!: User[];

errorMessage: string = '';

  constructor(private authService: UserService,
    private router: Router,
    private fb: FormBuilder,
  ) { }

  ngOnInit(){
    this.registerForm = this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required],
      email:['',Validators.required],
      first_name:['',Validators.required],
      last_name:['',Validators.required],
      userType:['',Validators.required],
    })
  }

  register(): void {
    console.log(this.registerForm?.value)
    // if(this.registerForm.value.userType == 'gerant'){
    //   console.log("gerant")
    // }else{
    //   console.log("client")
    // }
    if (this.registerForm.value.userType ==  'gerant') {
      this.authService.registerGerant(this.registerForm.value).subscribe(
        (res)=>{
        console.log(res);
        this.router.navigateByUrl("/auth/login");
        if(res.id!=null){
          this.router.navigate(['/auth/login']);
        }
      },
      (error)=>{
        this.errorMessage = "Champ incorrect"
        console.error(error)
      });
    } else {
      this.authService.registerClient(this.registerForm.value).subscribe(
        (res)=>{
        console.log(res);
        this.router.navigateByUrl("/auth/login");
        if(res.id!=null){
          this.router.navigate(['/auth/login']);
        }
      },
      (error)=>{
        this.errorMessage = "Champ incorrect"
        console.error(error)
      });
    }
  }
}
