import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategorieComponent } from './dashboard/categorie/categorie.component';
import { PostComponent } from './dashboard/categorie/post/post.component';
import { UpdateComponent } from './dashboard/categorie/update/update.component';
import { CinemaComponent } from './dashboard/cinema/cinema.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FilmComponent } from './dashboard/film/film.component';
import { GridComponent } from './dashboard/film/grid/grid.component';
import { ShowComponent } from './dashboard/film/show/show.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { PlaceComponent } from './dashboard/place/place.component';
import { ProjectionComponent } from './dashboard/projection/projection.component';
import { SalleComponent } from './dashboard/salle/salle.component';
import { SeanceComponent } from './dashboard/seance/seance.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { TicketComponent } from './dashboard/ticket/ticket.component';
import { VilleComponent } from './dashboard/ville/ville.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { LoginComponent } from './authentification/login/login.component';
import { RegisterComponent } from './authentification/register/register.component';
import {HttpinterceportInterceptor} from './service/httpinterceport.interceptor'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FilmComponent,
    CinemaComponent,
    TicketComponent,
    SalleComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    CategorieComponent,
    PlaceComponent,
    ProjectionComponent,
    SeanceComponent,
    VilleComponent,
    PostComponent,
    UpdateComponent,
    ShowComponent,
    GridComponent,
    AuthentificationComponent,
    LoginComponent,
    RegisterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpinterceportInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
