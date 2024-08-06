import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorieComponent } from './dashboard/categorie/categorie.component';
import { PostComponent } from './dashboard/categorie/post/post.component';
import { UpdateComponent } from './dashboard/categorie/update/update.component';
import { CinemaComponent } from './dashboard/cinema/cinema.component';
import { FilmComponent } from './dashboard/film/film.component';

import { PostCinemaComponent } from './dashboard/cinema/post/post.component';
import { UpdateCinemaComponent } from './dashboard/cinema/update/update.component';
import { GridComponent } from './dashboard/film/grid/grid.component';
import { PostFilmComponent } from './dashboard/film/post/post.component';
import { ShowComponent } from './dashboard/film/show/show.component';
import { UpdateFilmComponent } from './dashboard/film/update/update.component';
import { PlaceComponent } from './dashboard/place/place.component';
import { PostPlaceComponent } from './dashboard/place/post/post.component';
import { PostProjectionComponent } from './dashboard/projection/post/post.component';
import { ProjectionComponent } from './dashboard/projection/projection.component';
import { ShowComponentProjection } from './dashboard/projection/show/show.component';
import { UpdateProjectionComponent } from './dashboard/projection/update/update.component';
import { PostSalleComponent } from './dashboard/salle/post/post.component';
import { SalleComponent } from './dashboard/salle/salle.component';
import { UpdateSalleComponent } from './dashboard/salle/update/update.component';
import { SeanceComponent } from './dashboard/seance/seance.component';
import { TicketComponent } from './dashboard/ticket/ticket.component';
import { VilleComponent } from './dashboard/ville/ville.component';
import { LoginComponent } from './authentification/login/login.component';
import { RegisterComponent } from './authentification/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  // Authentification
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  // home
  {path:'home', component: DashboardComponent},
  // path categorie
  {path: 'categorie', component: CategorieComponent},
  {path: 'postCategorie', component: PostComponent},
  {path: 'updateCategorie/:id', component: UpdateComponent},
  // path  cinema
  {path: 'postCinema', component: PostCinemaComponent},
  {path: 'updateCinema/:id', component: UpdateCinemaComponent},
  {path: 'cinema', component: CinemaComponent},
  //path place
  {path: 'postPlace', component: PostPlaceComponent},
  {path: 'updatePlace/:id', component: UpdateCinemaComponent},
  {path: 'place', component: PlaceComponent},
  //path projection
  {path: 'postProjection', component: PostProjectionComponent},
  {path: 'updateProjection/:id', component: UpdateProjectionComponent},
  {path: 'projection', component:ProjectionComponent},
  {path: 'showProjection/:id', component: ShowComponentProjection},
  //path salle
  {path: 'postSalle', component: PostSalleComponent},
  {path: 'updateSalle', component: UpdateSalleComponent},
  {path: 'salle', component: SalleComponent},
  //path seance
  {path: 'seance', component: SeanceComponent},
  //path ticket
  {path: 'ticket', component: TicketComponent},
  // path ville
  {path: 'ville', component: VilleComponent},

// path de films
  {path: 'showFilm', component: ShowComponent},
  {path: 'gridFilm', component: GridComponent},
  {path: 'updateFilm', component: UpdateFilmComponent},
  {path: 'postFilm', component: PostFilmComponent},
  {path: 'film', component: FilmComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
