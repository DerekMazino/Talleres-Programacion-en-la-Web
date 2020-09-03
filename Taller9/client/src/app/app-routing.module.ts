import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PersonListComponent} from './components/person-list/person-list.component';
import { PersonFormComponent } from './components/person-form/person-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/persons',
    pathMatch: 'full'
  },
  {
    path: 'persons',
    component: PersonListComponent
  },
  {
    path: 'persons/add',
    component: PersonFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
