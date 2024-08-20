import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CategorieComponent } from './categorie/categorie.component';
import { PostComponent } from './categorie/post/post.component';
import { UpdateComponent } from './categorie/update/update.component';
import { CinemaComponent } from './cinema/cinema.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FilmComponent } from './film/film.component';
import { GridComponent } from './film/grid/grid.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PlaceComponent } from './place/place.component';
import { ProjectionComponent } from './projection/projection.component';
import { SalleComponent } from './salle/salle.component';
import { SeanceComponent } from './seance/seance.component';
// import { ShowfilmComponent } from './showfilm/showfilm.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TicketComponent } from './ticket/ticket.component';
import { VilleComponent } from './ville/ville.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { PostCinemaComponent } from './cinema/post/post.component';
import { UpdateCinemaComponent } from './cinema/update/update.component';
import { PostFilmComponent } from './film/post/post.component';
import { UpdateFilmComponent } from './film/update/update.component';
import { PostPlaceComponent } from './place/post/post.component';
import { UpdatePlaceComponent } from './place/update/update.component';
import { PostProjectionComponent } from './projection/post/post.component';
import { UpdateProjectionComponent } from './projection/update/update.component';
import { PostSalleComponent } from './salle/post/post.component';
import { UpdateSalleComponent } from './salle/update/update.component';
import { PostSeanceComponent } from './seance/post/post.component';
import { UpdateSeanceComponent } from './seance/update/update.component';
// import { ShowComponentProjection } from './show/show.component';
import { PostTicketComponent } from './ticket/post/post.component';
import { UpdateTicketComponent } from './ticket/update/update.component';
import { PostVilleComponent } from './ville/post/post.component';
import { UpdateVilleComponent } from './ville/update/update.component';
import { PaymentComponentComponent } from './payment-component/payment-component.component';
import { ShowProjectionComponent } from './show-projection/show-projection.component';
import { ShowFilmComponent } from './show-film/show-film.component';


@NgModule({
  declarations: [
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
    // ShowfilmComponent,
    GridComponent,
    PostCinemaComponent,
    PostFilmComponent ,
    PostProjectionComponent,
    PostSalleComponent,
    PostPlaceComponent,
    PostSeanceComponent,
    PostVilleComponent,
    PostTicketComponent,
    UpdateCinemaComponent,
    UpdateFilmComponent,
    UpdatePlaceComponent,
    UpdateProjectionComponent,
    UpdateSalleComponent,
    UpdateSeanceComponent,
    UpdateTicketComponent,
    UpdateVilleComponent,
    AcceuilComponent,
    PaymentComponentComponent,
    ShowProjectionComponent,
    ShowFilmComponent,
    // ShowComponentProjection ,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class DashboardModule { }
