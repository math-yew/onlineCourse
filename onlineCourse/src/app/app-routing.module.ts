import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssignmentComponent } from './assignment/assignment.component';
import { CreateComponent } from './create/create.component';
import { ResultsListComponent } from './results-list/results-list.component';
import { AssignmentListComponent } from './assignment-list/assignment-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/assignment', pathMatch: 'full'},
  { path: 'assignment/:id', component: AssignmentComponent },
  { path: 'assignmentList', component: AssignmentListComponent },
  { path: 'resultsList', component: ResultsListComponent },
  { path: 'create', component: CreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
