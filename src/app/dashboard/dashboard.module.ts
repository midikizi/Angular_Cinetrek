import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CategorieComponent } from './categorie/categorie.component';
import { PostComponent } from './categorie/post/post.component';
import { UpdateComponent } from './categorie/update/update.component';
import { CinemaComponent } from './cinema/cinema.component';
import { FilmComponent } from './film/film.component';
import { GridComponent } from './film/grid/grid.component';
import { ShowComponent } from './film/show/show.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PlaceComponent } from './place/place.component';
import { ProjectionComponent } from './projection/projection.component';
import { SalleComponent } from './salle/salle.component';
import { SeanceComponent } from './seance/seance.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TicketComponent } from './ticket/ticket.component';
import { VilleComponent } from './ville/ville.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostCinemaComponent } from './cinema/post/post.component';
import { PostFilmComponent } from './film/post/post.component';
import { PostProjectionComponent } from './projection/post/post.component';


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
    ShowComponent,
    GridComponent,
    PostCinemaComponent,
    PostFilmComponent ,
    PostProjectionComponent ,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class DashboardModule { }
