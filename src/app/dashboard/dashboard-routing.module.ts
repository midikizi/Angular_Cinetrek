import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuardGuard } from '../service/auth-guard.guard';
import { AcceuilComponent } from './acceuil/acceuil.component';
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
import { UpdateFilmComponent } from './film/update/update.component';
import { PlaceComponent } from './place/place.component';
import { PostPlaceComponent } from './place/post/post.component';
import { UpdatePlaceComponent } from './place/update/update.component';
import { PostProjectionComponent } from './projection/post/post.component';
import { ProjectionComponent } from './projection/projection.component';
import { UpdateProjectionComponent } from './projection/update/update.component';
import { PostSalleComponent } from './salle/post/post.component';
import { SalleComponent } from './salle/salle.component';
import { UpdateSalleComponent } from './salle/update/update.component';
import { TicketComponent } from './ticket/ticket.component';
import { PostVilleComponent } from './ville/post/post.component';
import { UpdateVilleComponent } from './ville/update/update.component';
import { VilleComponent } from './ville/ville.component';
import { PostTicketComponent } from './ticket/post/post.component';
import { UpdateTicketComponent } from './ticket/update/update.component';
import { PaymentComponentComponent } from './payment-component/payment-component.component';
import { ShowFilmComponent } from './show-film/show-film.component';
import { ShowProjectionComponent } from './show-projection/show-projection.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {path:'show-fim',component:ShowFilmComponent},
      {path:'show-projection',component:ShowProjectionComponent},
      {path:'acceuil',component: AcceuilComponent},
      {path:'payement',component: PaymentComponentComponent},
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
      { path: 'updatePlace/:id', component: UpdatePlaceComponent },
      { path: 'place', component: PlaceComponent },
      //path projection
      { path: 'postProjection', component: PostProjectionComponent, canActivate: [authGuardGuard] },
      { path: 'updateProjection/:id', component: UpdateProjectionComponent, canActivate: [authGuardGuard]},
      { path: 'projection', component: ProjectionComponent },

      //path salle
      { path: 'postSalle', component: PostSalleComponent },
      { path: 'updateSalle/:id', component: UpdateSalleComponent },
      { path: 'salle', component: SalleComponent },

      //path ticket
      {path: 'ticket', component: TicketComponent },
      {path: 'postTicket', component: PostTicketComponent},
      {path:'updateTicket', component: UpdateTicketComponent},
      // path ville
      { path: 'ville', component: VilleComponent },
      {path: 'postVille', component: PostVilleComponent},
      {path: 'updateVille/:id', component: UpdateVilleComponent},

      // path de films
      { path: 'gridFilm', component: GridComponent },
      { path: 'updateFilm/:id', component: UpdateFilmComponent, canActivate: [authGuardGuard] },
      { path: 'postFilm', component: PostFilmComponent, canActivate: [authGuardGuard] },
      { path: 'film', component: FilmComponent},

      { path: '**', redirectTo:'', pathMatch: 'full'},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
