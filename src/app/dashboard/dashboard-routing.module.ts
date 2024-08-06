import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorieComponent } from './categorie/categorie.component';
import { PostComponent } from './categorie/post/post.component';
import { UpdateComponent } from './categorie/update/update.component';
import { CinemaComponent } from './cinema/cinema.component';
import { PostCinemaComponent } from './cinema/post/post.component';
import { UpdateCinemaComponent } from './cinema/update/update.component';
import { DashboardComponent } from './dashboard.component';
import { FilmComponent } from './film/film.component';
import { GridComponent } from './film/grid/grid.component';
import { PostFilmComponent } from './film/post/post.component';
import { ShowComponent } from './film/show/show.component';
import { UpdateFilmComponent } from './film/update/update.component';
import { PlaceComponent } from './place/place.component';
import { PostPlaceComponent } from './place/post/post.component';
import { PostProjectionComponent } from './projection/post/post.component';
import { ProjectionComponent } from './projection/projection.component';
import { ShowComponentProjection } from './projection/show/show.component';
import { UpdateProjectionComponent } from './projection/update/update.component';
import { PostSalleComponent } from './salle/post/post.component';
import { SalleComponent } from './salle/salle.component';
import { UpdateSalleComponent } from './salle/update/update.component';
import { SeanceComponent } from './seance/seance.component';
import { TicketComponent } from './ticket/ticket.component';
import { VilleComponent } from './ville/ville.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      // path categorie
      
      { path: 'categorie', component: CategorieComponent },
      { path: 'postCategorie', component: PostComponent },
      { path: 'updateCategorie/:id', component: UpdateComponent },
      // path  cinema
      { path: 'postCinema', component: PostCinemaComponent },
      { path: 'updateCinema/:id', component: UpdateCinemaComponent },
      { path: 'cinema', component: CinemaComponent },
      //path place
      { path: 'postPlace', component: PostPlaceComponent },
      { path: 'updatePlace/:id', component: UpdateCinemaComponent },
      { path: 'place', component: PlaceComponent },
      //path projection
      { path: 'postProjection', component: PostProjectionComponent },
      { path: 'updateProjection/:id', component: UpdateProjectionComponent },
      { path: 'projection', component: ProjectionComponent },
      { path: 'showProjection/:id', component: ShowComponentProjection },
      //path salle
      { path: 'postSalle', component: PostSalleComponent },
      { path: 'updateSalle', component: UpdateSalleComponent },
      { path: 'salle', component: SalleComponent },
      //path seance
      { path: 'seance', component: SeanceComponent },
      //path ticket
      { path: 'ticket', component: TicketComponent },
      // path ville
      { path: 'ville', component: VilleComponent },

      // path de films
      { path: 'showFilm', component: ShowComponent },
      { path: 'gridFilm', component: GridComponent },
      { path: 'updateFilm', component: UpdateFilmComponent },
      { path: 'postFilm', component: PostFilmComponent },
      { path: 'film', component: FilmComponent },
      { path: '**', redirectTo:'', pathMatch: 'full'},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
