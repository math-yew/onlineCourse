import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateComponent } from './create/create.component';
import { AssignmentListComponent } from './assignment-list/assignment-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AssignmentComponent,
    CreateComponent,
    AssignmentListComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    MatRadioModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
