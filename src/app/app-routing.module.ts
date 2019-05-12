import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviebrowserComponent } from './moviebrowser/moviebrowser.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { ActordetailsComponent } from './actordetails/actordetails.component';

const routes: Routes = [
  {
    path: '',
    component: MoviebrowserComponent,
    data: { title: 'Filmek listája' }
  },
  {
    path: ':id',
    component: MoviedetailsComponent,
    data: { title: 'Film részletei' }
  },
  {
    path: 'actor/:id',
    component: ActordetailsComponent,
    data: { title: 'Film részletei' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
